import { appConfig } from '$lib/collections/config';

export const prerender = true;

// Produce a manifest.webmanifest according to config
export async function GET() {
	const headers = { 'Content-Type': 'application/xml' };

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${appConfig.url}/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    <url>
        <loc>${appConfig.url}/</loc>
        <image:image>
            <image:loc>/pwa-512x512.png</image:loc>
        </image:image>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>
</urlset>
    `;

	return new Response(xml, { headers });
}
