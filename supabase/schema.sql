create extension if not exists "pgcrypto";

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  cover_image text not null,
  author text not null,
  seo_title text,
  seo_description text,
  seo_keywords text,
  is_published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_posts_published_at
  on public.posts(is_published, published_at desc);

create or replace function public.set_updated_at_posts()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_posts_updated_at on public.posts;
create trigger trg_posts_updated_at
before update on public.posts
for each row
execute function public.set_updated_at_posts();

alter table public.posts enable row level security;

-- Allow public read only for published posts.
drop policy if exists "Public can view published posts" on public.posts;
create policy "Public can view published posts"
on public.posts for select
to anon, authenticated
using (is_published = true);

-- Keep write access restricted to service-role key via server-side APIs.
