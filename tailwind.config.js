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
					100: '#cbff4d',
					200: '#b5f44a',
					300: '#6bdbc7',
					400: '#02c3bd',
					500: '#223858',
					600: '#17253B',
					700: '#111B2C',
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
