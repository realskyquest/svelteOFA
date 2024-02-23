import { dev } from '$app/environment';

export default {
	title: 'svelteOFA',
	description: 'A simple to use sveltekit webapp with fully setup environment',
	base: dev ? 'http://localhost:5173' : 'https://svelteofa--realskyquest.pages.dev',
	pwa: {	
		// https://web.dev/learn/pwa - Learn more | https://www.pwabuilder.com/ - Use to ship PWA to app stores | https://webboard.app/manifest.json - Example
		name: "svelte One for All",
		short_name: "svelteOFA",
		start_url: '/',
		id: '/',
		display: 'standalone',
		background_color: '#17191c',
		theme_color: '#ff3f20',
		description: "Download and use svelteOFA, offline anywhere at anytime",
		icons: [
			{
				src: 'pwa-64x64.png',
				sizes: '64x64',
				type: 'image/png'
			},
			{
				src: 'pwa-192x192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: 'pwa-512x512.png',
				sizes: '512x512',
				type: 'image/png'
			},
			{
				src: 'maskable-icon-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'maskable'
			}
		]
	}
};
