<script lang="ts">
	// Typescript
	import type { PageData } from './$types';

	// Modules
	import config from '$lib/data/config';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.page.title} | {config.title}</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev" class="link link-primary link-hover">kit.svelte.dev</a> to read the documentation</p>
