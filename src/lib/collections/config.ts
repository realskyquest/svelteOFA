import { dev } from '$app/environment';

export const appConfig: APP_config = {
	author: 'realSkyQuest',
	title: 'Svelte OFA',
	description: 'Svelte OFA: One for All!, A standard template for your SvelteKit app.',
	url: dev == true ? 'http://localhost:5173' : 'https://svelteofa--realskyquest.pages.dev',
	contactEmail: 'https://github.com/realskyquest',
	githubPage: 'https://github.com/realskyquest/svelteofa',
	socialMedia: undefined
};

interface APP_config {
	author: string;
	title: string;
	description: string;
	url: string;
	contactEmail: string;
	githubPage: string;
	socialMedia: undefined;
}
