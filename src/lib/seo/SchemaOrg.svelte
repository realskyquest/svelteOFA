<script lang="ts">
	// generator: https://technicalseo.com/tools/schema-markup-generator/
	// good guide for seo: https://www.danielkcheung.com/learn/

	export let schemaOrgObject: object;

	export function serializeSchema(thing) {
		return `<script type="application/ld+json">${JSON.stringify(thing)}${'<'}/script>`;
	}
</script>

<svelte:head>
	{@html serializeSchema(schemaOrgObject)}
</svelte:head>
