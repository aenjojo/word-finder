<script lang="ts">
    import { browser } from '$app/environment';
	import Icon from 'svelte-icons-pack';
	// @ts-ignore
	import FiMoon from 'svelte-icons-pack/fi/FiMoon';
	// @ts-ignore
	import FiSun from 'svelte-icons-pack/fi/FiSun';

	let darkMode = false;

	if (browser) {
		if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			darkMode = true;
		}
		else {
			darkMode = false;
		}
	}

	const handleSwitchDarkMode = () => {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light')

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}
</script>

<button class="p-2 rounded-lg group" on:click={handleSwitchDarkMode}>
	<Icon
		src={darkMode ? FiSun : FiMoon}
		title="Switch to {darkMode ? 'Light Mode' : 'Dark Mode'}"
		size="24"
		className="stroke-blue-500 group-hover:stroke-green-500"
	/>
</button>