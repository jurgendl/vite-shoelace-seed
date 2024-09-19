const darkModeThemeStorageKey = 'dark-mode';
const lightModeName = 'sl-theme-light';
const darkModeName = 'sl-theme-dark';
const darkmodeToggleElementId = 'theme-switcher';

const darkmodeToggleElement = document.getElementById(darkmodeToggleElementId);

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
	} else {
		document.documentElement.classList.remove(darkModeName);
		document.documentElement.classList.add(lightModeName);
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
	window.matchMedia(`(prefers-color-scheme: ${darkModeName})`).addEventListener('change', event => {
		const isDarkMode = event.matches;
		setDarkMode(isDarkMode);
	});
}