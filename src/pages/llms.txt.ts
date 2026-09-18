import type { APIRoute } from "astro";
import { copyByLocale, fillTemplate } from "../data/copy";
import { site } from "../data/site";

function toAbsolute(siteUrl: URL, path: string): string {
  return new URL(path, siteUrl).href;
}

function getLlmsTxt(siteUrl: URL): string {
  const en = copyByLocale.en;
  const nl = copyByLocale.nl;
  const enAbout = fillTemplate(en.over.body, {
    location: site.location,
    name: site.name,
  });
  const nlAbout = fillTemplate(nl.over.body, {
    location: site.location,
    name: site.name,
  });

  return `# ${site.name}

> ${en.tagline}

${enAbout}

${nlAbout}

- Email: ${site.email}
- Location: ${site.location}, Netherlands
- Facebook: ${site.facebookUrl}

## Pages

- [Home (NL)](${toAbsolute(siteUrl, "/")})
- [Home (EN)](${toAbsolute(siteUrl, "/en/")})
- [${nl.diensten.title} (NL)](${toAbsolute(siteUrl, "/diensten/")})
- [${en.diensten.title} (EN)](${toAbsolute(siteUrl, "/en/diensten/")})
- [${nl.werk.title} (NL)](${toAbsolute(siteUrl, "/werk/")})
- [${en.werk.title} (EN)](${toAbsolute(siteUrl, "/en/werk/")})
- [${nl.over.title} (NL)](${toAbsolute(siteUrl, "/over/")})
- [${en.over.title} (EN)](${toAbsolute(siteUrl, "/en/over/")})
- [${nl.contact.title} (NL)](${toAbsolute(siteUrl, "/contact/")})
- [${en.contact.title} (EN)](${toAbsolute(siteUrl, "/en/contact/")})

## Services

- ${en.services[0].title}: ${en.services[0].body}
- ${en.services[1].title}: ${en.services[1].body}
- ${en.services[2].title}: ${en.services[2].body}
`;
}

export const GET: APIRoute = function GET({ site: siteUrl }) {
  const origin = siteUrl ?? new URL(site.url);
  return new Response(getLlmsTxt(origin), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
