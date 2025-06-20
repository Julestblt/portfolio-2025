import { Powershell, Java, Windows, AWS, Azure } from '$lib/components/icons';
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
	Server,
	Cpu,
	Shield,
	Bug,
	Search,
	Eye,
	FileSearch,
	Network,
	Hammer,
	Cloud
} from 'lucide-svelte';

export const skillCategories = [
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
