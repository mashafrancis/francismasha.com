const {fontFamily, spacing} = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const path = require('path');

const fromRoot = (p) => path.join(__dirname, p);

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: process.env.NODE_ENV ? 'jit' : undefined,
	content: [
		'./app/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./content/**/*.mdx',
	],
	darkMode: 'class',
	corePlugins: {
		aspectRatio: false,
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ['CircularStd', ...fontFamily.sans],
			},
			colors: {
				// color scheme is defined in /app.css
				primary: colors.blue,
				'blue-opaque': 'rgb(13 42 148 / 18%)',
				gray: {
					0: '#fff',
					100: '#fafafa',
					200: '#eaeaea',
					300: '#999999',
					400: '#888888',
					500: '#666666',
					600: '#444444',
					700: '#333333',
					800: '#222222',
					900: '#111111',
				},
			},
			typography: {
				quoteless: {
					css: {
						'blockquote p:first-of-type::before': {content: 'none'},
						'blockquote p:first-of-type::after': {content: 'none'},
					},
				},
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('autoprefixer'),
	],
};
