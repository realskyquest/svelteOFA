<script lang="ts">
    // Typescript
    import type { PageData } from './$types';

    // Modules
    import config from "$lib/data/config";

    import { Loading } from '$lib/components/daisyui'

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.page.title} | {config.title}</title>
</svelte:head>

<div class="container mt-4 mb-4">
    <Loading prefix="dui-loading" animation="dui-loading-spinner" size="dui-loading-xs" />
    <Loading prefix="dui-loading" animation="dui-loading-spinner" />
    <Loading prefix="dui-loading" animation="dui-loading-spinner" size="dui-loading-md" />
    <Loading prefix="dui-loading" animation="dui-loading-spinner" size="dui-loading-lg" />
</div>

<div class="container mt-4 mb-4">
    <Loading prefix="dui-loading" animation="dui-loading-dots" size="dui-loading-xs" />
    <Loading prefix="dui-loading" animation="dui-loading-dots" />
    <Loading prefix="dui-loading" animation="dui-loading-dots" size="dui-loading-md" />
    <Loading prefix="dui-loading" animation="dui-loading-dots" size="dui-loading-lg" />
</div>

<div class="container mt-4 mb-4">
    <Loading prefix="dui-loading" animation="dui-loading-ring" size="dui-loading-xs" />
    <Loading prefix="dui-loading" animation="dui-loading-ring" />
    <Loading prefix="dui-loading" animation="dui-loading-ring" size="dui-loading-md" />
    <Loading prefix="dui-loading" animation="dui-loading-ring" size="dui-loading-lg" />
</div>

<div class="container mt-4 mb-4">
    <Loading prefix="dui-loading" animation="dui-loading-ball" size="dui-loading-xs" />
    <Loading prefix="dui-loading" animation="dui-loading-ball" size="dui-loading-sm" />
    <Loading prefix="dui-loading" animation="dui-loading-ball" />
    <Loading prefix="dui-loading" animation="dui-loading-ball" size="dui-loading-lg" />
</div>

<div class="container mt-4 mb-4">
    <Loading prefix="dui-" animation="bars" size="xs" />
    <Loading prefix="dui-" animation="bars" size="sm" />
    <Loading prefix="dui-" animation="bars" size="md" />
    <Loading prefix="dui-" animation="bars" size="lg" />
</div>

<div class="container mt-4 mb-4">
    <Loading prefix="dui-" animation="infinity" size="xs" />
    <Loading prefix="dui-" animation="infinity" size="sm" />
    <Loading prefix="dui-" animation="infinity" size="md" />
    <Loading prefix="dui-" animation="infinity" size="lg" />
</div>

<div class="container mt-4 mb-4">
    <Loading prefix="dui-" animation="spinner"/>
    <Loading prefix="dui-" animation="spinner" color="primary" />
    <Loading prefix="dui-" animation="spinner" color="secondary" />
    <Loading prefix="dui-" animation="spinner" color="accent" />
    <Loading prefix="dui-" animation="spinner" color="neutral" />
    <Loading prefix="dui-" animation="spinner" color="info" />
    <Loading prefix="dui-" animation="spinner" color="success" />
    <Loading prefix="dui-" animation="spinner" color="warning" />
    <Loading prefix="dui-" animation="spinner" color="error"/>
</div>