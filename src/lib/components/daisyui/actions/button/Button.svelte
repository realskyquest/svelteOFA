<script lang="ts">
	import './button.css';

	export let brand:
		| ''
		| 'btn-neutral'
		| 'btn-primary'
		| 'btn-secondary'
		| 'btn-accent'
		| 'btn-ghost'
		| 'btn-link' = '';
	export let active: '' | 'btn-active' = '';
	export let state: '' | 'btn-info' | 'btn-success' | 'btn-warning' | 'btn-error' = '';
	export let outline: '' | 'btn-outline' = '';
	export let size: '' | 'btn-lg' | 'btn-sm' | 'btn-xs' = '';
	export let wide: '' | 'btn-wide' | 'btn-block' = '';
	export let glass: '' | 'glass' = '';
	export let shape: '' | 'btn-square' | 'btn-circle' = '';

	export let href: string = '';
	export let animation: '' | 'no-animation' = '';
	export let ripple: boolean = false;

	export let disabled: boolean = false;

	let button: HTMLButtonElement;
    let hrefButton: HTMLAnchorElement

	function createRipple(event: any) {
		const button = event.currentTarget;
		const circle = document.createElement('span');
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
		circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
		circle.classList.add('ripple');

		const ripple = button.getElementsByClassName('ripple')[0];

		if (ripple) {
			ripple.remove();
		}

		button.appendChild(circle);
	}

	$: if (button && ripple === true) {
		button.addEventListener('click', createRipple);
	}
</script>

{#if href !== ''}
	<a
		bind:this={hrefButton}
        role="button"
        href={href}
		style={ripple === true ? 'position: relative; overflow: hidden;' : ''}
		class="btn {brand} {active} {state} {outline} {size} {wide} {glass} {shape} {animation}"
		on:click
		on:change
		on:keydown
		on:keyup
		on:touchstart|passive
		on:touchend
		on:touchcancel
		on:mouseenter
		on:mouseleave
	>
		<slot />
    </a>
{:else}
	<button
		bind:this={button}
		style={ripple === true ? 'position: relative; overflow: hidden;' : ''}
		class="btn {brand} {active} {state} {outline} {size} {wide} {glass} {shape} {animation}"
		{disabled}
		on:click
		on:change
		on:keydown
		on:keyup
		on:touchstart|passive
		on:touchend
		on:touchcancel
		on:mouseenter
		on:mouseleave
	>
		<slot />
	</button>
{/if}
