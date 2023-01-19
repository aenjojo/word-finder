<script lang="ts">
	export let value: string = 'Button';
	export let type: 'button' | 'reset' | 'submit' = 'button';
	export let color: 'primary' | 'danger' = 'primary';

	const colorData = {
		primary: 'bg-blue-500 text-slate-50 hover:bg-blue-700',
		danger: 'bg-red-500 text-slate-50 hover:bg-red-700',
	};
</script>

<button
	type={type}
	class={`py-2 px-4 rounded-lg font-bold tracking-wider uppercase cursor-pointer active:scale-95 transition-all ${colorData[color]}`}
>
	{value}
</button>