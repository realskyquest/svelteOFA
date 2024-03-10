<script lang="ts">
    // Typescript
    import type { PageData } from './$types';

    // Modules
    import config from "$lib/data/config";

    import { Button, Loading } from '$lib/components/daisyui'

    export let data: PageData;

    //type Test = `dui-${string}`
</script>

<svelte:head>
    <title>{data.page.title} | {config.title}</title>
</svelte:head>

<div class="container m-5">
    <Button prefix="dui-btn">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-primary">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-primary">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-secondary">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-accent">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-ghost">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-link">Click me</Button>
</div>
 <div class="container m-5">
    <Button prefix="dui-btn" active="dui-btn-active" outline="dui-btn-outline">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-neutral" outline="dui-btn-outline">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-primary" outline="dui-btn-outline">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-secondary" outline="dui-btn-outline">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-accent" outline="dui-btn-outline">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-ghost" outline="dui-btn-outline">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-link" outline="dui-btn-outline">Click me</Button>
</div>

<div class="container m-5">
    <Button prefix="dui-btn" appearance="dui-btn-info">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-success">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-warning">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-error">Click me</Button>
</div>

<div class="container m-5">
    <Button prefix="dui-btn" appearance="dui-btn-info" outline="dui-btn-outline">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-success" outline="dui-btn-outline">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-warning" outline="dui-btn-outline">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-error" outline="dui-btn-outline">Click me</Button>
</div>

<div class="container m-5">
    <Button prefix="dui-btn" appearance="dui-btn-primary" glass>Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-primary" outline="dui-btn-outline" glass>Click me</Button>
</div>

<div class="container m-5">
    <Button prefix="dui-btn" appearance="dui-btn-primary" size="dui-btn-lg">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-primary">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-primary" glass size="dui-btn-sm">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-primary" glass size="dui-btn-xs">Click me</Button>
</div>

<div class="container m-5">
    <Button prefix="dui-btn" appearance="dui-btn-primary" outline="dui-btn-outline" size="dui-btn-lg">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-primary" outline="dui-btn-outline">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-primary" glass outline="dui-btn-outline" size="dui-btn-sm">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-primary" glass outline="dui-btn-outline" size="dui-btn-xs">Click me</Button>
</div>

<div class="container mt-4 mb-4">
    <Button prefix="dui-btn" appearance="dui-btn-primary" width="dui-btn-wide">Click me</Button>
</div>
<div class="container mt-4 mb-4">
    <Button prefix="dui-btn" appearance="dui-btn-primary" width="dui-btn-block">Click me</Button>
</div>

<div class="container mt-4 mb-4">
    <Button prefix="dui-btn" appearance="dui-btn-primary" shape="dui-btn-square">Click me</Button>
    <Button prefix="dui-btn" appearance="dui-btn-primary" shape="dui-btn-circle">Click me</Button>
</div>

<div class="container mt-4 mb-4">
    <Button prefix="dui-btn" appearance="dui-btn-primary" glass>
        <Loading prefix="dui-loading"/>
    </Button>
    <Button prefix="dui-btn" appearance="dui-btn-primary" glass><Loading prefix="dui-loading"/>Click me</Button>
</div>

<Button href="/docs" prefix="dui-btn" appearance="dui-btn-success">Go to docs</Button>