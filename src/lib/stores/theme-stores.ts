import { browser } from '$app/environment';
import { readable } from 'svelte/store';

function getCurrentMode(): 'dark' | 'light' {
	if (browser) {
		return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
	}
	return 'dark';
}

export const theme = readable<'dark' | 'light'>(getCurrentMode(), (set) => {
	const observer = new MutationObserver(() => {
		set(getCurrentMode());
	});

	observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

	return () => observer.disconnect();
});
