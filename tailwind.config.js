/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				spaces: ['Roboto', 'sans-serif'],
				long: ['Ibarra Real Nova', 'serif'],
				logo: ['Sorts Mill Goudy', 'serif'],
			},
			colors: {
				landscape: {
					300: '#BED63A',
					500: '#B9D07E',
					700: '#72B64A',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
