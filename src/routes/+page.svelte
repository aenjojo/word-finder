<script lang="ts">
	import Button from '#components/Button.svelte';
    import Heading from '#components/Heading.svelte';
    import Input from '#components/Input.svelte';
    import SEO from '#components/SEO.svelte';
	import { fetchData, type fetchResult } from '#libs/fetchData';

	let results: fetchResult;
	let textMeansLike: string = '';

	const handleSubmit = async (event: any) => {
		const url = event.target.action;

		results = await fetchData(url, [
			['ml', textMeansLike],
			['max', '10']
		]);
	}

	const handleReset = () => {
		textMeansLike = '';
	}
</script>

<SEO
	title="Simple Word Finder"
	description="A simple word finding website"
	keywords="{['wofi', 'word finder', 'simple word finding app', 'svelte kit app']}"
	pageUrl="/"
/>

<Heading
	level="1"
	title="Simple Word Finder"
/>
<section class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 mt-4 grid-flow-row">
	<section class="col-span-4 md:col-start-3 lg:col-start-5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50 p-4 rounded-lg shadow-lg">
		<Heading
			level="2"
			title="Search Form"
		/>
		<form
			action="https://api.datamuse.com/words"
			class="flex flex-col gap-4"
			on:submit|preventDefault={handleSubmit}
			on:reset|preventDefault={handleReset}
		>
			<div>
				<Input
					name="means-like"
					label="Meaning Related To"
					bind:value="{textMeansLike}"
					placeholder='cake'
					required
				/>
			</div>
			<div class="flex flex-row gap-4 p-4 justify-center items-center">
				<Button
					value="Search"
					type="submit"
					color="primary"
				/>
				<Button
					value="Clear"
					type="reset"
					color="danger"
				/>
			</div>
		</form>
	</section>
	<section class="col-span-4 md:col-span-8 lg:col-start-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50 p-4 rounded-lg shadow-lg">
		<Heading
			level="2"
			title="Result"
		/>
		{#if results && results.length > 0}
			<ol class="list-decimal ml-8 py-2">
				{#each results as result}
					<li>{result.word}</li>
				{/each}
			</ol>
		{:else}
			<p class="py-2">No result</p>
		{/if}
	</section>
</section>