<script lang="ts">
	export let site: string;
	export let description: string | undefined = undefined;
	export let country: string | undefined = undefined;

	export let appIdIphone: string;
	export let appIdIpad: string;
	export let appIdGoogleplay: string;

	export let appName: string | undefined = undefined;
	export let appUrlIphone: string | undefined = undefined;
	export let appUrlIpad: string | undefined = undefined;
	export let appUrlGoogleplay: string | undefined = undefined;
</script>

<svelte:head>
	<meta name="twitter:card" content="app" />
	<meta name="twitter:site" content={site} />
	{#if description}
		<meta name="twitter:description" content={description} />
	{/if}
	{#if country}
		<meta name="twitter:app:country" content={country} />
	{/if}

	<meta name="twitter:app:id:iphone" content={appIdIphone} />
	<meta name="twitter:app:id:ipad" content={appIdIpad} />
	<meta name="twitter:app:id:googleplay" content={appIdGoogleplay} />

	{#if appName}
		{#if appUrlIphone}
			<meta name="twitter:app:name:iphone" content={appName} />
			<meta name="twitter:app:url:iphone" content={appUrlIphone} />
		{/if}
		{#if appUrlIpad}
			<meta name="twitter:app:name:ipad" content={appName} />
			<meta name="twitter:app:url:ipad" content={appUrlIpad} />
		{/if}
		{#if appUrlGoogleplay}
			<meta name="twitter:app:name:googleplay" content={appName} />
			<meta name="twitter:app:url:googleplay" content={appUrlGoogleplay} />
		{/if}
	{/if}
</svelte:head>
