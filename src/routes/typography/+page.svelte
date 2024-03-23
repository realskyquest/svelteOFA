<script lang="ts">
	// Typescript
	import type { PageData } from './$types';

	// Modules
	import config from '$lib/data/config';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.page.title} | {config.title}</title>
</svelte:head>

<!-- svelte-ignore a11y-invalid-attribute -->
<article class="typography">
	<h1>The Joke Tax Chronicles</h1>
	<p>
		Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on
		his throne. One day, his advisors came to him with a problem: the kingdom was running out of
		money.
	</p>
	<h2>The King's Plan</h2>
	<p>
		The king thought long and hard, and finally came up with <a href="#">a brilliant plan</a> : he would
		tax the jokes in the kingdom.
	</p>
	<blockquote>
		The king thought long and hard, and finally came up with a brilliant plan : he would tax the
		jokes in the kingdom.
	</blockquote>
	<h3>The Joke Tax</h3>
	<p>The king's subjects were not amused. They grumbled and complained, but the king was firm:</p>
	<ul class="list-disc">
		<li>1st level of puns: 5 gold coins</li>
		<li>2nd level of jokes: 10 gold coins</li>
		<li>3rd level of one-liners : 20 gold coins</li>
	</ul>
	<ol class="list-decimal">
		<li>1st level of puns: 5 gold coins</li>
		<li>2nd level of jokes: 10 gold coins</li>
		<li>3rd level of one-liners : 20 gold coins</li>
	</ol>
	<code>Hello world!</code>
	<p class="lead">This is a lead</p>
	<p class="large">This is a large text</p>
	<p class="small">This is a small text</p>
	<p class="muted">This is a muted text</p>

	<div class="my-6 w-[50%] overflow-y-auto">
		<table>
			<thead>
				<tr>
					<th> King's Treasury </th>
					<th> People's happiness </th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td> Empty </td>
					<td> Overflowing </td>
				</tr>
				<tr>
					<td> Modest </td>
					<td> Satisfied </td>
				</tr>
				<tr>
					<td> Full </td>
					<td> Ecstatic </td>
				</tr>
			</tbody>
		</table>
	</div>
</article>
