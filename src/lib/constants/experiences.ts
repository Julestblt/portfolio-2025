import type { SvelteComponent } from 'svelte';

export interface Experience {
	company: string;
	logo: string;
	location: string;
	duration: string;
	type: string;
	roles: {
		title: string;
		date: string;
		description: string;
	}[];
}

export const experiences: Experience[] = [
	{
		company: 'Thales',
		logo: '/thales.jpg',
		location: 'Lille, France',
		duration: 'Sep 2023 - Present',
		type: 'Apprenticeship · 2 years',
		roles: [
			{
				title: 'Pentester',
				date: 'January 2025 - Present',
				description:
					'Performed web application penetration tests and wrote detailed reports. Developed offensive tools tailored for specific engagements.'
			},
			{
				title: 'DevSecOps',
				date: 'September 2023 - Present',
				description:
					'Trained development teams on secure coding practices. Wrote internal secure development guides. Benchmarked SAST/DAST/IAST tools, created vulnerable applications for training, and participated in DSOMM/SAMM maturity audits.'
			}
		]
	},
	{
		company: 'Decathlon',
		logo: '/decathlon.jpg',
		location: 'Lille, France',
		duration: 'Sep 2021 - Sep 2023',
		type: 'Apprenticeship · 2 years',
		roles: [
			{
				title: 'DevSecOps',
				date: 'September 2022 - September 2023',
				description:
					'Benchmarked security tools (Snyk, Veracode, Checkmarx). Integrated Snyk into CI/CD, monitored and remediated vulnerabilities, and scanned Docker images with Grype and Trivy.'
			},
			{
				title: 'Web Developer',
				date: 'September 2021 - September 2022',
				description:
					'Created an internal npm package in Svelte.js for Decathlon’s e-commerce site. Worked closely with PMs, DevOps, UI/UX, and developers for unified experience.'
			}
		]
	},
	{
		company: 'RTE',
		logo: '/rte.png',
		location: 'Montigny-le-Bretonneux, France',
		duration: 'Sep 2022 - Dec 2022',
		type: 'Apprenticeship · 4 months',
		roles: [
			{
				title: 'SOC Analyst',
				date: 'September 2022 - December 2022',
				description:
					'Monitored and handled security events. Managed firewall rule modifications and event prioritization.'
			}
		]
	},

	{
		company: 'GamersOrigin',
		logo: '/go.png',
		location: 'Paris, France',
		duration: 'Sep 2018 - Apr 2019',
		type: 'Fixed-term · 8 months',
		roles: [
			{
				title: 'Professional Esport Player',
				date: 'September 2018 - April 2019',
				description:
					'4x French Champion and Vice-Champion of Europe. Competed at high-level events under the GamersOrigin banner.'
			}
		]
	}
];
