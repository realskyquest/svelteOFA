<script lang="ts">
	import { appConfig } from '$lib/collections/config';
	const pageName = 'What is svelte OFA';
	const pageUrl = 'what-is-svelte-ofa';

	import Image from '$lib/assets/images/pwa-512x512.png?enhanced';
</script>

<svelte:head>
	<meta name="robots" content="all" />
	<link rel="canonical" href="{appConfig.url}/{pageUrl}" />
	<title>{pageName} | svelteOFA</title>

	<meta name="title" content="{pageName} | {appConfig.title}" />
	<meta
		name="description"
		content="Svelte OFA (One For All) is a simple and easy to configure sveltekit app, specially made to be used with cloudflare pages in ssg, but can be easily modifed to work with other platforms and rendering methods."
	/>

	<meta property="og:type" content="website" />
	<meta property="og:url" content="{appConfig.url}/{pageUrl}" />
	<meta property="og:title" content="{pageName} | {appConfig.title}" />
	<meta
		property="og:description"
		content="Svelte OFA (One For All) is a simple and easy to configure sveltekit app, specially made to be used with cloudflare pages in ssg, but can be easily modifed to work with other platforms and rendering methods."
	/>
	<meta property="og:image" content="{appConfig.url}/pwa-512x512.png" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="{appConfig.url}/{pageUrl}" />
	<meta property="twitter:title" content="{pageName} | {appConfig.title}" />
	<meta
		property="twitter:description"
		content="Svelte OFA (One For All) is a simple and easy to configure sveltekit app, specially made to be used with cloudflare pages in ssg, but can be easily modifed to work with other platforms and rendering methods."
	/>
	<meta property="twitter:image" content="{appConfig.url}/pwa-512x512.png" />
</svelte:head>

<div class="h-[calc(100vh-7rem)] min-h-[28rem]">
	<div class="flex flex-col items-center justify-center">
		<div class="m-8">
			<enhanced:img src={Image} alt="some alt text" />

			<h1 class="text-4xl font-extrabold">
				<span
					class="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent"
				>
					What is Svelte OFA
				</span>
			</h1>
			<p class="mt-4">
				Svelte OFA ( <i>One For All</i> ) is a simple and easy to configure sveltekit app,<br />
				specially made to be used with cloudflare pages in ssg, but can be easily modified to work with<br
				/>
				other platforms and rendering methods.
			</p>
		</div>
	</div>
</div>
