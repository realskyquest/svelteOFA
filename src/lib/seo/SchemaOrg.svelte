<script lang="ts">
	export let schemaOrgObject: object;
	const jsonLdString: string = JSON.stringify(schemaOrgObject);
	const jsonLdScript: string = `
 <script type="application/ld+json">
 ${jsonLdString}
 ${'<'}/script>
 `;
</script>

<svelte:head>
	{@html jsonLdScript}
</svelte:head>
