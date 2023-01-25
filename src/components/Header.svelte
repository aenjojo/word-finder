<script lang="ts">
	import { page } from '$app/stores';
	import Link from '#components/Link.svelte';
	import ThemeSwitch from '#components/ThemeSwitch.svelte';
	import Icon from 'svelte-icons-pack';
	// @ts-ignore
	import FiGithub from 'svelte-icons-pack/fi/FiGithub';
	// @ts-ignore
	import FiMenu from 'svelte-icons-pack/fi/FiMenu';
	// @ts-ignore
	import FiX from 'svelte-icons-pack/fi/FiX';
    import { browser } from '$app/environment';

	let isMobileMenuOpen = false;

	$: isMobileMenuOpen = $page.route.id ? false : true;
	$: if (browser) {
		document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
	}

	const handleMobileMenu = () => {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

<header class="bg-slate-50 dark:bg-slate-900 border-b border-b-blue-500 sticky top-0">
	<!-- Desktop -->
	<section class="hidden lg:flex container mx-auto py-2 px-4 flex-row justify-between items-center">
		<div>
			<Link href="/">
				<img alt="" slot="value" src="/Wofi Color.svg" height="64" width="64" />
			</Link>
		</div>
		<nav>
			<ul class="flex flex-row gap-4 justify-center items-center list-none">
				<li>
					<Link href="/" value="Basic" />
				</li>
				<li>
					<Link href="/advanced" value="Advanced" />
				</li>
				<li>
					<Link href="/about" value="About" />
				</li>
			</ul>
		</nav>
		<div class="flex flex-row gap-4 justify-center items-center">
			<ThemeSwitch />
			<a
				href="https://github.com/aenjojo/word-finder"
				class="p-2 rounded-lg group"
			>
				<Icon
					src={FiGithub}
					title="Github repository"
					size="24"
					className="stroke-blue-500 group-hover:stroke-green-500"
				/>
			</a>
		</div>
	</section>

	<!-- Mobile -->
	<section class="block lg:hidden relative">
		<div class="container mx-auto py-2 px-4 flex flex-row items-center justify-between">
			<Link href="/">
				<img alt="" slot="value" src="/Wofi Color.svg" height="64" width="64" />
			</Link>
			<button class="p-2 rounded-lg group" on:click={handleMobileMenu}>
				{#if isMobileMenuOpen}
					<Icon
						src={FiX}
						title="Close menu"
						size="24"
						className="stroke-blue-500 group-hover:stroke-green-500"
					/>
				{:else}
					<Icon
						src={FiMenu}
						title="Open menu"
						size="24"
						className="stroke-blue-500 group-hover:stroke-green-500"
					/>
				{/if}
			</button>
		</div>
		<div class="fixed {isMobileMenuOpen ? 'left-0' : '-left-full'} transition-all w-full h-full p-4 bg-slate-50 dark:bg-slate-900 border-t border-t-blue-500">
			<nav>
				<ul class="flex flex-col gap-4 list-none p-4 items-center">
					<li>
						<Link href="/" value="Basic" />
					</li>
					<li>
						<Link href="/advanced" value="Advanced" />
					</li>
					<li>
						<Link href="/about" value="About" />
					</li>
				</ul>
			</nav>
			<div class="flex flex-row gap-4 justify-center items-center w-full mt-10">
				<ThemeSwitch />
				<a
					href="https://github.com/aenjojo/word-finder"
					class="p-2 rounded-lg group"
				>
					<Icon
						src={FiGithub}
						title="Github repository"
						size="24"
						className="stroke-blue-500 group-hover:stroke-green-500"
					/>
				</a>
			</div>
		</div>
	</section>
</header>