import { browser } from '$app/environment';
import { themeHandler } from '$lib/theme/theme';

export const prerender = true;

export async function load() {
	if (browser) {
		themeHandler.Init();
	}
}
