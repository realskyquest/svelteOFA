<script lang="ts">
	export let site: string | undefined = undefined;
	export let title: string;
	export let description: string | undefined = undefined;
	export let image: string | undefined = undefined;
	export let imageAlt: string | undefined = undefined;
</script>

<svelte:head>
	<meta name="twitter:card" content="summary" />
	{#if site}
		<meta name="twitter:site" content={site} />
	{/if}

	<meta name="twitter:title" content={title} />

	{#if description}
		<meta name="twitter:description" content={description} />
	{/if}
	{#if image}
		<meta name="twitter:image" content={image} />
	{/if}
	{#if imageAlt}
		<meta name="twitter:image:alt" content={imageAlt} />
	{/if}
</svelte:head>
