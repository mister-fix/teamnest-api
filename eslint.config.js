import { default as js, default as pluginJs } from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import configPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginJest from 'eslint-plugin-jest';
import n from 'eslint-plugin-n';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginPromise from 'eslint-plugin-promise';
import security from 'eslint-plugin-security';
import pluginUnicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
	pluginJs.configs.recommended,
	security.configs.recommended,
	pluginImport.flatConfigs.recommended,
	n.configs['flat/recommended'],

	// Base configuration for JavaScript and TypeScript
	tseslint.configs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node,
				...globals.es2021,
				...globals.jest,
			},
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			n,
			security,
			prettier: pluginPrettier,
			promise: pluginPromise,
			unicorn: pluginUnicorn,
			'unused-imports': unusedImports,
		},
		settings: {
			'import/resolver': {
				node: {
					paths: ['src'],
					moduleDirectory: ['node_modules', 'src'],
					extensions: ['.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx', '.json'],
				},
				alias: {
					map: [['@', './src/*']],
					extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
				},
			},
		},
		rules: {
			// Node.js rules
			'n/no-unpublished-import': 'error',
			'n/no-unpublished-require': 'error',
			'n/exports-style': ['error', 'exports'],
			'n/no-missing-import': ['error', { tryExtensions: ['.ts', '.js'] }],

			// Security rules
			'security/detect-object-injection': 'warn',
			'security/detect-non-literal-fs-filename': 'warn',
			'security/detect-possible-timing-attacks': 'warn',

			// Prettier integration
			'prettier/prettier': 'warn',

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
			'import/named': 'error',
			'import/default': 'error',
			'import/namespace': 'error',
			'import/no-absolute-path': 'error',
			'import/no-cycle': 'warn',
			'import/no-self-import': 'error',
			'import/no-extraneous-dependencies': [
				'error',
				{
					devDependencies: true,
					optionalDependencies: false,
					peerDependencies: false,
				},
			],

			// Unused imports rules
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],

			// Promise rules
			'promise/always-return': 'error',
			'promise/no-return-wrap': 'error',
			'promise/param-names': 'error',
			'promise/catch-or-return': 'error',
			'promise/no-native': 'off',

			// Unicorn rules
			'unicorn/prefer-module': 'error',
			'unicorn/prefer-node-protocol': 'error',
			'unicorn/prefer-top-level-await': 'error',
			'unicorn/no-array-reduce': 'warn',
			'unicorn/prefer-export-from': 'error',
			'unicorn/prefer-ternary': 'warn',
			'unicorn/no-null': 'warn',

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
			'no-console': 'warn',
			'no-debugger': 'error',
			'no-unused-vars': 'off', // Handled by @typescript-eslint/no-unused-vars
		},
	},

	// Prettier configuration (disable conflicting rules)
	{
		...configPrettier,
		files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
	},

	// Jest configuration
	{
		files: ['**/*.test.ts', '**/*.spec.ts'],
		plugins: {
			jest: pluginJest,
		},
		rules: {
			'jest/no-disabled-tests': 'warn',
			'jest/no-focused-tests': 'error',
			'jest/no-identical-title': 'error',
			'jest/prefer-to-have-length': 'warn',
			'jest/valid-expect': 'error',
			'jest/no-conditional-expect': 'error',
			'jest/no-deprecated-functions': 'error',
			'jest/no-mocks-import': 'error',
		},
	},

	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		plugins: { js },
		extends: ['js/recommended'],
	},

	// Ignore unnecessary folders
	{
		ignores: [
			'node_modules',
			'dist',
			'build',
			'.husky',
			'logs',
			'coverage',
			'.vscode',
		],
	},
]);
