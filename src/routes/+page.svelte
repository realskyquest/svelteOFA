<script lang="ts">
	// Typescript
	import type { PageData } from './$types';

	// Modules
	import config from '$lib/data/config';
	import { Button } from '$lib/components/daisyui';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.page.title} | {config.title}</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Button brand="btn-primary" size="btn-lg" wide="btn-wide" ripple>Hi there</Button>
<Button brand="btn-ghost"  size="btn-lg" wide="btn-wide" ripple href="/blog">Hi there</Button>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="dropdown">
    <div tabindex="0" role="button" class="btn btn-accent m-1">Click</div>
	<ul  tabindex="0" class="dropdown-content z-[1] menu bg-base-200 w-56 rounded-box">
		<li><a>Item 1</a></li>
		<li>
			<details>
				<summary>Parent</summary>
				<ul>
					<li><a>Submenu 1</a></li>
					<li><a>Submenu 2</a></li>
					<li>
						<details>
							<summary>Parent</summary>
							<ul>
								<li><a>Submenu 1</a></li>
								<li><a>Submenu 2</a></li>
							</ul>
						</details>
					</li>
				</ul>
			</details>
		</li>
		<li><a>Item 3</a></li>
	</ul>
</div>
