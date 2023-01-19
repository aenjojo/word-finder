<script lang="ts">
	export let name: string;
	export let label: string;
	export let value: string;
	export let pattern: string = '';
	export let required: boolean = false;
	export let placeholder: string = '';
</script>

<div class="w-full">
	<label
		for={name}
		class="block after:content-[':'] text-slate-900 dark:text-slate-50"
	>
		{label}
	</label>
	<input
		id="{name}"
		name="{name}"
		type="text"
		pattern={pattern || null}
		class="border border-blue-500 px-2 py-1 rounded-lg block w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:outline-blue-500 autofill:transition-colors autofill:duration-[5000s] autofill:delay-[0s]"
		bind:value
		{required}
		{placeholder}
	/>
</div>