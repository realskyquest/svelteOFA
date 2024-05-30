<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	if ($page.url.href.includes('/docs/') && browser === true) {
		goto('/docs/404');
	}
</script>

<div class="flex h-[100vh] flex-col items-center justify-center">
	<p>ROOT</p>
	<h1 class="text-4xl">{$page.status}</h1>
	<p>{$page.error?.message}</p>
</div>
