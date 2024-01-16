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

interface websiteConfigType {
	author: string;
	title: string;
	description: string;
	url: string;
	contactEmail: string | undefined;
	githubPage: string | undefined;
	socialMedia: Array<string> | undefined;
}
