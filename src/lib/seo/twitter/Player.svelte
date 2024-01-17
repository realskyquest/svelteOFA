<script lang="ts">
	export let site: string;
	export let title: string;
	export let description: string | undefined = undefined;
	export let player: string;
	export let playerWidth: string;
	export let playerHeight: string;
	export let image: string;
	export let imageAlt: string | undefined = undefined;
</script>

<svelte:head>
	<meta name="twitter:card" content="player" />
	<meta name="twitter:site" content={site} />
	<meta name="twitter:title" content={title} />

	{#if description}
		<meta name="twitter:description" content={description} />
	{/if}

	<meta name="twitter:player" content={player} />
	<meta name="twitter:player:width" content={playerWidth} />
	<meta name="twitter:player:height" content={playerHeight} />

	<meta name="twitter:image" content={image} />
	{#if imageAlt}
		<meta name="twitter:image:alt" content={imageAlt} />
	{/if}
</svelte:head>
