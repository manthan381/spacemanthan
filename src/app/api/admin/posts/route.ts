import { verifyAdminFromCookieHeader } from "@/lib/admin/session";
import { blogPostCreateSchema, slugify, validateSlug } from "@/lib/blog/validation";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

type PostRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image: string | null;
  author: string | null;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
  is_published: boolean;
  published_at: string | null;
  created_at: string | null;
  updated_at: string | null;
};

function toAdminPost(row: PostRow) {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt ?? "",
    content: row.content ?? "",
    cover_image: row.cover_image ?? "",
    author_name: row.author ?? "",
    meta_title: row.seo_title,
    meta_desc: row.seo_description,
    meta_keyword: row.seo_keywords,
    status: row.is_published ? "published" : "draft",
    published_at: row.published_at,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

export async function GET(req: Request) {
  if (!verifyAdminFromCookieHeader(req.headers.get("cookie"))) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const client = getSupabaseAdminClient();
  if (!client) {
    return NextResponse.json(
      { success: false, error: "Supabase admin is not configured" },
      { status: 500 }
    );
  }

  const { data, error } = await client
    .from("posts")
    .select(
      "id,title,slug,excerpt,content,cover_image,author,seo_title,seo_description,seo_keywords,is_published,published_at,created_at,updated_at"
    )
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, posts: (data ?? []).map(toAdminPost) });
}

export async function POST(req: Request) {
  if (!verifyAdminFromCookieHeader(req.headers.get("cookie"))) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const client = getSupabaseAdminClient();
  if (!client) {
    return NextResponse.json(
      { success: false, error: "Supabase admin is not configured" },
      { status: 500 }
    );
  }

  const parsed = blogPostCreateSchema.safeParse(await req.json());
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 }
    );
  }

  const payload = parsed.data;

  const slug = payload.slug ? slugify(payload.slug) : slugify(payload.title);
  if (!validateSlug(slug)) {
    return NextResponse.json(
      { success: false, error: "Invalid slug format" },
      { status: 400 }
    );
  }

  const status = payload.status ?? "draft";
  const isPublished = status === "published";

  const { data, error } = await client
    .from("posts")
    .insert({
      title: payload.title,
      slug,
      excerpt: payload.excerpt ?? payload.content.slice(0, 140),
      content: payload.content,
      cover_image: payload.coverImage,
      author: payload.authorName,
      seo_title: payload.metaTitle?.trim() || null,
      seo_description: payload.metaDesc?.trim() || null,
      seo_keywords: payload.metaKeyword?.trim() || null,
      is_published: isPublished,
      published_at: isPublished ? new Date().toISOString() : null,
    })
    .select("id")
    .single();

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { success: false, error: "Slug already exists. Try a different slug." },
        { status: 409 }
      );
    }

    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);

  return NextResponse.json({ success: true, id: data.id }, { status: 201 });
}
