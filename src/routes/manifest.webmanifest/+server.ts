import { PWAConfig } from '$lib/collections/pwa';

export const prerender = true;

// Produce a manifest.webmanifest according to config
export async function GET() {
	const headers = { 'Content-Type': 'application/manifest+json' };
	return new Response(JSON.stringify(PWAConfig), { headers });
}
