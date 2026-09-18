import type { APIRoute } from "astro";
import { site } from "../data/site";

function getRobotsTxt(sitemapUrl: URL): string {
  return `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${sitemapUrl.href}
`;
}

export const GET: APIRoute = function GET({ site: siteUrl }) {
  const origin = siteUrl ?? new URL(site.url);
  const sitemapUrl = new URL("sitemap-index.xml", origin);
  return new Response(getRobotsTxt(sitemapUrl), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
