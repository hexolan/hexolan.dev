import type { APIRoute } from "astro";

const robotsFile = `
User-agent: *
Allow: /
Disallow: /cdn-cgi/
Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
Host: ${import.meta.env.SITE}
`.trim()

export const GET: APIRoute = () => {
  return new Response(
    robotsFile,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    }
  )
}