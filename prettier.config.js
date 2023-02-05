module.exports = {
	arrowParens: 'always',
	semi: true,
	trailingComma: 'all',
	singleQuote: true,
	printWidth: 80,
	tabWidth: 2,
	useTabs: true,
	endOfLine: 'auto',
	jsxSingleQuote: true,
	bracketSpacing: true,
	// pnpm doesn't support plugin auto loading
	// https://github.com/tailwindlabs/prettier-plugin-tailwindcss#installation
	plugins: [require('prettier-plugin-tailwindcss')],
};
