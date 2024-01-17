<script lang="ts">
	import { websiteConfig } from '$lib/config/website';
	import { page } from '$app/stores';
	import Website from '$lib/seo/opengraph/Website.svelte';
	import SummaryLargeImage from '$lib/seo/twitter/SummaryLargeImage.svelte';

	const pageTitle = 'Home';
	const pageDescription = 'My homepage.';
	const pageKeywords = 'home, main page';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<link rel="canonical" href={$page.url.href} />
	<meta name="description" content={pageDescription} />
	<meta name="robots" content="all" />
	<meta name="keywords" content={pageKeywords} />
</svelte:head>

<SummaryLargeImage
	title={pageTitle}
	description={pageDescription}
	image="/pwa-512x512.png"
	imageAlt="page banner"
/>
<Website
	title={pageTitle}
	description={pageDescription}
	image="/pwa-512x512.png"
	imageWidth="512"
	imageHeight="512"
	imageAlt="page banner"
/>

<section class="mt-10 mb-20">
	<article class="prose">
		<h1>{websiteConfig.title}</h1>
		<p>Welcome to homepage</p>
		<p>PWA support added!</p>
	</article>
</section>
