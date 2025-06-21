<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { toggleMode } from 'mode-watcher';
	import { Moon, Sun } from 'lucide-svelte';

	const navLinks = [
		{ name: 'about', href: '#about' },
		{ name: 'skills', href: '#skills' },
		{ name: 'projects', href: '#projects' },
		{ name: 'experiences', href: '#experiences' },
		{ name: 'education', href: '#education' },
		{ name: 'certifications', href: '#certifications' }
	];
</script>

<header
	class="bg-background/30 dark:bg-background/50 border-border/40 sticky top-0 z-50 border-b backdrop-blur-xl"
>
	<nav class="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
		<div class="flex items-center">
			<div class="hidden items-center space-x-6 md:flex">
				{#each navLinks as link}
					<Button variant="ghost" class="capitalize" href={link.href}>{link.name}</Button>
				{/each}
			</div>
		</div>
		<button
			class="text-muted-foreground hover:text-foreground hover:bg-background/50 dark:hover:text-foreground dark:hover:bg-background/70 rounded-md p-2 transition-colors"
		>
			<Button onclick={toggleMode} variant="ghost" size="icon" class="cursor-pointer">
				<Sun
					class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</button>
	</nav>
</header>
