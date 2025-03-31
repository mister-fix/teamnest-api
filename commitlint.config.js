/**
 * Commitlint main configuration file.
 * For a detailed explanation regarding each configuration property, visit:
 * https://commitlint.js.org/reference/configuration.html.
 */

// Import default commit types from @commitlint/config-conventional
import conventional from "@commitlint/config-conventional";

// Extract the list of conventional commit types
const conventionalTypes = conventional.rules["type-enum"][2];

// Configuration
const Configuration = {
	/**
	 * Resolve and load @commitlint/config-conventional from node_modules.
	 * Referenced packages must be installed
	 */
	extends: ["@commitlint/config-conventional"],
	/**
	 * Resolve and load @commitlint/format from node_modules.
	 * Referenced packages must be installed
	 */
	formatter: "@commitlint/format",
	/**
	 * Any rules defined here will override rules from @commitlint/config-conventional
	 */
	rules: {
		"type-enum": [2, "always", [...conventionalTypes, "wip"]],
		"body-max-line-length": [2, "always", 100],
	},
	/**
	 * Array of functions that return true if commitlint should ignore the given message. To see full list, check https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/is-ignored/src/defaults.ts.
	 * To disable those ignores and run rules always, set `defaultIgnores: false` as shown below.
	 */
	ignores: [(commit) => commit === ""],
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
				description: "please input type:",
			},
		},
	},
	/**
	 * Custom URL to show upon failure.
	 */
	helpUrl:
		"https://github.com/conventional-changelog/commitlint/#what-is-commitlint",
};

export default Configuration;
