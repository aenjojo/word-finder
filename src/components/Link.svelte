<script lang="ts">
	export let href: string;
	export let value: string = '';
</script>

<a
	href="{href}"
	class="font-medium hover:underline underline-offset-2 decoration-2 text-blue-500 hover:text-green-500"
>
	{#if value}
		{value}
	{:else}
		<slot name="value" />
	{/if}
</a>