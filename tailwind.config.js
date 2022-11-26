const defaultTheme = require('tailwindcss/defaultTheme');
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
				sans: ['CircularStd', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				// color scheme is defined in /app.css
				primary: colors.cyan,
				transparent: 'transparent',
				current: 'currentColor',
				white: 'var(--color-white)',
				black: 'var(--color-black-500)',
				gray: colors.neutral,
				'placeholder-light': '#F0F0F0',
				'placeholder-dark': '#252525',
				slate: {
					500: 'var(--color-slate-500)',
				},
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.gray.700'),
						a: {
							color: theme('colors.primary.500'),
							'&:hover': {
								color: `${theme('colors.primary.600')} !important`,
							},
							code: { color: theme('colors.primary.400') },
						},
						'a:hover,a:focus': {
							textDecoration: 'underline',
							outline: 'none',
						},
						h1: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.900'),
						},
						h2: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.900'),
						},
						h3: {
							fontWeight: '600',
							color: theme('colors.gray.900'),
						},
						'h4,h5,h6': {
							color: theme('colors.gray.900'),
						},
						pre: {
							backgroundColor: theme('colors.gray.800'),
						},
						code: {
							color: theme('colors.pink.500'),
							backgroundColor: theme('colors.gray.100'),
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '2px',
							paddingBottom: '2px',
							borderRadius: '0.25rem',
						},
						'code::before': {
							content: 'none',
						},
						'code::after': {
							content: 'none',
						},
						details: {
							backgroundColor: theme('colors.gray.100'),
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '2px',
							paddingBottom: '2px',
							borderRadius: '0.25rem',
						},
						hr: { borderColor: theme('colors.gray.200') },
						'ol li::marker': {
							fontWeight: '600',
							color: theme('colors.gray.500'),
						},
						'ul li::marker': {
							backgroundColor: theme('colors.gray.500'),
						},
						strong: { color: theme('colors.gray.600') },
						blockquote: {
							color: theme('colors.gray.900'),
							borderLeftColor: theme('colors.gray.200'),
						},
					},
				},
				dark: {
					css: {
						color: theme('colors.gray.300'),
						a: {
							color: theme('colors.primary.500'),
							'&:hover': {
								color: `${theme('colors.primary.400')} !important`,
							},
							code: { color: theme('colors.primary.400') },
						},
						h1: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.100'),
						},
						h2: {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
							color: theme('colors.gray.100'),
						},
						h3: {
							fontWeight: '600',
							color: theme('colors.gray.100'),
						},
						'h4,h5,h6': {
							color: theme('colors.gray.100'),
						},
						pre: {
							backgroundColor: theme('colors.gray.800'),
						},
						code: {
							backgroundColor: theme('colors.gray.800'),
						},
						details: {
							backgroundColor: theme('colors.gray.800'),
						},
						hr: { borderColor: theme('colors.gray.700') },
						'ol li::marker': {
							fontWeight: '600',
							color: theme('colors.gray.400'),
						},
						'ul li::marker': {
							backgroundColor: theme('colors.gray.400'),
						},
						strong: { color: theme('colors.gray.100') },
						thead: {
							th: {
								color: theme('colors.gray.100'),
							},
						},
						tbody: {
							tr: {
								borderBottomColor: theme('colors.gray.700'),
							},
						},
						blockquote: {
							color: theme('colors.gray.100'),
							borderLeftColor: theme('colors.gray.700'),
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

// typography: (theme) => {
// 	// some fontSizes return [size, props], others just size :/
// 	const fontSize = (size) => {
// 		const result = theme(`fontSize.${size}`);
// 		return Array.isArray(result) ? result[0] : result;
// 	};
//
// 	const breakout = {
// 		marginLeft: 0,
// 		marginRight: 0,
// 		gridColumn: '2 / span 10',
// 	};
//
// 	return {
// 		// DEFAULT only holds shared stuff and not the things that change
// 		// between light/dark
// 		DEFAULT: {
// 			css: [
// 				{
// 					'> *': {
// 						gridColumn: '1 / -1',
//
// 						[`@media (min-width: ${theme('screens.lg')})`]: {
// 							gridColumn: '3 / span 8',
// 						},
// 					},
// 					p: {
// 						marginTop: 0,
// 						marginBottom: theme('spacing.8'),
// 						fontSize: fontSize('lg'),
// 					},
// 					'> div': {
// 						marginTop: 0,
// 						marginBottom: theme('spacing.8'),
// 						fontSize: fontSize('lg'),
// 					},
// 					a: {
// 						color: theme('colors.primary.500'),
// 						'&:hover': {
// 							color: `${theme('colors.primary.600')} !important`,
// 						},
// 						code: { color: theme('colors.primary.400') },
// 					},
// 					'a:hover,a:focus': {
// 						textDecoration: 'underline',
// 						outline: 'none',
// 					},
// 					strong: {
// 						fontWeight: theme('fontWeight.medium'),
// 						fontSize: fontSize('lg'),
// 					},
// 					hr: {
// 						marginTop: theme('spacing.8'),
// 						marginBottom: theme('spacing.16'),
// 					},
// 					pre: {
// 						color: 'var(--base05)',
// 						backgroundColor: 'var(--base00)',
// 						marginTop: 0,
// 						marginBottom: theme('spacing.8'),
// 						marginLeft: `-${theme('spacing.10vw')}`,
// 						marginRight: `-${theme('spacing.10vw')}`,
// 						padding: theme('spacing.8'),
// 						borderRadius: 0,
//
// 						[`@media (min-width: ${theme('screens.lg')})`]: {
// 							borderRadius: theme('borderRadius.lg'),
// 							...breakout,
// 						},
// 					},
// 					'.embed': {
// 						position: 'relative',
// 						marginLeft: '-10vw',
// 						marginRight: '-10vw',
// 						[`@media (min-width: ${theme('screens.lg')})`]: {
// 							...breakout,
// 						},
// 					},
// 					'.embed > div': {
// 						height: '0px',
// 					},
// 					'.embed > div > iframe': {
// 						height: '100% !important',
// 						width: '100% !important',
// 						top: '0',
// 						left: '0',
// 						position: 'absolute',
// 						border: 'none',
// 						borderRadius: '0 !important',
// 						[`@media (min-width: ${theme('screens.lg')})`]: {
// 							borderRadius: '0.5rem !important',
// 						},
// 					},
// 					ul: {
// 						marginTop: 0,
// 						marginBottom: theme('spacing.8'),
// 					},
// 					ol: {
// 						marginTop: 0,
// 						marginBottom: theme('spacing.8'),
// 					},
// 					'h1, h2, h3, h4, h5, h6': {
// 						marginTop: 0,
// 						marginBottom: 0,
// 						fontWeight: theme('fontWeight.normal'),
//
// 						[`@media (min-width: ${theme('screens.lg')})`]: {
// 							fontWeight: theme('fontWeight.medium'),
// 						},
// 					},
// 					// tailwind doesn't stick to this property order, so we can't make 'h3' overrule 'h2, h3, h4'
// 					'h1, h2': {
// 						fontSize: fontSize('2xl'),
// 						marginTop: theme('spacing.20'),
// 						marginBottom: theme('spacing.10'),
// 						[`@media (min-width: ${theme('screens.lg')})`]: {
// 							fontSize: fontSize('3xl'),
// 						},
// 					},
// 					h3: {
// 						fontSize: fontSize('xl'),
// 						marginTop: theme('spacing.16'),
// 						marginBottom: theme('spacing.10'),
// 						[`@media (min-width: ${theme('screens.lg')})`]: {
// 							fontSize: fontSize('2xl'),
// 						},
// 					},
// 					'h4, h5, h6': {
// 						fontSize: fontSize('lg'),
// 						[`@media (min-width: ${theme('screens.lg')})`]: {
// 							fontSize: fontSize('xl'),
// 						},
// 					},
// 					img: {
// 						// images are wrapped in <p>, which already has margin
// 						marginTop: 0,
// 						marginBottom: 0,
// 						borderRadius: theme('borderRadius.lg'),
// 					},
// 					blockquote: {
// 						fontWeight: theme('fontWeight.normal'),
// 						border: 'none',
// 						borderRadius: theme('borderRadius.lg'),
// 						padding: theme('spacing.8'),
// 						marginTop: 0,
// 						marginBottom: theme('spacing.10'),
// 					},
// 					'blockquote > :last-child': {
// 						marginBottom: 0,
// 					},
// 				},
// 			],
// 		},
// 		// use prose-light instead of default, so it's easier to see theme differences
// 		light: {
// 			css: [
// 				{
// 					color: theme('colors.gray.500'),
// 					a: {
// 						color: theme('colors.team.current'),
// 					},
// 					strong: {
// 						color: theme('colors.black'),
// 					},
// 					hr: {
// 						borderColor: theme('colors.gray.200'),
// 					},
// 					code: {
// 						color: theme('colors.gray.800'),
// 					},
// 					'h1, h2, h3, h4, h5, h6': {
// 						color: theme('colors.black'),
// 					},
// 					blockquote: {
// 						color: theme('colors.gray.500'),
// 						backgroundColor: theme('colors.gray.100'),
// 					},
// 					'thead, tbody tr': {
// 						borderBottomColor: theme('colors.gray.200'),
// 					},
// 				},
// 			],
// 		},
// 		dark: {
// 			css: [
// 				{
// 					color: theme('colors.slate.500'),
// 					a: {
// 						color: theme('colors.primary.500'),
// 						'&:hover': {
// 							color: `${theme('colors.primary.400')} !important`,
// 						},
// 						code: { color: theme('colors.primary.400') },
// 					},
// 					strong: {
// 						color: theme('colors.white'),
// 					},
// 					hr: {
// 						borderColor: theme('colors.gray.600'),
// 					},
// 					code: {
// 						color: theme('colors.gray.100'),
// 					},
// 					'h1, h2, h3, h4, h5, h6': {
// 						color: theme('colors.white'),
// 					},
// 					blockquote: {
// 						color: theme('colors.slate.500'),
// 						backgroundColor: theme('colors.gray.800'),
// 					},
// 					'thead, tbody tr': {
// 						borderBottomColor: theme('colors.gray.600'),
// 					},
// 				},
// 			],
// 		},
// 	};
// },
// },
// },
