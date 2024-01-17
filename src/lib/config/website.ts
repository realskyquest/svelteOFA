import { dev } from '$app/environment';

export const websiteConfig: websiteConfigType = {
	author: 'skyquest',
	title: 'svelte OFA',
	description: 'Sveltekit one for all!',
	url: dev ? 'http://localhost:5174' : 'https://svelteofa--realskyquest.pages.dev',
	contactEmail: 'example@example.com',
	githubPage: 'https://github.com/realskyquest/svelteOFA',
	socialMedia: undefined
};

export const websitePWAConfig: pwaType = {
	name: websiteConfig.title,
	short_name: websiteConfig.title,
	start_url: '/',
	id: '/',
	display: 'standalone',
	background_color: '#17191c',
	theme_color: '#ff3f20',
	description: websiteConfig.description,
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

// TYPE CHECKING ----------------------------------------------------------------------------------------- //

interface websiteConfigType {
	author: string;
	title: string;
	description: string;
	url: string;
	contactEmail: string | undefined;
	githubPage: string | undefined;
	socialMedia: Array<socialMediaType> | undefined;
}

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

// { type: "twitter" link:"twitter.com/user" icon: "icon-link" }
interface socialMediaType {
	type: string;
	link: string;
	icon: string | undefined;
}
