<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { experiences } from '$lib/constants/experiences';
</script>

<hr class="mt-5" id="experiences" />
<section class="mt-6 flex flex-col items-center justify-center gap-8">
	<h3 class="text-3xl font-bold">Experiences</h3>
	<section class="flex w-full flex-col gap-6">
		{#each experiences as experience (experience.company)}
			<Card.Root
				class="flex h-full w-full flex-col gap-4 border-1 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
			>
				<Card.Header class="gap-0">
					<Card.Title class="transition-color4 flex items-center gap-4">
						<img src={experience.logo} alt={`${experience.company} Logo`} class="h-14 w-auto" />
						<section class="flex flex-col items-start justify-center">
							<p class="text-xl font-bold">{experience.company}</p>
							<p class="text-muted-foreground block text-sm font-normal">{experience.type}</p>
							<p class="text-muted-foreground/60 block text-sm font-normal">
								{experience.location}
							</p>
						</section>
					</Card.Title>
				</Card.Header>

				<Card.Content class="pt-0">
					{#each experience.roles as role}
						<h4 class="text-foreground mt-4 text-lg font-semibold">{role.title}</h4>
						<p class="text-muted-foreground/60 mb-2 text-sm">{role.date}</p>
						<p class="text-muted-foreground mb-2 text-[0.75em]">{role.description}</p>
						{#if role !== experience.roles[experience.roles.length - 1]}
							<hr class="my-4" />
						{/if}
					{/each}
				</Card.Content>
			</Card.Root>
		{/each}
	</section>
</section>
