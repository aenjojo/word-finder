<script lang="ts">
	import Link from '#components/Link.svelte';
</script>

<footer>
	<section class="container mx-auto pt-6 pb-2 flex flex-col gap-2 items-center">
		<div class="font-bold text-lg">Word Finder by AenJojo</div>
		<div class="flex flex-row gap-4">
			<Link href="https://github.com/aenjojo" value="GitHub" />
			<Link href="https://www.linkedin.com/in/aenjojo" value="LinkedIn" />
		</div>
	</section>
	<section class="container mx-auto pt-2 pb-6 text-center">
		<p>Data Provided by <Link href="https://datamuse.com" value="datamuse" /></p>
		<p>Built with <Link href="https://kit.svelte.dev" value="SvelteKit" />, <Link href="https://tailwindcss.com" value="Tailwind CSS" />, and <Link href="https://vitejs.dev" value="Vite" /></p>
		<p>Deployed on <Link href="https://vercel.com" value="Vercel" /></p>
	</section>
</footer>