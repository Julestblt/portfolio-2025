<script lang="ts">
	import { onMount } from 'svelte';
	import type { ISourceOptions } from 'tsparticles-engine';

	export let id = 'tsparticles';
	export let background = 'transparent';
	export let minSize = 1;
	export let maxSize = 3;
	export let speed = 1;
	export let particleColor = '#ffffff';
	export let particleDensity = 120;
	export let className = '';

	let wrapper: HTMLDivElement;

	onMount(async () => {
		await loadParticles();
	});

	const loadParticles = async () => {
		if (typeof window !== 'undefined') {
			const { tsParticles } = await import('tsparticles-engine');
			const { loadSlim } = await import('tsparticles-slim');

			await loadSlim(tsParticles);

			const options: ISourceOptions = {
				background: { color: { value: background } },
				fullScreen: {
					enable: false
				},
				detectRetina: true,
				fpsLimit: 60,
				particles: {
					number: {
						value: particleDensity,
						density: {
							enable: true,
							width: 400,
							height: 400
						}
					},
					color: { value: particleColor },
					size: { value: { min: minSize, max: maxSize } },
					opacity: {
						value: { min: 0.1, max: 1 },
						animation: {
							enable: true,
							speed: speed,
							startValue: 'random',
							sync: false
						}
					},
					move: {
						enable: true,
						speed: { min: 0.1, max: 1 },
						direction: 'none',
						outModes: { default: 'out' }
					}
				}
			};
			await tsParticles.load({ id, options });
		}
	};

	$: if (particleColor) {
		loadParticles();
	}
</script>

<div
	bind:this={wrapper}
	class="pointer-events-none fixed inset-0 z-[-1] h-screen w-screen {className}"
>
	<canvas {id} class="h-full w-full"></canvas>
</div>
