/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	
	],
	theme: {
		fontFamily: {
			font: ['Inter', 'sans-serif'],
		},
		fontWeight: { bold: '700', medium: '500', normal: '400' },
		screens: {
			middle: '376px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
		},
		separator: '-',
		extend: {
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem',
			},
			borderRadius: {
				'4xl': '2rem',
				'8xl': '4rem',
			},
			colors: {
				transparent: 'transparent',
				primaryGreen: '#225F33',
				secondaryGreen: '#92E3A9',
				lightRed: '#BA6E6E',
				black: '#2D2D2D',
				yellow: '#DAAB33',
				lightYellow: '#E2D9B7',
				darkWhite: '#F4F4F4',
        blue: '#0096FF',
				secondary: 'rgba(217, 204, 159, 0.75)',
				brightGray: 'rgba(217, 217, 217, 0.3)',
				white: '#fff',
				wheat: '#D9CC9F',
				gray: '#D9D9D9',
				lightGray: '#F6F4F4',
				grayishBlue: '#2F2E41',
				oxford_blue: '#263238',
				cyan_lime_green: '#92E3A9',
				gray33: '#545454',
				red: '#ff0000',
				rosy_brown: '#A0616A',
				blue: '#1fb6ff',
				lightBlue: '#4E5BD7',
				miniBlue: '#E5EAF9',
			},
		},
	},

};