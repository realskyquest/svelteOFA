<script lang="ts">
	import { imagesJSON } from '$lib/images';

	export let alt: string;
	export let loading: 'eager' | 'lazy' = 'eager';

	export let src: string;
	export let width: number;
	export let height: number;

	export let layout: 'constrained' | 'fullWidth' | 'fixed' = 'constrained';
	export let css: string = '';

	const image = imagesJSON['/src/images/' + src];
</script>

{#if layout === 'constrained'}
	<picture>
		<source sizes="(min-width: {width}px) {width}px, 100vw" srcset={image.avif} type="image/avif" />
		<source sizes="(min-width: {width}px) {width}px, 100vw" srcset={image.webp} type="image/webp" />
		<img
			{alt}
			{loading}
			decoding="async"
			sizes="(min-width: {width}px) {width}px, 100vw"
			src={image.src}
			srcset={image.jpeg}
			style="object-fit: cover; max-width: {width}px; max-height: {height}px; width: 100%;"
			class={css}
		/>
	</picture>
{:else if layout === 'fullWidth'}
	<picture>
		<source sizes="100vw" srcset={image.avif} type="image/avif" />
		<source sizes="100vw" srcset={image.webp} type="image/webp" />
		<img
			{alt}
			{loading}
			decoding="async"
			sizes="100vw"
			src={image.src}
			srcset={image.jpeg}
			style="object-fit: cover; width: 100%; height: {height}px;"
			class={css}
		/>
	</picture>
{:else if layout === 'fixed'}
	<picture>
		<source sizes="{width}px" srcset={image.avif} type="image/avif" />
		<source sizes="{width}px" srcset={image.webp} type="image/webp" />
		<img
			{alt}
			{loading}
			decoding="async"
			sizes="{width}px"
			src={image.src}
			srcset={image.jpeg}
			width="{width}px"
			height="{height}px"
			style="object-fit: cover; width: {width}px; height: {height}px;"
			class={css}
		/>
	</picture>
{/if}
