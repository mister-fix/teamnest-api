/**
 * ESLint main configuration file. For a detailed explanation regarding ESLint,
 * visit: https://eslint.org/docs/latest/.
 * @format
 */

import js from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import pluginNode from 'eslint-plugin-n';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginPromise from 'eslint-plugin-promise';
import pluginSecurity from 'eslint-plugin-security';
import pluginUnicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @format */

// Shared settings for all file types
const sharedSettings = {
	'import/resolver': {
		typescript: {
			alwaysTryTypes: true,
			project: './tsconfig.json',
		},
		node: {
			paths: ['./', './src'],
			moduleDirectory: ['node_modules', 'src'],
			extensions: ['.js', '.cjs', '.mjs', '.ts', '.tsx', '.json'],
		},
		alias: {
			map: [
				['@', '.'],
				['@/src', './src'],
			],
			extensions: ['.js', '.cjs', '.mjs', '.ts', '.tsx', '.json'],
		},
	},
};

// Shared rules for all file types
const sharedRules = {
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
};

// Export configuration
export default defineConfig([
	// Shared settings
	{
		settings: sharedSettings,
	},

	// JavaScript-specific config
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: { ...globals.node, ...globals.nodeBuiltin, ...globals.es5 },
		},
		plugins: {
			js,
			n: pluginNode,
			security: pluginSecurity,
			promise: pluginPromise,
			unicorn: pluginUnicorn,
			'unused-imports': unusedImports,
		},
		extends: ['js/recommended'],
		rules: {
			...sharedRules,
			'no-unused-vars': 'warn',
			'n/no-unpublished-import': 'error',
			'n/no-unpublished-require': 'error',
			'n/exports-style': ['error', 'exports'],
			'n/no-missing-import': ['error', { tryExtensions: ['.js', '.ts'] }],
		},
	},

	// TypeScript-specific config
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: process.cwd(),
			},
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
		},
		rules: {
			...sharedRules,
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
		},
	},

	// JSDoc configurations
	{
		files: ['**/*.js', '**/*.ts'],
		plugins: {
			jsdoc,
		},
		settings: {
			definedTags: ['format'],
		},
		rules: {
			'jsdoc/require-description': 'warn',
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

	// Plugins
	tseslint.configs.recommended,
	pluginSecurity.configs.recommended,
	pluginNode.configs['flat/recommended'],
	pluginImport.flatConfigs.recommended,
	pluginPrettier,
	configPrettier,
	jsdoc.configs['flat/recommended'],
]);
