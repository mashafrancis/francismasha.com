const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: process.env.NODE_ENV ? 'jit' : undefined,
	content: [
		'./src/app/**/*.{ts,tsx}',
		'./src/components/**/*.{ts,tsx}',
		'./src/content/**/*.mdx',
	],
	darkMode: 'class',
	corePlugins: {
		aspectRatio: false,
	},
	theme: {
		extend: {
			fill: {
				skin: {
					base: withOpacity('--color-text-base'),
					accent: withOpacity('--color-accent'),
				},
				transparent: 'transparent',
			},
			fontFamily: {
				sans: ['var(--font-sf-text)', ...fontFamily.sans],
				mono: ['var(--font-jetbrains)', ...fontFamily.mono],
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
				vercel: {
					pink: '#FF0080',
					blue: '#0070F3',
					cyan: '#50E3C2',
					orange: '#F5A623',
					violet: '#7928CA',
				},
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
