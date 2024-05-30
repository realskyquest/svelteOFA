<script lang="ts">
	import '../app.css';
	import '$lib/assets/css/ripple.css';

	import { appConfig } from '$lib/collections/config';
	import { PWAConfig } from '$lib/collections/pwa';

	import { onMount } from 'svelte';
	import { browser, dev } from '$app/environment';

	async function detectSWUpdate() {
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', () => {
			const newSW = registration.installing;
			newSW?.addEventListener('statechange', () => {
				if (newSW.state == 'installed') {
					if (confirm('New update available! Reload to update?')) {
						newSW.postMessage({ type: 'SKIP_WAITING' });
						window.location.reload();
					}
				}
			});
		});
	}

	onMount(() => {
		if (!dev && browser == true) {
			detectSWUpdate();
		}
	});
</script>

<svelte:head>
	<meta name="author" content={appConfig.author} />
	<meta name="generator" content="Sveltekit, Vite" />

	<link rel="manifest" href="/manifest.webmanifest" type="application/manifest+json" />

	<link rel="shortcut icon" href="{appConfig.url}/favicon.ico" />
	<link rel="icon" href="/favicon.ico" sizes="48x48" />
	<link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" />
	<link rel="mask-icon" href="/pwa-512x512.png" color={PWAConfig.background_color} />
	<meta name="theme-color" content={PWAConfig.background_color} />
</svelte:head>

<slot />
