<script lang="ts">
	import { appConfig } from '$lib/collections/config';
</script>

<div class="h-[calc(100vh-7rem)] min-h-[22rem]">
	<div class="pl-[8rem] pt-[8rem]">
		<h1 class="text-2xl font-extrabold lg:text-4xl">
			<span
				class="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent"
			>
				Svelte OFA
			</span>
		</h1>
		<h2 class="text-4xl font-bold text-primary lg:text-6xl">Svelte One for All!</h2>
		<p class="pt-[1.5rem] text-xl italic">{appConfig.description}</p>
		<div class="mt-[1.5rem] flex flex-row space-x-4">
			<a
				href="/what-is-svelte-ofa"
				class="btn rounded-full bg-gradient-to-tl from-secondary to-primary text-primary-content"
				>What is Svelte OFA</a
			>
			<a href="/docs" class="btn btn-neutral rounded-full">Documentation</a>
		</div>
	</div>
</div>
