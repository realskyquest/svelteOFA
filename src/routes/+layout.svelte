<script lang="ts">
	import '../app.css';
	import '$lib/assets/css/ripple.css';
	import { appConfig } from '$lib/collections/config';

	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
	});
</script>

<svelte:head>
	<meta name="author" content={appConfig.author} />
	<meta name="generator" content="Sveltekit, Vite" />
</svelte:head>

<slot />
