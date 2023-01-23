const { fontFamily, spacing } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const path = require('path');

const fromRoot = (p) => path.join(__dirname, p);

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: process.env.NODE_ENV ? 'jit' : undefined,
	content: [fromRoot('./src/**/*.+(js|jsx|ts|tsx|mdx|md)')],
	darkMode: 'class',
	corePlugins: {
		aspectRatio: false,
	},
	theme: {
		extend: {
			spacing: {
				'9/16': '56.25%',
			},
			lineHeight: {
				11: '2.75rem',
				12: '3rem',
				13: '3.25rem',
				14: '3.5rem',
			},
			divideWidth: {
				DEFAULT: '1px',
				0: '0',
				2: '2px',
				3: '3px',
				4: '4px',
				6: '6px',
				8: '8px',
			},
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans],
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
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.black'),
						a: {
							color: theme('colors.blue.500'),
							'&:hover': {
								color: theme('colors.blue.600'),
							},
							code: { color: theme('colors.blue.400') },
						},
						'h2,h3,h4': {
							'scroll-margin-top': spacing[32],
						},
						thead: {
							borderBottomColor: theme('colors.gray.200'),
						},
						code: { color: theme('colors.pink.500') },
						'blockquote p:first-of-type::before': false,
						'blockquote p:last-of-type::after': false,
					},
				},
				dark: {
					css: {
						color: theme('colors.gray.200'),
						a: {
							color: theme('colors.blue.400'),
							'&:hover': {
								color: theme('colors.blue.600'),
							},
							code: { color: theme('colors.blue.400') },
						},
						blockquote: {
							borderLeftColor: theme('colors.gray.700'),
							color: theme('colors.gray.300'),
						},
						'h2,h3,h4': {
							color: theme('colors.gray.100'),
							'scroll-margin-top': spacing[32],
						},
						hr: { borderColor: theme('colors.gray.700') },
						ol: {
							li: {
								'&:before': { color: theme('colors.gray.500') },
							},
						},
						ul: {
							li: {
								'&:before': { backgroundColor: theme('colors.gray.500') },
							},
						},
						strong: { color: theme('colors.gray.100') },
						thead: {
							th: {
								color: theme('colors.gray.100'),
							},
							borderBottomColor: theme('colors.gray.600'),
						},
						tbody: {
							tr: {
								borderBottomColor: theme('colors.gray.700'),
							},
						},
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('autoprefixer'),
	],
};
