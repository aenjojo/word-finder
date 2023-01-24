<script lang="ts">
	import Button from '#components/Button.svelte';
    import Heading from '#components/Heading.svelte';
    import Input from '#components/Input.svelte';
	import SEO from '#components/SEO.svelte';
	import { fetchData, type fetchResult } from '#libs/fetchData';

	let results: fetchResult;
	let firstLetter: string = '';
	let lastLetter: string = '';
	let textLength: string = '';

	let textMeansLike: string = '';
	let textSpellsLike: string = '';

	const spellsLike = (firstLetter: string, lastLetter: string, length: string) => {
		const totalLength = Number(length);
		const firstLength = firstLetter.length;
		const lastLength = lastLetter.length;
		const firstLastLength = firstLength + lastLength;

		if (length && totalLength > (firstLastLength)) {
			return `${firstLetter}${'?'.repeat(totalLength - firstLastLength)}${lastLetter}`;
		}

		return `${firstLetter}*${lastLetter}`;
	}

	const handleSubmit = async (event: any) => {
		const url = event.target.action;

		textSpellsLike = spellsLike(firstLetter, lastLetter, textLength);

		results = await fetchData(url, [
			['ml', textMeansLike],
			['sp', textSpellsLike],
			['max', '10']
		]);
	}

	const handleReset = () => {
		textMeansLike = '';
		textSpellsLike = '';

		firstLetter = '';
		lastLetter = '';
		textLength = '';
	}
</script>

<SEO
	title="Advanced Word Finder"
	description="A simple word finding website with advanced search form"
	keywords="{['wofi', 'word finder', 'advanced word finding app', 'svelte kit app']}"
	pageUrl="/advanced"
/>

<Heading
	level="1"
	title="Advanced Word Finder"
/>
<section class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 mt-4">
	<section class="col-span-4 bg-slate-100 dark:bg-slate-800 p-4 rounded-lg shadow-lg">
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
			<div class="flex flex-col gap-2">
				<Input
					name="means-like"
					label="Meaning Related To"
					bind:value="{textMeansLike}"
					placeholder='hello'
					required
				/>
				<Input
					name="first-letter"
					label="First Letter"
					bind:value="{firstLetter}"
					placeholder='a'
				/>
				<Input
					name="last-letter"
					label="Last Letter"
					bind:value="{lastLetter}"
					placeholder='o'
				/>
				<Input
					name="length"
					label="Text Length"
					bind:value="{textLength}"
					placeholder='4'
					pattern="[0-9]*"
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
	<section class="col-span-4 lg:col-span-8 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50 p-4 rounded-lg shadow-lg">
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