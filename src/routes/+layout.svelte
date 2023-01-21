<script>
	import '../app.css';
	
    import Header from '#components/Header.svelte';
    import Footer from '#components/Footer.svelte';
</script>

<Header />
<main class="container mx-auto p-4 text-slate-900">
	<slot />
</main>
<Footer />