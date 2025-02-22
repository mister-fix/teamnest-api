import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import jsoncPlugin from 'eslint-plugin-jsonc';
import n from 'eslint-plugin-n';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import pluginSecurity from 'eslint-plugin-security';
import globals from 'globals';
import jsoncParser from 'jsonc-eslint-parser';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
	pluginJs.configs.recommended,
	pluginSecurity.configs.recommended,
	pluginImport.flatConfigs.recommended,
	n.configs['flat/recommended'],

	// Typescript ESLint config
	...tseslint.configs.recommended,
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: './tsconfig.json',
				ecmaVersion: 'latest',
				sourceType: 'module',
				tsConfigRootDir: './',
			},
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
		},
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_' },
			],
			'@typescript-eslint/explicit-function-return-type': 'off',
		},
	},

	// JSONC config
	{
		files: ['**/*.json', '**/*.jsonc'],
		languageOptions: {
			parser: jsoncParser, // Use the JSONC parser
		},
		plugins: {
			jsonc: jsoncPlugin,
		},
		rules: {
			'jsonc/indent': ['error', 2], // Enforce 2-space indentation for JSON
			'jsonc/quotes': ['error', 'double'], // Enforce double quotes for JSON
			'max-len': 'off', // Disable line length rule for JSON files
		},
	},

	// Custom ESLint Rules & Plugins
	{
		files: ['**/*.{js,cjs,mjs,ts}'],
		plugins: {
			pluginImport,
			prettier: eslintPluginPrettier,
		},
		settings: {
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project: './tsconfig.json',
					tsConfigRootDir: './',
				},
				node: {
					paths: ['src'],
					moduleDirectory: ['node_modules', 'src/'],
					extensions: ['.js', '.cjs', '.mjs', '.ts', '.json'],
				},
				alias: {
					map: [
						['@', './src/*'],
						['@/config/*', './src/config/*'],
					],
					extensions: ['.js', '.ts', '.json'],
				},
			},
		},
		rules: {
			// Import rules
			'import/order': [
				'error',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						'parent',
						'sibling',
						'index',
					],
					'newlines-between': 'always',
				},
			],
			'import/no-unresolved': 'error',
			'import/no-extraneous-dependencies': [
				'error',
				{
					devDependencies: true,
					optionalDependencies: false,
					peerDependencies: false,
				},
			],

			// N rules
			'n/exports-style': ['error', 'exports'],
			'n/no-missing-import': [
				'error',
				{
					tryExtensions: ['.ts', '.js'],
				},
			],

			// Prettier rules
			'prettier/prettier': 'error',

			// General rules
			'linebreak-style': ['error', 'unix'],
			'max-len': [
				'error',
				{
					code: 80,
					ignoreStrings: true,
					ignoreTemplateLiterals: true,
					ignoreComments: true,
				},
			],
			indent: ['error', 'tab', { SwitchCase: 1 }],
			quotes: ['error', 'single'],
			semi: ['error', 'always'],
			eqeqeq: 'error',
			'arrow-spacing': ['error', { before: true, after: true }],
			'brace-style': ['error', '1tbs', { allowSingleLine: true }],
			'object-curly-spacing': ['error', 'always'],
			'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			'no-trailing-spaces': 'error',
			'no-console': 'error',
			'no-unused-vars': [
				'warn',
				{
					vars: 'all',
					args: 'after-used',
					ignoreRestSiblings: false,
					argsIgnorePattern: '^_',
				},
			],
		},
	},

	// Apply prettier config last (to disable conflicting rules)
	{
		name: 'Prettier Config',
		rules: eslintConfigPrettier.rules,
	},

	// Apply JSON config and rules
	...jsoncPlugin.configs['flat/recommended-with-jsonc'],
	{
		rules: {
			'jsonc/indent': ['error', 'tab'],
			'jsonc/quotes': ['error', 'double'],
			'max-len': 'off',
		},
	},

	// Language options & globals
	{
		languageOptions: {
			parserOptions: { sourceType: 'module', ecmaVersion: 'latest' },
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021,
			},
		},
	},

	// Ignore Unnecessary Folders
	{
		ignores: ['node_modules', 'dist', 'client', 'build', '.husky', 'logs'],
	},
];
