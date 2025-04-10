<!-- @format -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- `.editorconfig`: Configuration to ensure consistent file and code formatting settings across IDEs.
- `LICENSE`: Open-source MIT license document for the project.
- `CHANGELOG.md`: File to track project and source code evolution.
- `README.md`: Document file containing initial project details and information.
- `logo.svg`: Primary project logo file for use across repository documents.
- `logo-light.svg`: Light-mode variant of the project logo.
- `.gitignore`: File to exclude unnecessary files and folders from version control.
- `.gitattributes`: File to ensure consistency on handling line endings and file types in Git.
- `.npmrc`: Added config settings for the `npm` CLI.
- `package-lock.json`: Added to track the exact dependency tree and ensure reproducible builds.
- `package.json`: Added project metadata, installed development dependencies, and various scripts.
- `commitlint.config.js`: Added to enforce consistent Git commit message formatting using Commitlint.
- `.husky/commit-msg`: Added to check commit message format with Commitlint.
- `.husky/pre-commit`: Added to lint, format, and spell check staged files.
- `cspell.json`: Configuration for code and documentation spell checking.
- `.cspell/dependency-names.txt`: Dictionary with names of dependencies that CSpell doesn't recognize.
- `.cspell/project-terms.txt`: Dictionary with project specific terms.
- `.github/workflows/commitlint.yml`: Added workflow for pushed commit message linting.
- `.github/workflows/spellcheck.yml`: Added workflow to check for spelling errors on pushed commits.
- `.github/workflows/lint.yml`: Added to automate ESLint and Prettier checks on the repository.
- `.github/settings.yml`: Added command to auto-delete logs from action runs after 90 days.
- `.prettierignore` and `.prettierrc` for Prettier configuration.
- `eslint.config.js`: Added ESLint configuration for code problem and syntax checking.

[Unreleased]: https://github.com/mister-fix/teamnest-api/compare/main%40%7B1day%7D...HEAD
