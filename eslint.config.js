/** @format */

import cspellPlugin from '@cspell/eslint-plugin';
import js from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginNode from 'eslint-plugin-n';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginPromise from 'eslint-plugin-promise';
import pluginSecurity from 'eslint-plugin-security';
import pluginUnicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: { ...globals.node, ...globals.nodeBuiltin, ...globals.es2025 },
		},
	},

	// TypeScript-specific config
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: { project: './tsconfig.json' },
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
		},
	},

	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		plugins: {
			js,
			n: pluginNode,
			security: pluginSecurity,
			promise: pluginPromise,
			unicorn: pluginUnicorn,
			'unused-imports': unusedImports,
		},
		extends: ['js/recommended'],
		settings: {
			'import/resolver': {
				node: {
					paths: ['./', './src'],
					moduleDirectory: ['node_modules', 'src'],
					extensions: ['.js', '.cjs', '.mjs', '.ts', '.json'],
				},
				alias: {
					map: [
						['@', '.'],
						['@/src', './src'],
					],
					extensions: ['.js', '.cjs', '.mjs', '.ts', '.json'],
				},
			},
		},
		rules: {
			// Prettier
			'prettier/prettier': [
				'error',
				{},
				{
					fileInfoOptions: {
						withNodeModules: true,
					},
				},
			],

			// Security rules
			'security/detect-object-injection': 'warn',
			'security/detect-non-literal-fs-filename': 'warn',
			'security/detect-possible-timing-attacks': 'warn',

			// Node.js rules
			'n/no-unpublished-import': 'error',
			'n/no-unpublished-require': 'error',
			'n/exports-style': ['error', 'exports'],
			'n/no-missing-import': ['error', { tryExtensions: ['.ts', '.js'] }],

			// Import rules
			'import/order': [
				'error',
				{
					groups: [
						['builtin', 'external'],
						'internal',
						'parent',
						'sibling',
						'index',
					],
					'newlines-between': 'ignore',
					alphabetize: { caseInsensitive: true },
					pathGroups: [
						{
							pattern: 'node:*',
							group: 'builtin',
							position: 'before',
						},
					],
					pathGroupsExcludedImportTypes: ['builtin'],
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
			'lines-around-comment': [
				'error',
				{
					beforeBlockComment: true,
					afterBlockComment: false,
					beforeLineComment: true,
					afterLineComment: false,
					allowBlockStart: true,
					allowBlockEnd: true,
					allowObjectStart: true,
					allowObjectEnd: true,
					allowArrayStart: true,
					allowArrayEnd: true,
				},
			],
		},
	},

	// CSPell plugin
	{
		plugins: { '@cspell': cspellPlugin },
		rules: {
			'@cspell/spellchecker': [
				'warn',
				{
					configFile: './cspell.json',
				},
			],
		},
	},

	// Ignore unnecessary folders
	{
		ignores: [
			'node_modules',
			'dist',
			'build',
			'logs',
			'coverage',
			'.husky',
			'.vscode',
		],
	},

	tseslint.configs.recommended,
	pluginSecurity.configs.recommended,
	pluginNode.configs['flat/recommended'],
	pluginImport.flatConfigs.recommended,
	pluginPrettier,
	configPrettier,
]);
