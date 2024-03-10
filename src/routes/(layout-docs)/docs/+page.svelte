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

<a href="/docs/button">Buttons</a>
<a href="/docs/loading">Loading stuff</a>