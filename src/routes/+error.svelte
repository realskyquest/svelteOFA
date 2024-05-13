<script>
	import Theme from '$lib/components/Theme.svelte';
	import { appConfig } from '$lib/collections/config';
	import { page } from '$app/stores';
</script>

{#if $page.url.pathname.includes('/docs') == true}
	<div class="flex h-[100vh] flex-col items-center justify-center">
		<h1 class="text-4xl">{$page.status}</h1>
		<p>{$page.error?.message}</p>
	</div>
{:else}
	<div>
		<div class="navbar bg-primary text-primary-content">
			<div class="navbar-start">
				<a href="/" class="btn btn-ghost text-xl">{appConfig.title}</a>
			</div>
			<div class="navbar-end">
				<Theme />
			</div>
		</div>
		<div class="flex h-[calc(100vh-7rem)] min-h-[10rem] flex-col items-center justify-center">
			<h1 class="text-4xl">{$page.status} LAYOUT</h1>
			<p>{$page.error?.message}</p>
		</div>
		<footer class="footer footer-center bg-base-300 p-4 text-base-content">
			<aside>
				<p>Copyright © 2024 - {appConfig.author}</p>
			</aside>
		</footer>
	</div>
{/if}
