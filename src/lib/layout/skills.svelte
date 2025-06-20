<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { skillCategories } from '$lib/constants/skills';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		type="text/css"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
	/>
</svelte:head>

<hr class="mt-5" id="skills" />
<section class="mt-6 flex flex-col items-center justify-center gap-8">
	<h3 class="text-3xl font-bold">Skills and technologies</h3>
	<div class="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
		{#each skillCategories as category}
			<Card>
				<CardHeader class="flex flex-row items-center gap-4">
					<svelte:component this={category.icon} class="h-6 w-6" />
					<CardTitle class="text-lg font-bold">{category.title}</CardTitle>
				</CardHeader>
				<CardContent class="grid grid-cols-1 gap-3 sm:grid-cols-2">
					{#each category.skills as skill}
						<div
							class="group flex items-center rounded-lg border p-3 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-gray-200 hover:shadow-md"
						>
							<div
								class="mr-3 flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-105"
							>
								<svelte:component this={skill.icon} class="h-6 w-6" />
							</div>
							<span class="text-sm font-medium">{skill.name}</span>
						</div>
					{/each}
				</CardContent>
			</Card>
		{/each}
	</div>
</section>
