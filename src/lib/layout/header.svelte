<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { toggleMode } from 'mode-watcher';
	import { Moon, Sun, Menu, X } from 'lucide-svelte';
	import { navLinks } from '$lib/constants/navigation';
	let isMobileMenuOpen = false;

	const toggleMenu = () => {
		isMobileMenuOpen = !isMobileMenuOpen;
	};

	const closeMenu = () => {
		isMobileMenuOpen = false;
	};
</script>

<header
	class="bg-background/30 dark:bg-background/50 border-border/40 sticky top-0 z-50 border-b backdrop-blur-xl"
>
	<nav class="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
		<div class="hidden items-center space-x-6 md:flex">
			{#each navLinks as { name, target, href }}
				<Button variant="ghost" class="capitalize" {href} onclick={closeMenu} {target}>
					{name}
				</Button>
			{/each}
			<Button onclick={toggleMode} variant="ghost" size="icon" class="cursor-pointer">
				<Sun
					class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
		<div class="flex items-center md:hidden">
			<a href="/" class="text-lg font-bold">Jules THIBAULT</a>
		</div>
		<div class="flex items-center gap-2 md:hidden">
			<Button onclick={toggleMode} variant="ghost" size="icon" class="cursor-pointer">
				<Sun
					class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
			<Button onclick={toggleMenu} variant="ghost" size="icon">
				{#if isMobileMenuOpen}
					<X class="h-5 w-5" />
				{:else}
					<Menu class="h-5 w-5" />
				{/if}
			</Button>
		</div>
	</nav>

	{#if isMobileMenuOpen}
		<div class="flex flex-col items-start gap-2 px-4 pb-4 md:hidden">
			{#each navLinks as link}
				<Button
					variant="ghost"
					class="w-full text-left capitalize"
					href={link.href}
					onclick={closeMenu}
				>
					{link.name}
				</Button>
			{/each}
		</div>
	{/if}
</header>
