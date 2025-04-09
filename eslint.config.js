/**
 * ESLint main configuration file.
 * For a detailed explanation regarding ESLint, visit:
 * https://eslint.org/docs/latest/.
 *
 * @format
 */

import js from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

// Export configuration
export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: globals.es5,
		},
	},

	{
		files: ['**/*.{js,mjs,cjs}'],
		plugins: { js },
		extends: ['js/recommended'],
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
	pluginPrettier,
	configPrettier,
]);
