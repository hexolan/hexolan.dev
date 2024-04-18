import type { APIRoute } from "astro";

import { getManifestIcons } from "../assets/icons";

export const GET: APIRoute = () => {
  const manifest = {
    "name": "Hexolan",
    "short_name": "Hexolan",
    "start_url": "/",
    "background_color": "#0F172A",
    "theme_color": "#0F172A",
    "display": "standalone",
    "icons": getManifestIcons()
  }

  return new Response(
    JSON.stringify(manifest),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }
  )
}