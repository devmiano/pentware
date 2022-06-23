/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['frontend/src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				black: '#143a52',
				white: '#f2f8f2',
				ash: {
					100: '#ebf2fa',
					200: '#deeaf7',
					300: '#cee0f3',
					400: '#bdd5ef',
					500: '#adcbeb',
					600: '#9cc1e7',
				},
				smog: {
					100: '#55D85A',
					200: '#F6F6F6',
					300: '#ABB4BD',
					400: '#FB5607',
					500: '#FF2424',
					600: '#2A2C36',
					700: '#1E1F28',
				},
			},
			fontFamily: {
				sans: ['Outfit', ...defaultTheme.fontFamily.sans],
				serif: ['Merriweather', 'serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
