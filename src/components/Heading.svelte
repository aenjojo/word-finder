<script lang="ts">
	export let title: string;
	export let level: '1' | '2' = '2';
</script>

{#if level === '1'}
	<h1 class="text-4xl font-extrabold text-center">
		{title}
	</h1>
{:else if level === '2'}
	<h2 class="text-2xl font-bold">
		{title}
	</h2>
{/if}