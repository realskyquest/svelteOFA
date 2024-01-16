<script lang="ts">
	import '../app.css';

	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import Header from '$lib/config/Header.svelte';
	import Footer from '$lib/config/Footer.svelte';

	async function detectSWUpdate() {
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', (event) => {
			const newSW = registration.installing;
			newSW?.addEventListener('statechange', (event) => {
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

<svelte:head>
	<link rel="manifest" href="/app.webmanifest" />
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
