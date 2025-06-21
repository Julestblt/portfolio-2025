<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { certifications } from '$lib/constants/certifications';
	import { ExternalLink } from 'lucide-svelte';
</script>

<hr class="mt-5" id="certifications" />
<section class="mt-6 flex flex-col items-center justify-center gap-8">
	<h3 class="text-3xl font-bold">Certifications</h3>
	<section class="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
		{#each certifications as cert (cert.title)}
			<Card.Root
				class="flex h-full w-full flex-col gap-4 border-1 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
			>
				<Card.Header class="flex items-center justify-between gap-4">
					<Card.Title class="flex items-center gap-4">
						<img src={cert.issuer_logo} alt={`${cert.issuer} Logo`} class="h-14 w-auto" />
						<section class="flex flex-col items-start justify-center">
							<p class="text-lg font-bold">{cert.title}</p>
							<p class="text-muted-foreground block text-sm font-normal">{cert.issuer}</p>
							<p class="text-muted-foreground/60 mb-2 text-sm font-normal">{cert.date}</p>
						</section>
					</Card.Title>
					{#if cert.link}
						<a
							href={cert.link}
							target="_blank"
							rel="noopener noreferrer"
							class="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="View certificate"
						>
							<ExternalLink class="h-5 w-5" />
						</a>
					{/if}
				</Card.Header>
			</Card.Root>
		{/each}
	</section>
</section>
