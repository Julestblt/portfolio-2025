<script lang="ts">
	import { theme } from '$lib/stores/theme-stores';
	import SparklesCore from './sparkles-core.svelte';

	$: particleColor = $theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)';
</script>

<SparklesCore
	id="tsparticles"
	className="w-screen h-screen"
	background="transparent"
	particleDensity={80}
	minSize={0.8}
	maxSize={1.8}
	speed={0.5}
	{particleColor}
/>
