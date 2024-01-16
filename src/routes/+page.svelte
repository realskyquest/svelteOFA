<script lang="ts">
	import { websiteConfig } from '$lib/config/website';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="mt-10 mb-20">
	<article class="prose">
		<h1>{websiteConfig.title}</h1>
		<p>Welcome to homepage</p>
		<p>PWA support added!</p>
	</article>
</section>
