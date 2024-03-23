<script lang="ts">
    // Typescript
    import type { PageData } from './$types';

    // Modules
    import config from "$lib/data/config";

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.page.title} | {config.title}</title>
</svelte:head>

<a href="/daisyui/button">Buttons</a>
<a href="/daisyui/loading">Loading stuff</a>