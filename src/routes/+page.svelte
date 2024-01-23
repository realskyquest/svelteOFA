<script lang="ts">
	import { websiteConfig } from '$config/website';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	import Website from '$seo/opengraph/Website.svelte';
	import SummaryLargeImage from '$seo/twitter/SummaryLargeImage.svelte';
	import SchemaOrg from '$seo/SchemaOrg.svelte';

	import LocalImage from '$img/Local.svelte';
	import RemoteImage from '$img/Remote.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.pageTitle}</title>
	<link rel="canonical" href={$page.url.href} />
	<meta name="description" content={data.pageDescription} />
	<meta name="robots" content="all" />
</svelte:head>

<SummaryLargeImage
	title={data.pageTitle}
	description={data.pageDescription}
	image="{websiteConfig.url}/pwa-512x512.png"
	imageAlt="page banner"
/>
<Website
	title={data.pageTitle}
	description={data.pageDescription}
	image="/pwa-512x512.png"
	imageWidth="512"
	imageHeight="512"
	imageAlt="page banner"
/>
<SchemaOrg schemaOrgObject={data.pageSchema} />

<section class="mt-10 mb-20">
	<article class="prose">
		<h1>{websiteConfig.title}</h1>
		<p>Welcome to homepage</p>
		<p>PWA support added!</p>
	</article>
</section>

<LocalImage alt="stuff" src="coffee.jpg" width={600} height={450} layout="constrained" />
<LocalImage alt="logo" src="pwa-512x512.png" width={512} height={512} layout="constrained" />

<RemoteImage
	alt="wine glass"
	src="https://res.cloudinary.com/demo/image/upload/docs/wines.jpg"
	width={500}
	height={500}
	layout="constrained"
/>

<figure>
	<RemoteImage
		alt="wine glass"
		src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png"
		width={500}
		height={500}
		layout="constrained"
	/>
	<figcaption class="text-[0.875em] text-primary mt-2 mb-4">Taking photo</figcaption>
</figure>
