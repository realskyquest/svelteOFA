<script lang="ts">
	import '../app.css';

	import Header from '$lib/config/Header.svelte';
	import Footer from '$lib/config/Footer.svelte';
</script>

<main>
	<header>
		<Header />
	</header>

	<slot />

	<footer class="footer footer-center p-4 bg-base-300 text-base-content">
		<Footer />
	</footer>
</main>
