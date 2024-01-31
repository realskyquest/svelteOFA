<script lang="ts">
	import './fade.css';
	import { onMount } from 'svelte';

	export let alt: string;
	export let loading: 'eager' | 'lazy' = 'eager';

	export let src: string;
	export let width: number;
	export let height: number;

	export let layout: 'constrained' | 'fullWidth' | 'fixed' = 'constrained';
	export let css: string = '';

	const image = {
		src: src,
		blurhash: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=`
	};

	let imgElement: HTMLImageElement;
	let bgElement: HTMLImageElement;

	function loaded() {
		imgElement.classList.add('fade-in');
		setTimeout(() => (bgElement.style.opacity = '0'), 1000);
	}

	onMount(() => {
		if (imgElement.complete) {
			loaded();
		} else {
			imgElement.addEventListener('load', loaded);
		}
	});
</script>

{#if layout === 'constrained'}
	<div class="relative overflow-hidden">
		<img
			bind:this={bgElement}
			{alt}
			{loading}
			decoding="async"
			sizes="(min-width: {width}px) {width}px, 100vw"
			src={image.blurhash}
			style="object-fit: cover; max-width: {width}px; max-height: {height}px; width: 100%;"
			class="absolute inset-0 bg-primary-content {css}"
		/>
		<picture>
			<img
				bind:this={imgElement}
				{alt}
				{loading}
				decoding="async"
				sizes="(min-width: {width}px) {width}px, 100vw"
				src={image.src}
				style="object-fit: cover; max-width: {width}px; max-height: {height}px; width: 100%; opacity: 0;"
				class={css}
			/>
		</picture>
	</div>
{:else if layout === 'fullWidth'}
	<div class="relative overflow-hidden">
		<img
			bind:this={bgElement}
			{alt}
			{loading}
			decoding="async"
			sizes="100vw"
			src={image.blurhash}
			style="object-fit: cover; width: 100%; height: {height}px;"
			class="absolute inset-0 bg-primary-content {css}"
		/>
		<picture>
			<img
				bind:this={imgElement}
				{alt}
				{loading}
				decoding="async"
				sizes="100vw"
				src={image.src}
				style="object-fit: cover; width: 100%; height: {height}px; opacity: 0;"
				class={css}
			/>
		</picture>
	</div>
{:else if layout === 'fixed'}
	<div class="relative overflow-hidden">
		<img
			bind:this={bgElement}
			{alt}
			{loading}
			decoding="async"
			sizes="{width}px"
			src={image.blurhash}
			width="{width}px"
			height="{height}px"
			style="object-fit: cover; width: {width}px; height: {height}px;"
			class="absolute inset-0 bg-primary-content {css}"
		/>
		<picture>
			<img
				bind:this={imgElement}
				{alt}
				{loading}
				decoding="async"
				sizes="{width}px"
				src={image.src}
				width="{width}px"
				height="{height}px"
				style="object-fit: cover; width: {width}px; height: {height}px; opacity: 0;"
				class={css}
			/>
		</picture>
	</div>
{/if}
