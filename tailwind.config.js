const { fontFamily, spacing } = require('tailwindcss/defaultTheme');
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
			typography: {
				quoteless: {
					css: {
						'blockquote p:first-of-type::before': { content: 'none' },
						'blockquote p:first-of-type::after': { content: 'none' },
					},
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('autoprefixer'),
	],
};
