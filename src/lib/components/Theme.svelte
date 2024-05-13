<script lang="ts">
	import { RippleEffect } from '$lib/utils/ripple';

	function handleRipple(event: MouseEvent) {
		RippleEffect(event as MouseEvent, false);
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	title="Change Theme"
	class="dropdown dropdown-end hidden [@supports(color:oklch(0_0_0))]:block"
>
	<div tabindex="0" role="button" class="btn btn-ghost" title="List of themes">
		<svg
			width="20"
			height="20"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="h-5 w-5 stroke-current md:hidden"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
			></path></svg
		> <span class="hidden font-normal md:inline">Theme</span>
		<svg
			width="12px"
			height="12px"
			class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 2048 2048"
			><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg
		>
	</div>
	<div
		tabindex="0"
		class="dropdown-content top-px mt-16 h-[28.6rem] max-h-[calc(100vh-10rem)] w-56 overflow-y-auto rounded-box border border-white/5 bg-base-200 text-base-content shadow-2xl outline outline-1 outline-black/5"
	>
		<div class="grid grid-cols-1 gap-3 p-3">
			<button
				on:click={handleRipple}
				class="ripple dark-ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="light"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="light"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">light</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple [&amp;_svg]:visible text-start outline-offset-4 outline-base-content"
				data-set-theme="dark"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="dark"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">dark</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple dark-ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="cupcake"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="cupcake"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">cupcake</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple dark-ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="bumblebee"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="bumblebee"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">bumblebee</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple dark-ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="emerald"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="emerald"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">emerald</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple dark-ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="corporate"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="corporate"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">corporate</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="synthwave"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="synthwave"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">synthwave</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="retro"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="retro"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">retro</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="cyberpunk"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="cyberpunk"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">cyberpunk</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="valentine"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="valentine"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">valentine</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="halloween"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="halloween"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">halloween</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple dark-ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="garden"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="garden"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">garden</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="forest"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="forest"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">forest</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="aqua"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="aqua"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">aqua</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple dark-ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="lofi"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="lofi"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">lofi</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple dark-ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="pastel"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="pastel"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">pastel</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple dark-ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="fantasy"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="fantasy"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">fantasy</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple dark-ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="wireframe"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="wireframe"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">wireframe</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="black"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="black"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">black</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="luxury"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="luxury"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">luxury</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="dracula"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="dracula"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">dracula</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple dark-ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="cmyk"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="cmyk"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">cmyk</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple dark-ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="autumn"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="autumn"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">autumn</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="business"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="business"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">business</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple dark-ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="acid"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="acid"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">acid</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple dark-ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="lemonade"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="lemonade"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">lemonade</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="night"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="night"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">night</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="coffee"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="coffee"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">coffee</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple dark-ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="winter"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="winter"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">winter</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="dim"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="dim"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">dim</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple dark-ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="nord"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="nord"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">nord</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			><button
				on:click={handleRipple}
				class="ripple text-start outline-offset-4 outline-base-content"
				data-set-theme="sunset"
				data-act-class="[&amp;_svg]:visible"
				><span
					data-theme="sunset"
					class="block w-full cursor-pointer rounded-btn bg-base-100 font-sans text-base-content"
					><span class="grid grid-cols-5 grid-rows-3"
						><span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="invisible h-3 w-3 shrink-0"
								><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								></path></svg
							> <span class="flex-grow text-sm">sunset</span>
							<span class="flex h-full shrink-0 flex-wrap gap-1"
								><span class="w-2 rounded-badge bg-primary"></span>
								<span class="w-2 rounded-badge bg-secondary"></span>
								<span class="w-2 rounded-badge bg-accent"></span>
								<span class="w-2 rounded-badge bg-neutral"></span></span
							></span
						></span
					></span
				></button
			>
		</div>
	</div>
</div>

<style>
	.dark-ripple {
		--ripple-color: rgba(50, 50, 50, 0.6); /* Default: rgba(255, 255, 255, 0.6) */
		--ripple-duration: 600ms; /* Default: 600ms */
		--ripple-scale: 4; /* Default: 4 */
	}
</style>
