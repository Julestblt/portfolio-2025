<script lang="ts">
	import { Mail, Github, Linkedin } from 'lucide-svelte';
</script>

<footer
	class="bg-background/30 dark:bg-background/50 border-border/40 w-full border-t backdrop-blur-xl"
>
	<div class="mx-auto max-w-4xl px-4 py-6">
		<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
			<div class="flex flex-col space-y-2">
				<a
					href="mailto:fernand3zdev@gmail.com"
					class="text-muted-foreground hover:text-foreground group flex items-center space-x-2 transition-colors"
					><Mail />
					<span class="transition-transform duration-200 group-hover:translate-x-1"
						>julesthibault@pm.me</span
					></a
				>
			</div>
			<div class="flex items-center space-x-4">
				<a
					href="https://github.com/Julestblt"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
					class="focus-visible:ring-ring hover:bg-background/50 text-muted-foreground hover:text-foreground inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-all duration-200 hover:scale-110 focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
				>
					<Github />
				</a><a
					href="https://linkedin.com/in/Julestblt"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
					class="focus-visible:ring-ring hover:bg-background/50 text-muted-foreground hover:text-foreground inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-all duration-200 hover:scale-110 focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
					><Linkedin />
				</a>
			</div>
		</div>
		<div class="text-muted-foreground mt-6 text-center text-sm">
			<p>© 2025 Thibault Jules. All rights reserved.</p>
		</div>
	</div>
</footer>
