<script lang="ts">
	export let name: string;
	export let label: string;
	export let value: string;
	export let pattern: string = '';
	export let required: boolean = false;
</script>

<div class="p-2 w-full">
	<label
		for={name}
		class="block after:content-[':']"
	>
		{label}
	</label>
	<input
		id="{name}"
		name="{name}"
		type="text"
		pattern={pattern || null}
		class="border border-blue-500 px-2 py-1 rounded-lg block w-full"
		bind:value
		{required}
	/>
</div>