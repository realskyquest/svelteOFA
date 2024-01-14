<script lang="ts">
	import { websiteConfig } from '$lib/config/website';
	import { themeHandler } from '$lib/theme/theme';

	const themes = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter',
		'dim',
		'nord',
		'sunset'
	];

	let myTheme: string = themeHandler.GetTheme();

	function handleTheme(theme: string) {
		themeHandler.ChangeTheme(theme);
	}
</script>

<nav class="navbar bg-neutral text-neutral-content">
	<div class="navbar-start">
		<a href="/">
			<button class="btn btn-ghost text-xl">{websiteConfig.title}</button>
		</a>
	</div>
	<div class="navbar-end">
		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="btn m-1">
				Theme
				<svg
					width="12px"
					height="12px"
					class="h-2 w-2 fill-current opacity-60 inline-block"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 2048 2048"
					><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg
				>
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="dropdown-content z-[1] p-2 shadow-2xl bg-base-100 text-primary rounded-box h-[28.6rem] max-h-[calc(100vh-10rem)] w-52 overflow-y-scroll"
			>
				{#each themes as theme}
					<li>
						<input
							type="radio"
							name="theme-dropdown"
							class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
							aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
							value={theme}
							bind:group={myTheme}
							on:click={() => handleTheme(theme)}
						/>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
