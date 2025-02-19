/**
 * Commitlint main configuration file.
 * Referenced packages must be installed.
 */
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
	 * Custom URL to show upon failure.
	 */
	helpUrl:
		'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};
