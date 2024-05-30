<script lang="ts">
	import { appConfig } from '$lib/collections/config';
	const pageName = 'Docs';
	const pageUrl = 'docs';
</script>

<svelte:head>
	<meta name="robots" content="all" />
	<link rel="canonical" href="{appConfig.url}/{pageUrl}" />
	<title>{pageName} | svelteOFA</title>

	<meta name="title" content="{pageName} | {appConfig.title}" />
	<meta name="description" content="Coming Soon!" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="{appConfig.url}/{pageUrl}" />
	<meta property="og:title" content="{pageName} | {appConfig.title}" />
	<meta property="og:description" content="Coming Soon!" />
	<meta property="og:image" content="{appConfig.url}/pwa-512x512.png" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="{appConfig.url}/{pageUrl}" />
	<meta property="twitter:title" content="{pageName} | {appConfig.title}" />
	<meta property="twitter:description" content="Coming Soon!" />
	<meta property="twitter:image" content="{appConfig.url}/pwa-512x512.png" />
</svelte:head>

<div class="flex h-[calc(100vh-7rem)] min-h-[10rem] flex-col items-center justify-center">
	<h1 class="text-4xl">Coming Soon!</h1>
</div>
