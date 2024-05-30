<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	if ($page.url.href.includes('/docs/') && browser === true) {
		goto('/docs/404');
	}

	import { appConfig } from '$lib/collections/config';
	const pageName = '404';
	const pageUrl = '/404';
</script>

<svelte:head>
	<meta name="robots" content="none" />
	<link rel="canonical" href="{appConfig.url}/{pageUrl}" />
	<title>{pageName} | svelteOFA</title>

	<meta name="title" content="{pageName} | {appConfig.title}" />
	<meta name="description" content="404" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="{appConfig.url}/{pageUrl}" />
	<meta property="og:title" content="{pageName} | {appConfig.title}" />
	<meta property="og:description" content="404" />
	<meta property="og:image" content="{appConfig.url}/pwa-512x512.png" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="{appConfig.url}/{pageUrl}" />
	<meta property="twitter:title" content="{pageName} | {appConfig.title}" />
	<meta property="twitter:description" content="404" />
	<meta property="twitter:image" content="{appConfig.url}/pwa-512x512.png" />
</svelte:head>

<div class="flex h-[100vh] min-h-[10rem] flex-col items-center justify-center">
	<a href="/" class="link link-primary">Home</a>
	<h1 class="text-4xl">{$page.status}</h1>
	<p>{$page.error?.message}</p>
</div>
