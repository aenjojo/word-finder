<script lang="ts">
	let result: {
		word: string,
		score: number,
		tags: string[],
	}[];

	let wordMeaningLike = '';
	let wordStartsWith = '';
	let wordEndsWith = '';
	let wordLength = 0;
	let wordSpelledAs = '';

	const handleSubmit = (e: any) => {
		const actionUrl = e.target.action;
		const data = new URLSearchParams();

		if (wordLength) {
			wordSpelledAs = `${wordStartsWith}${'?'.repeat(wordLength - (wordStartsWith.length + wordEndsWith.length))}${wordEndsWith}`;
		}
		else {
			wordSpelledAs = `${wordStartsWith}*${wordEndsWith}`;
		}

		data.append('ml', wordMeaningLike);
		data.append('sp', wordSpelledAs);
		data.append('max', '10');

		let a = fetch(`${actionUrl}?${data}`)
			.then(res => res.json())
			.then(data => result = data)
			.catch(console.error);
	}
</script>

<h1 class="text-4xl font-extrabold">Find a word easier</h1>

<h3 class="text-xl font-semibold text-center">Find Word</h3>
<form action="https://api.datamuse.com/words" on:submit|preventDefault={handleSubmit} class="flex flex-col gap-4 items-center">
	<label for="meanlike">Word with similar meaning to:</label>
	<input name="meanlike" id="words" type="text" class="border border-blue-500" bind:value={wordMeaningLike} />
	<label for="startwith">Word starts with:</label>
	<input name="startwith" id="words" type="text" class="border border-blue-500" bind:value={wordStartsWith} />
	<label for="endwith">Word ends with:</label>
	<input name="endwith" id="words" type="text" class="border border-blue-500" bind:value={wordEndsWith} />
	<label for="length">Word length:</label>
	<input name="length" id="words" type="number" class="border border-blue-500" bind:value={wordLength} />
	<input type="submit" value="Find" class="bg-blue-500 text-slate-50 px-2 cursor-pointer" />
</form>

<h3 class="text-xl font-semibold">Result:</h3>
{#if result}
	<ol class="list-decimal ml-4">
		{#each result as data}
			<li>{data.word}</li>
		{/each}
	</ol>
{:else}
	<p>No result</p>
{/if}
