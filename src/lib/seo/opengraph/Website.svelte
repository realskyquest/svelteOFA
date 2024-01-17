<script lang="ts">
	import { websiteConfig } from '$lib/config/website';
	import { page } from '$app/stores';

	export let lang: string = 'en_US';
	export let title: string;
	export let description: string;

	export let image: string;
	export let imageWidth: string;
	export let imageHeight: string;
	export let imageAlt: string;
</script>

<svelte:head>
	<meta property="og:site_name" content={websiteConfig.title} />
	<meta property="og:locale" content={lang} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	<meta property="og:image" content={image} />
	<meta property="og:image:width" content={imageWidth} />
	<meta property="og:image:height" content={imageHeight} />
	<meta property="og:image:alt" content={imageAlt} />
</svelte:head>
