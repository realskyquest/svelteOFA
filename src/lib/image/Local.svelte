<script lang="ts">
	import './fade.css';

	import { onMount } from 'svelte';
	import { Image } from '@unpic/svelte';
	import { getImageBlur } from './image';

	export let alt: String;
	export let src: String;
	export let width: Number;
	export let height: Number;
	export let layout: 'constrained' | 'fullWidth' = 'constrained';
	export let css: string = '';

	let mainElement: HTMLDivElement;
	let backgroundElement: HTMLDivElement;
	let blurWidth = `${width}px`;
	let blurHeight = `${height}px`;

	onMount(() => {
		const pictureElement: HTMLPictureElement | null = mainElement.querySelector('picture');

		if (pictureElement) {
			const imageElement: HTMLImageElement | null = pictureElement.querySelector('img');

			if (imageElement) {
				const resizeObserver = new ResizeObserver((entries) => {
					for (let entry of entries) {
						if (entry.target === imageElement) {
							blurWidth = `${entry.contentRect.width}px`;
							blurHeight = `${entry.contentRect.height}px`;
						}
					}
				});

				function loaded() {
					if (pictureElement && imageElement) {
						backgroundElement.classList.add('fade-out');
						pictureElement.classList.add('fade-in');
						setTimeout(() => {
							resizeObserver.unobserve(imageElement);
						}, 1000);
					}
				}

				resizeObserver.observe(imageElement);
				backgroundElement.style.opacity = '1';
				if (imageElement.complete) {
					loaded();
				} else {
					imageElement.addEventListener('load', loaded);
				}
			}
		}
	});
</script>

<div bind:this={mainElement} class="wrap">
	<picture style="opacity: 0;">
		<Image {alt} src={'/images/' + src} {width} {height} {layout} class={css} />
	</picture>
	<div
		bind:this={backgroundElement}
		class="blurImg"
		style="background-image: url({getImageBlur('/src/images/' + src)});
		height: {blurHeight};
		width: {layout === 'fullWidth' ? '100%' : blurWidth};
		background-position: center;
		opacity: 0;
		"
	/>
</div>

<style>
	.wrap {
		position: relative;
		overflow: hidden;
	}
	.blurImg {
		position: absolute;
		inset: 0;
		pointer-events: none;
		object-fit: cover;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
