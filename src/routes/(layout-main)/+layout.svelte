<script lang="ts">
	import Theme from '$lib/components/Theme.svelte';
	import { appConfig } from '$lib/collections/config';
</script>

<div>
	<div class="navbar bg-primary text-primary-content">
		<div class="navbar-start">
			<a href="/" class="btn btn-ghost text-xl">{appConfig.title}</a>
		</div>
		<div class="navbar-end">
			<Theme />
		</div>
	</div>
	<slot />
	<footer class="footer footer-center bg-base-300 p-4 text-base-content">
		<aside>
			<p>Copyright © 2024 - {appConfig.author}</p>
		</aside>
	</footer>
</div>
