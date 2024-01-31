<script lang="ts">
	export let alt: string;
	export let loading: 'eager' | 'lazy' = 'eager';

	export let src: string;
	export let width: number;
	export let height: number;

	export let layout: 'constrained' | 'fullWidth' | 'fixed' = 'constrained';
	export let css: string = '';

	const image = { src: src };
</script>

{#if layout === 'constrained'}
	<picture>
		<img
			{alt}
			{loading}
			decoding="async"
			sizes="(min-width: {width}px) {width}px, 100vw"
			src={image.src}
			style="object-fit: cover; max-width: {width}px; max-height: {height}px; width: 100%;"
			class={css}
		/>
	</picture>
{:else if layout === 'fullWidth'}
	<picture>
		<img
			{alt}
			{loading}
			decoding="async"
			sizes="100vw"
			src={image.src}
			style="object-fit: cover; width: 100%; height: {height}px;"
			class={css}
		/>
	</picture>
{:else if layout === 'fixed'}
	<picture>
		<img
			{alt}
			{loading}
			decoding="async"
			sizes="{width}px"
			src={image.src}
			width="{width}px"
			height="{height}px"
			style="object-fit: cover; width: {width}px; height: {height}px;"
			class={css}
		/>
	</picture>
{/if}
