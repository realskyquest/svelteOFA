<script lang="ts">
	import './fade.css';

	import { onMount } from 'svelte';
	import { Image } from '@unpic/svelte';

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
		<Image {alt} {src} {width} {height} {layout} class={css} />
	</picture>
	<div
		class="blurImg"
		bind:this={backgroundElement}
		style="background-image: url('{'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="%23000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>'}');
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
