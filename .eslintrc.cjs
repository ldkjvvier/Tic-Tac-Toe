module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended-type-checked', // Cambia a esta extensión
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/stylistic-type-checked',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.node.json'], // Asegúrate de que estos archivos existan
		tsconfigRootDir: __dirname,
	},
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
}
