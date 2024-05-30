import { appConfig } from '$lib/collections/config';

export const PWAConfig: pwaType = {
	name: appConfig.title,
	short_name: appConfig.title,
	start_url: '/',
	id: '/',
	display: 'standalone',
	background_color: '#17191c',
	theme_color: '#ff3f20',
	description: appConfig.description,
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
};

interface pwaType {
	name: string;
	short_name: string;
	start_url: string;
	id: string;
	display: 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser';
	background_color: string;
	theme_color: string;
	description: string;
	icons: Array<object>;
}
