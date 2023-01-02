<script lang="ts">
	let result: {
		word: string,
		score: number,
		tags: string[],
	}[];

	const handleSubmit = (e: any) => {
		const actionUrl = e.target.action;

		const formData = new FormData(e.target);
		const data = new URLSearchParams();

		for (const [name, value] of formData) {
			data.append(name, value as string);
		}

		data.append('max', '10');

		let a = fetch(`${actionUrl}?${data}`)
			.then(res => res.json())
			.then(data => result = data)
			.catch(console.error);

		console.log(a)
	}
</script>

<h1 class="text-4xl font-extrabold">Find a word easier</h1>

<h3 class="text-xl font-semibold text-center">Find Word</h3>
<form action="https://api.datamuse.com/words" on:submit|preventDefault={handleSubmit} class="flex flex-col gap-4 items-center">
	<label for="words">Word with similar meaning to:</label>
	<input name="ml" id="words" type="text" class="border border-blue-500" />
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
