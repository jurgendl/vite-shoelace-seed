const darkModeThemeStorageKey = 'dark-mode';
const lightModeName = 'sl-theme-light';
const darkModeName = 'sl-theme-dark';
const lightModeIcon = 'sun-fill';
const darkModeIcon = 'moon-stars';
const darkmodeToggleElementId = 'shoelace-theme-switch';

const darkmodeToggleElement = document.getElementById(darkmodeToggleElementId);

{
	// Create a style element
	const styleElement = document.createElement('style');
	// Define the CSS rules
	const cssRules = `
		html {
			color-scheme: light dark;
		}
		#shoelace-theme-switch {
			cursor: pointer;
			font-size: 24px;
			position: absolute;
			right: 10px;
			top: 10px;
			color: #ffea3d;
			-webkit-filter: drop-shadow( 0 0 3px #B90000D4 ) drop-shadow( 0 0 5px #00000033 );
			filter: drop-shadow( 0 0 3px #B90000D4 ) drop-shadow( 0 0 5px #00000033 );"
		}
		.sl-theme-dark #shoelace-theme-switch {
			color: #eeeeee;
			-webkit-filter: drop-shadow( 0 0 3px #FFE8E8 ) drop-shadow( 0 0 3px #000000ff );
			filter: drop-shadow( 0 0 3px #FFE8E8 ) drop-shadow( 0 0 3px #000000ff );"
		}
	`;
	// Set the CSS rules for the style element
	styleElement.innerHTML = cssRules;
	// Append the style element to the head of the document
	document.head.appendChild(styleElement);
}

// Check if the dark mode preference is set to true
function isDarkMode() {
	if (localStorage.getItem(darkModeThemeStorageKey)) return localStorage.getItem(darkModeThemeStorageKey) == 'true'; // Return the dark mode preference from local storage
	return (window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${darkModeName})`).matches); // Check if the user prefers dark mode
}

// Set the dark mode preference
function setDarkMode(isDarkMode) {
	if (isDarkMode) {
		document.documentElement.classList.remove(lightModeName);
		document.documentElement.classList.add(darkModeName);
		darkmodeToggleElement.name = darkModeIcon;
	} else {
		document.documentElement.classList.remove(darkModeName);
		document.documentElement.classList.add(lightModeName);
		darkmodeToggleElement.name = lightModeIcon;
	}
	localStorage.setItem(darkModeThemeStorageKey, isDarkMode); // Store the dark mode preference in local storage
	if (typeof changeDarkMode === 'function') changeDarkMode(isDarkMode); // Call the changeDarkMode function if it exists
}

// Toggle the dark mode preference
function toggleDarkMode() {
	setDarkMode(!isDarkMode());
}

// Listen for clicks on the toggle
darkmodeToggleElement.addEventListener('click', () => toggleDarkMode());

// Set the initial dark mode preference
document.addEventListener('DOMContentLoaded', () => setDarkMode(isDarkMode()));

// Listen for changes in the user's preference
if (window.matchMedia) {
	window.matchMedia(`(prefers-color-scheme: ${darkModeName})`).addEventListener('change', event => setDarkMode(event.matches));
}