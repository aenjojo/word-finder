<script lang="ts">
	export let title: string;
	export let description: string;
	export let keywords: string[];
	export let pageUrl: string;
	
	const siteName: string = 'Wofi';
	const siteUrl: string = 'https://wofi.vercel.app';
	const image: string = '/Wofi Main.png';

	const url = `${siteUrl}${pageUrl}`;
</script>

<svelte:head>
	<title>{title} | {siteName}</title>

	<meta name="author" content="Josua Fernando" />
	<meta name="description" content="{description}" />
	<meta name="keywords" content="{keywords.join(",")}" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="{url}" />
	<meta property="og:title" content="{title}" />
	<meta property="og:image" content="{image}" />
	<meta property="og:description" content="{description}" />
	<meta property="og:site_name" content="{siteName} - Word Finder" />
	<meta property="twitter:card" content="summary_large_image" />

	<link rel="canonical" href={url} />
</svelte:head>