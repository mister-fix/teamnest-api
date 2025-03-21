/**
 * Commitlint main configuration file.
 * Referenced packages must be installed.
 */

// Import default commit types from @commitlint/config-conventional
import conventional from '@commitlint/config-conventional';

// Extract the list of conventional commit types
const conventionalTypes = conventional.rules['type-enum'][2];

// Exporting configuration
export default {
	/**
	 * Resolve and load @commitlint/config-conventional from node_modules.
	 */
	extends: ['@commitlint/config-conventional'],
	/**
	 * Resolve and load @commitlint/format from node_modules.
	 */
	formatter: '@commitlint/format',
	/**
	 * Any rules defined here will override rules from @commitlint/config-conventional
	 */
	rules: {
		'type-enum': [2, 'always', [...conventionalTypes, 'wip']],
		// "subject-case": [2, "always", "lower-case"], // Enforce sentence case for the subject
		'body-max-line-length': [2, 'always', 100], // Limit body lines to 100 characters
	},
	/**
	 * Array of functions that return true if commitlint should ignore the given message.
	 * Given array is merged with predefined functions, which consist of matchers like:
	 *
	 * - 'Merge pull request', 'Merge X into Y' or 'Merge branch X'
	 * - 'Revert X'
	 * - 'v1.2.3' (ie semver matcher)
	 * - 'Automatic merge X' or 'Auto-merged X into Y'
	 *
	 * To see full list, check https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/is-ignored/src/defaults.ts.
	 * To disable those ignores and run rules always, set `defaultIgnores: false` as shown below.
	 */
	ignores: [(commit) => commit === ''],
	/**
	 * Whether commitlint uses the default ignore rules.
	 */
	defaultIgnores: true,
	/**
	 * Custom prompt configs
	 */
	prompt: {
		messages: {},
		questions: {
			type: {
				description: 'please input type:',
			},
		},
	},
	/**
	 * Custom URL to show upon failure.
	 */
	helpUrl:
		'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};
