<script lang="ts">
	import { ThemeSparkles } from '$lib/layout/';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<title>Jules THIBAULT - Portfolio</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<ModeWatcher defaultMode="system" />
<ThemeSparkles />
{@render children()}
