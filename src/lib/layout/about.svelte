<script lang="ts">
	import { Button } from '$lib/components/ui/button/';
	import {
		DropdownMenu,
		DropdownMenuTrigger,
		DropdownMenuContent,
		DropdownMenuLabel,
		DropdownMenuSeparator,
		DropdownMenuGroup,
		DropdownMenuItem
	} from '$lib/components/ui/dropdown-menu';
	import { Github, Mail } from 'lucide-svelte';

	const handleContact = (platform: string) => {
		window.open(platform, '_blank');
	};
</script>

<section
	class="flex flex-wrap items-center justify-center gap-2 select-none sm:gap-x-4 md:gap-x-10"
	id="about"
>
	<pre class="text-primary text-xs leading-none sm:text-sm">
 ██░ ██ ▓█████  ██▓     ██▓     ▒█████  
▓██░ ██▒▓█   ▀ ▓██▒    ▓██▒    ▒██▒  ██▒
▒██▀▀██░▒███   ▒██░    ▒██░    ▒██░  ██▒
░▓█ ░██ ▒▓█  ▄ ▒██░    ▒██░    ▒██   ██░
░▓█▒░██▓░▒████▒░██████▒░██████▒░ ████▓▒░
▒ ░░▒░▒░░ ▒░ ░░ ▒░▓  ░░ ▒░▓  ░░ ▒░▒░▒░ 
▒ ░▒░ ░ ░ ░  ░░ ░ ▒  ░░ ░ ▒  ░  ░ ▒ ▒░ 
░  ░░ ░   ░     ░ ░     ░ ░   ░ ░ ░ ▒  
░  ░  ░   ░  ░    ░  ░    ░  ░    ░ ░  
    </pre>
	<pre class="text-primary text-xs leading-none sm:text-sm">
 ██▓    ▄▄▄       ███▄ ▄███▓
▓██▒   ▒████▄    ▓██▒▀█▀ ██▒
▒██▒   ▒██  ▀█▄  ▓██    ▓██░
░██░   ░██▄▄▄▄██ ▒██    ▒██ 
░██░    ▓█   ▓██▒▒██▒   ░██▒
░▓      ▒▒   ▓▒█░░ ▒░   ░  ░
▒ ░     ▒   ▒▒ ░░  ░      ░
▒ ░     ░   ▒   ░      ░   
░           ░  ░       ░   
    </pre>
	<pre class="text-primary text-xs leading-none sm:text-sm">
 ▄▄▄██▀▀▀█    ██  ██▓    ▓█████ ▒███████▒
   ▒██   ██  ▓██▒▓██▒    ▓█   ▀ ▒ ▒ ▒ ▄▀░
   ░██  ▓██  ▒██░▒██░    ▒███   ░ ▒ ▄▀▒░ 
▓██▄██▓ ▓▓█  ░██░▒██░    ▒▓█  ▄   ▄▀▒   ░
 ▓███▒  ▒▒█████▓ ░██████▒░▒████▒▒███████▒
 ▒▓▒▒░  ░▒▓▒ ▒ ▒ ░ ▒░▓  ░░░ ▒░ ░░▒▒ ▓░▒░▒
 ▒ ░▒░  ░░▒░ ░ ░ ░ ░ ▒  ░ ░ ░  ░░░▒ ▒ ░ ▒
 ░ ░ ░   ░░░ ░ ░   ░ ░      ░   ░ ░ ░ ░ ░
 ░   ░     ░         ░  ░   ░  ░  ░ ░    
                                ░        
    </pre>
</section>
<section class="flex flex-col items-center">
	<h2 class="text-l mb-3 text-center">
		Cybersecurity engineer with a developer background. I build, break, and secure systems with a
		hands-on mindset, driven by curiosity and a love for solving real problems.
	</h2>
	<section class="flex items-center gap-3">
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Button size="lg" variant="outline" class="cursor-pointer">Contact Me!</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent class="w-48">
				<DropdownMenuLabel>Get in touch</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem
						class="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
						onclick={() => handleContact('mailto:contact@julez.cat')}
					>
						<Mail class="mr-2 h-4 w-4" />
						<span>Email</span>
					</DropdownMenuItem>
					<DropdownMenuItem
						class="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
						onclick={() => handleContact('https://linkedin.com/in/julestblt')}
					>
						<Github class="mr-2 h-4 w-4" />
						<span>LinkedIn</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
		<Button size="lg" target="__blank" href="https://github.com/Julestblt" variant="outline">
			<Github />
		</Button>
		<Button size="lg" target="__blank" href="https://blog.julez.cat" variant="outline">
			My Blog
		</Button>
	</section>
</section>
