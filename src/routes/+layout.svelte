<script>
	import '../app.css';
</script>

<header class="bg-blue-500">
	<section class="container mx-auto py-4">
		<div class="text-2xl text-slate-50">Word Finder Logo</div>
	</section>
</header>
<main class="container mx-auto py-4">
	<slot />
</main>
<footer class="bg-slate-800 text-slate-50">
	<section class="container mx-auto py-4">
		<div>Word Finder by <a href="https://github.com/aenjojo" class="font-medium text-blue-500 hover:underline">AenJojo</a></div>
		<div>Powered by <a href="https://datamuse.com" class="font-medium text-blue-500 hover:underline">datamuse</a></div>
	</section>
</footer>