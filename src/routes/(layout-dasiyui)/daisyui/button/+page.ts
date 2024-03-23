import type { PageLoad } from './$types';

export const prerender: boolean = true

export const load: PageLoad = () => {
	return {
		page: {
			title: 'Button',
		},
	};
};