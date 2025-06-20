<script lang="ts">
	import { Java, Windows, Powershell, AWS, Azure } from '$lib/components/icons';
	import { Card } from '$lib/components/ui/card';
	import {
		SiPython,
		SiJavascript,
		SiGnubash,
		SiC,
		SiMysql,
		SiPhp,
		SiLinux,
		SiVmware,
		SiDocker,
		SiKubernetes,
		SiGooglecloud,
		SiJenkins,
		SiGit,
		SiSplunk
	} from '@icons-pack/svelte-simple-icons';

	import {
		Code2,
		Shield,
		Cloud,
		Server,
		Lock,
		Search,
		Bug,
		Eye,
		FileSearch,
		Cpu,
		Hammer,
		Network
	} from 'lucide-svelte';

	const skillCategories = [
		{
			title: 'Development',
			icon: Code2,
			skills: [
				{ name: 'Python', icon: SiPython },
				{ name: 'JavaScript', icon: SiJavascript },
				{ name: 'Bash', icon: SiGnubash },
				{ name: 'C', icon: SiC },
				{ name: 'SQL', icon: SiMysql },
				{ name: 'PowerShell', icon: Powershell },
				{ name: 'Java', icon: Java },
				{ name: 'PHP', icon: SiPhp }
			]
		},
		{
			title: 'Systems & Infrastructure',
			icon: Server,
			skills: [
				{ name: 'Linux', icon: SiLinux },
				{ name: 'Windows', icon: Windows },
				{ name: 'VMware', icon: SiVmware },
				{ name: 'Docker', icon: SiDocker },
				{ name: 'Kubernetes', icon: SiKubernetes },
				{ name: 'Active Directory', icon: Cpu }
			]
		},
		{
			title: 'Cybersecurity',
			icon: Shield,
			skills: [
				{ name: 'DevSecOps', icon: Shield },
				{ name: 'Penetration Testing', icon: Bug },
				{ name: 'Vulnerability Assessment', icon: Search },
				{ name: 'SIEM', icon: Eye },
				{ name: 'Forensics', icon: FileSearch },
				{ name: 'Network Security', icon: Network },
				{ name: 'Tool Development', icon: Hammer }
			]
		},
		{
			title: 'Cloud & DevOps',
			icon: Cloud,
			skills: [
				{ name: 'AWS', icon: AWS },
				{ name: 'Azure', icon: Azure },
				{ name: 'GCP', icon: SiGooglecloud },
				{ name: 'Jenkins', icon: SiJenkins },
				{ name: 'Git', icon: SiGit },
				{ name: 'Splunk', icon: SiSplunk }
			]
		}
	];
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
				<div class="mb-4 flex items-center">
					<div class={`mr-3 flex  h-8 w-8 items-center justify-center rounded-lg`}>
						<svelte:component this={category.icon} class="h-6 w-6" />
					</div>
					<h4 class="text-lg font-bold">{category.title}</h4>
				</div>
				<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
					{#each category.skills as skill}
						<div
							class="group flex items-center rounded-lg border p-3 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-gray-200 hover:shadow-md"
						>
							<div
								class={`mr-3 flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-105`}
							>
								{#if typeof skill.icon === 'string'}
									<span class="text-xs font-bold">{skill.icon}</span>
								{:else}
									<svelte:component this={skill.icon} />
								{/if}
							</div>
							<span class="text-sm font-medium">{skill.name}</span>
						</div>
					{/each}
				</div>
			</Card>
		{/each}
	</div>
</section>
