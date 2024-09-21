/*
import '@shoelace-style/shoelace';
*/
/**/
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
/**/

export class ViteSeedApp {
	init(): string {
		const button = document.querySelector('sl-button') as HTMLElement;

		if (button) {
			button.addEventListener('click', () => {
				console.log('Button clicked');
			});
		}

		return "Vite Seed App initialized!";
	}
}