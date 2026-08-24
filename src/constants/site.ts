/**
 * URL pública canônica do site, usada em metadata (Open Graph),
 * sitemap.xml e robots.txt.
 *
 * Prioridade: NEXT_PUBLIC_SITE_URL definida manualmente > domínio de
 * produção que a Vercel injeta automaticamente (VERCEL_PROJECT_PRODUCTION_URL,
 * sem protocolo) > fallback local para desenvolvimento.
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();
