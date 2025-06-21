<script lang="ts">
	import * as Card from '$lib/components/ui/card/';
	import * as Carousel from '$lib/components/ui/carousel/';
	import { Button } from '$lib/components/ui/button/';
	import { Github, ExternalLink } from 'lucide-svelte';
	import { projects } from '$lib/constants/projects';
</script>

<hr class="mt-5" id="projects" />
<section class="mt-6 flex flex-col items-center justify-center gap-8">
	<h3 class="text-3xl font-bold">Projects</h3>

	<Carousel.Root opts={{ align: 'start', loop: true }} class="mx-auto w-full">
		<Carousel.Content class="-ml-2 md:-ml-4">
			{#each projects as project (project.title)}
				<Carousel.Item class="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3">
					<Card.Root
						class="flex h-full justify-between border-1 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
					>
						<Card.Header class="relative pb-4">
							<Card.Title class="text-xl font-bold transition-colors">
								{project.title}
							</Card.Title>
							<Card.Description class="mt-2 leading-relaxed ">
								{project.description}
							</Card.Description>
						</Card.Header>

						<Card.Content class="pt-0">
							<div class="flex flex-wrap items-center justify-center gap-4">
								{#each project.tech as tech}
									<svelte:component this={tech.icon} size={24} />
								{/each}
							</div>
						</Card.Content>

						<Card.Footer class="pt-0 pb-6">
							<div class="flex w-full gap-2">
								{#if project.github}
									<Button
										variant="outline"
										size="sm"
										class="flex-1 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
										href={project.github}
										target="_blank"
									>
										<Github class="h-4 w-4" />
										Code
									</Button>
								{/if}
								{#if project.demo}
									<Button
										size="sm"
										class="flex-1 border-0 text-white hover:opacity-90 dark:bg-gray-700 "
										href={project.demo}
										target="_blank"
									>
										<ExternalLink class="h-4 w-4" />
										Demo
									</Button>
								{/if}
							</div>
						</Card.Footer>
					</Card.Root>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous class="-left-12 hidden border-gray-200 hover:border-gray-300 md:flex" />
		<Carousel.Next class="-right-12 hidden border-gray-200 hover:border-gray-300 md:flex" />
	</Carousel.Root>
</section>
