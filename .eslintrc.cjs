module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		ecmaFeatures: {
			modules: true,
		},
	},
	extends: ['@guardian/eslint-config'],
	ignorePatterns: ['dist', 'coverage'],
};
