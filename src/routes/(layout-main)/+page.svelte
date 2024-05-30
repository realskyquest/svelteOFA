<script lang="ts">
	import { appConfig } from '$lib/collections/config';
	const pageName = 'Home';
	const pageUrl = '';
</script>

<svelte:head>
	<meta name="robots" content="all" />
	<link rel="canonical" href="{appConfig.url}/{pageUrl}" />
	<title>{pageName} | svelteOFA</title>

	<meta name="title" content="{pageName} | {appConfig.title}" />
	<meta name="description" content={appConfig.description} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="{appConfig.url}/{pageUrl}" />
	<meta property="og:title" content="{pageName} | {appConfig.title}" />
	<meta property="og:description" content={appConfig.description} />
	<meta property="og:image" content="{appConfig.url}/pwa-512x512.png" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="{appConfig.url}/{pageUrl}" />
	<meta property="twitter:title" content="{pageName} | {appConfig.title}" />
	<meta property="twitter:description" content={appConfig.description} />
	<meta property="twitter:image" content="{appConfig.url}/pwa-512x512.png" />
</svelte:head>

<div class="h-[calc(100vh-7rem)] min-h-[28rem]">
	<div class="flex flex-col items-center justify-center">
		<div class="m-8">
			<h1 class="text-2xl font-extrabold lg:text-4xl">
				<span
					class="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent"
				>
					Svelte OFA
				</span>
			</h1>
			<h2 class="text-4xl font-bold text-primary lg:text-6xl">Svelte One for All!</h2>
			<p class="text-xl italic">{appConfig.description}</p>
		</div>
		<div class="mt-[1.5rem] flex flex-col gap-x-4 gap-y-2 sm:flex-row">
			<a
				href="/what-is-svelte-ofa"
				class="btn rounded-full bg-gradient-to-tl from-secondary to-primary text-primary-content"
				>What is Svelte OFA</a
			>
			<a href="/docs" class="btn btn-neutral rounded-full">Documentation</a>
		</div>
	</div>
</div>
