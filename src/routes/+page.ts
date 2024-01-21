import { websiteConfig } from '$config/website';
import type { PageLoad } from './$types';

const pageSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'svelteofa',
	alternateName: 'sveltekit-one-for-all',
	url: websiteConfig.url + '/',
	logo: websiteConfig.url + '/pwa-64x64.png',
	sameAs: 'https://github.com/realskyquest/svelteofa/'
};

export const load: PageLoad = () => {
	return {
		pageTitle: 'Home',
		pageDescription: 'My homepage',
		pageSchema: pageSchema
	};
};
