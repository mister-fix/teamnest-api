/**
 * Commitlint main configuration file.
 * For a detailed explanation regarding each configuration property, visit:
 * https://commitlint.js.org/reference/configuration.html.
 *
 * @format
 */

// Import conventional settings
import conventional from '@commitlint/config-conventional';

// Extract the list of conventional commit types
const conventionalTypes = conventional.rules['type-enum'][2];

/**
 * Configuration
 * @type { import('@commitlint/types').UserConfig }
 */
const Configuration = {
	// Inherit standard rules from @commitlint/config-conventional
	extends: ['@commitlint/config-conventional'],

	// Use the default formatter for error messages
	formatter: '@commitlint/format',

	// Custom rules
	rules: {
		// Type rules.
		'type-enum': [2, 'always', [...conventionalTypes, 'wip', 'deps']],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],

		// Scope rules
		'scope-case': [2, 'always', 'lower-case'],

		// Subject rules
		'subject-case': [
			2,
			'never',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
		],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],

		// Body rules
		'body-max-length': [2, 'always', 100],
		'body-leading-blank': [1, 'always'],

		// Footer rules
		'footer-max-length': [2, 'always', 100],
		'footer-leading-blank': [1, 'always'],
	},
	// Custom ignore patterns (in addition to commitlint's defaults)
	ignores: [
		// Allow temporary work-in-progress commits
		(commit) => commit.startsWith('WIP:'),
		// Allow CI-skipping commits
		(commit) => commit.includes('[skip ci]'),
	],
	// Keep commitlint's default ignore patterns
	defaultIgnores: true,
	// Custom prompts
	prompt: {
		messages: {
			skip: '(press enter to skip)',
			min: '(%d min chars)',
			max: '(%d max chars)',
		},
		questions: {
			type: {
				description: 'Select commit type:',
				enum: {
					feat: {
						description: 'A new feature',
						title: 'Features',
						emoji: '✨',
					},
					fix: {
						description: 'A bug fix',
						title: 'Bug Fixes',
						emoji: '🐛',
					},
					// ... other types can be added here
				},
			},
			scope: {
				description: 'What is the scope of this change?',
			},
			subject: {
				description: 'Write a short, imperative tense description:',
			},
			body: {
				description: 'Provide a longer description (optional):',
			},
			isBreaking: {
				description: 'Are there any breaking changes?',
			},
			breakingBody: {
				description: 'Describe the breaking changes:',
			},
			footer: {
				description: 'List any issues closed (e.g., "Closes #123"):',
			},
		},
	},
	// Help URL shown when validation fails
	helpUrl:
		'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};

// Export the configuration
export default Configuration;
