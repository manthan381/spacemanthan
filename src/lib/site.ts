export const SITE_NAME = "Spacemanthan";

export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && envUrl.startsWith("http")) {
    return envUrl.replace(/\/$/, "");
  }
  return "http://localhost:3000";
}
