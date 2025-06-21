<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { education } from '$lib/constants/education';
	import { ExternalLink } from 'lucide-svelte';
</script>

<hr class="mt-5" id="education" />
<section class="mt-6 flex flex-col items-center justify-center gap-8">
	<h3 class="text-3xl font-bold">Education</h3>
	<section class="flex w-full flex-col gap-6">
		{#each education as e (e.institution)}
			<Card.Root
				class="flex h-full w-full flex-col gap-4 border-1 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
			>
				<Card.Header class="flex items-center justify-between gap-4">
					<Card.Title class="flex items-center gap-4">
						<img src={e.logo} alt={`${e.institution} Logo`} class="h-14 w-auto" />
						<section class="flex flex-col items-start justify-center">
							<p class="text-xl font-bold">{e.type}</p>
							<p class="text-muted-foreground block text-sm font-normal">{e.institution}</p>
							<p class="text-muted-foreground/60 mb-2 text-sm font-normal">{e.duration}</p>
						</section>
					</Card.Title>
					{#if e.url}
						<a
							href={e.url}
							target="_blank"
							rel="noopener noreferrer"
							class="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="Visit institution website"
						>
							<ExternalLink class="h-5 w-5" />
						</a>
					{/if}
				</Card.Header>
			</Card.Root>
		{/each}
	</section>
</section>
