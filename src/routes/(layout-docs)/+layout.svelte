<script lang="ts">
	import Theme from '$lib/components/Theme.svelte';
	import { appConfig } from '$lib/collections/config';

	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
	});
</script>

<div class="drawer lg:drawer-open">
	<input id="drawer-main" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Page content here -->
		<div class="glass navbar bg-primary text-primary-content">
			<div class="navbar-start">
				<a href="/" class="btn btn-ghost text-xl">{appConfig.title}</a>
			</div>
			<div class="navbar-end flex flex-row">
				<label for="drawer-main" class="btn btn-primary drawer-button lg:hidden">Menu</label>
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
	<div class="drawer-side">
		<label for="drawer-main" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
			<!-- Sidebar content here -->
			<li><a href="/docs" class="active">Docs</a></li>
			<li><a>Coming Soon!</a></li>
		</ul>
	</div>
</div>
