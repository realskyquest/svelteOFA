import { dev } from '$app/environment';

export const websiteConfig: websiteConfigType = {
	author: 'skyquest',
	title: 'svelte OFA',
	description: 'Sveltekit one for all!',
	url: dev ? 'http://localhost:5174' : 'https://svelteofa--realskyquest.pages.dev',
	contactEmail: 'example@example.com',
	githubPage: 'https://github.com/realskyquest/svelteOFA',
	linkedinProfile: undefined,
	telegramUsername: undefined,
	instagramUsername: undefined,
	facebookAuthorPage: undefined,
	facebookPage: undefined,
	tiktokUsername: undefined,
	twitterUsername: undefined,
	twitterUserId: undefined,
	medium: undefined,
	reddit: undefined,
	youtube: undefined,
	twitch: undefined,
	discord: undefined
};

interface websiteConfigType {
	author: string;
	title: string;
	description: string;
	url: string;
	contactEmail: string | undefined;
	githubPage: string | undefined;
	linkedinProfile: string | undefined;
	telegramUsername: string | undefined;
	instagramUsername: string | undefined;
	facebookAuthorPage: string | undefined;
	facebookPage: string | undefined;
	tiktokUsername: string | undefined;
	twitterUsername: string | undefined;
	twitterUserId: string | undefined;
	medium: string | undefined;
	reddit: string | undefined;
	youtube: string | undefined;
	twitch: string | undefined;
	discord: string | undefined;
}
