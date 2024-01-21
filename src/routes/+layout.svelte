<script lang="ts">
	import '../app.css';

	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

	import { websiteConfig, websitePWAConfig } from '$config/website';
	import Header from '$config/Header.svelte';
	import Footer from '$config/Footer.svelte';

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
		if (!dev) {
			detectSWUpdate();
		}
	});
</script>

<!-- PWA links -->
<svelte:head>
	<meta name="author" content={websiteConfig.author} />
	<meta name="generator" content="Sveltekit" />

	<link
		rel="manifest"
		href="{websiteConfig.url}/manifest.webmanifest"
		type="application/manifest+json"
	/>
	<link rel="icon" href="{websiteConfig.url}/favicon.ico" sizes="48x48" />
	<link rel="icon" href="{websiteConfig.url}/favicon.svg" sizes="any" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="{websiteConfig.url}/apple-touch-icon-180x180.png" />
	<link
		rel="mask-icon"
		href="{websiteConfig.url}/pwa-512x512.png"
		color={websitePWAConfig.background_color}
	/>
	<meta name="theme-color" content={websitePWAConfig.background_color} />
</svelte:head>

<main>
	<header>
		<Header />
	</header>

	<slot />

	<footer class="footer footer-center p-4 bg-base-300 text-base-content">
		<Footer />
	</footer>
</main>
