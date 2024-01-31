<script lang="ts">
	import { websiteConfig } from '$config/website';
	import type { PageData } from './$types';

	import Website from '$seo/opengraph/Website.svelte';
	import SummaryLargeImage from '$seo/twitter/SummaryLargeImage.svelte';
	import SchemaOrg from '$seo/SchemaOrg.svelte';

	import LocalImage from '$img/LocalFadeAnim.svelte';
	import RemoteImage from '$img/RemoteFadeAnim.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.pageTitle}</title>
	<link rel="canonical" href={websiteConfig.url + '/'} />
	<meta name="description" content={data.pageDescription} />
	<meta name="robots" content="all" />
</svelte:head>

<SummaryLargeImage
	title={data.pageTitle}
	description={data.pageDescription}
	image="/pwa-512x512.png"
	imageAlt="page banner"
/>
<Website
	url="/"
	title={data.pageTitle}
	description={data.pageDescription}
	image="/pwa-512x512.png"
	imageWidth="512"
	imageHeight="512"
	imageAlt="page banner"
/>
<SchemaOrg schemaOrgObject={data.pageSchema} />

<section class="mt-10">
	<article class="prose">
		<h1>{websiteConfig.title}</h1>
		<p>Welcome to homepage</p>
		<p>PWA support added!</p>
	</article>
</section>

<figure class="mb-2">
	<LocalImage
		alt="Coffee"
		src="coffee.jpg"
		width={200}
		height={200}
		layout="constrained"
		css="rounded-full"
	/>
	<figcaption class="text-sm text-base-content text-opacity-50">A cup of coffee</figcaption>
</figure>

<figure class="mb-2">
	<LocalImage alt="Coffee" src="coffee.jpg" width={200} height={250} layout="fullWidth" />
	<figcaption class="text-sm text-base-content text-opacity-50">A cup of coffee</figcaption>
</figure>

<figure class="mb-2">
	<LocalImage alt="Coffee" src="coffee.jpg" width={400} height={200} layout="fixed" />
	<figcaption class="text-sm text-base-content text-opacity-50">A cup of coffee</figcaption>
</figure>

<RemoteImage
	alt="wine glass"
	src="https://res.cloudinary.com/demo/image/upload/docs/wines.jpg"
	width={200}
	height={500}
	layout="constrained"
/>

<figure>
	<RemoteImage
		alt="wine glass"
		src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png"
		width={500}
		height={500}
		layout="fullWidth"
	/>
	<figcaption class="text-[0.875em] text-primary mt-2 mb-4">Taking photo</figcaption>
</figure>
