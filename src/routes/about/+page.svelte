<script lang="ts">
    import Heading from '#components/Heading.svelte';
	import SEO from '#components/SEO.svelte';
</script>

<SEO
	title="About"
	description="About this simple word finding website"
	keywords="{['wofi', 'word finder', 'about word finding app', 'svelte kit app']}"
	pageUrl="/about"
/>

<Heading level="1" title="About This Project" />
<article class="mt-4 lg:w-[80ch] mx-auto text-slate-900 dark:text-slate-50 bg-slate-100 dark:bg-slate-800 p-4 rounded-lg shadow-lg">
	<p class="mb-4">Word Finder (Wofi) is a simple web application project created by Aen Jojo (myself) in order to learn Svelte (Kit). The goals of this project are to add an easy-to-use user interface and to simplify the word finding in datamuse API.</p>
	<p class="mb-4">This project itself makes use datamuse API, a free open-source API focused on word finding, to get all words the user is searched.</p>
</article>