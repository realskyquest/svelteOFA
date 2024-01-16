<script lang="ts">
	import { websiteConfig } from '$lib/config/website';
</script>

<aside>
	<p>
		Copyright © 2024 - {websiteConfig.author} - {websiteConfig.description}<br
		/>{websiteConfig.contactEmail}<br /><a
			target="_blank"
			href={websiteConfig.githubPage}
			class="link">Github</a
		>
	</p>
</aside>
