<script lang="ts">
	import { ThemeSparkles } from '$lib/layout/';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<ModeWatcher defaultMode="system" />
<ThemeSparkles />
{@render children()}
