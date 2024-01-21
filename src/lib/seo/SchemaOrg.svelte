<script lang="ts">
	// generator: https://technicalseo.com/tools/schema-markup-generator/
	// good guide for seo: https://www.danielkcheung.com/learn/

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
