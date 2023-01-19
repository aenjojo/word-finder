<script lang="ts">
	export let title: string;
	export let level: '1' | '2' = '2';
</script>

{#if level === '1'}
	<h1 class="text-4xl font-extrabold text-center text-slate-900 dark:text-slate-50">
		{title}
	</h1>
{:else if level === '2'}
	<h2 class="text-2xl font-bold text-slate-900 dark:text-slate-50">
		{title}
	</h2>
{/if}