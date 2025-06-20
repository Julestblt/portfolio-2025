import {
	SiSvelte,
	SiTypescript,
	SiExpress,
	SiC,
	SiVuedotjs
} from '@icons-pack/svelte-simple-icons';

export const projects = [
	{
		title: 'Dork Generator',
		description:
			'A Google dork generator focused on pentesting, featuring a modern and intuitive interface for security professionals.',
		github: 'https://github.com/Julestblt/dork-generator',
		demo: 'https://dork.julez.cat',
		tech: [
			{
				name: 'Svelte',
				icon: SiSvelte
			},
			{
				name: 'TypeScript',
				icon: SiTypescript
			}
		]
	},
	{
		title: 'Code audit app',
		description: 'An application that allows you to audit your code by simply uploading it.',
		github: null,
		demo: null,
		tech: [
			{
				name: 'Svelte',
				icon: SiSvelte
			},
			{
				name: 'TypeScript',
				icon: SiTypescript
			},
			{
				name: 'Express',
				icon: SiExpress
			}
		]
	},
	{
		title: 'SecMalloc',
		description:
			'A secure malloc() implementation designed to detect memory vulnerabilities (overflows, use-after-free...), essential for secure development.',
		github: 'https://github.com/Julestblt/SecMalloc',
		demo: null,
		tech: [{ name: 'C', icon: SiC }]
	},
	{
		title: 'JSON Parser',
		description:
			'An interactive JSON parsing tool to visualize syntactic structure — ideal for debugging and data analysis.',
		github: 'https://github.com/Julestblt/JSON-parser',
		demo: 'https://json-parser.julez.cat',
		tech: [
			{ name: 'Vue.js', icon: SiVuedotjs, color: 'bg-green-100 text-green-800 border-green-200' },
			{
				name: 'TypeScript',
				icon: SiTypescript
			}
		]
	}
];
