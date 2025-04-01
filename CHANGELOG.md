<!-- @format -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### 2024-04-01 (Further Project Configurations)

#### Added

- **Commitlint Enhancements**:
  - New commit type `deps` for dependency-related commits.
  - Interactive prompt with emoji support and detailed descriptions.
  - Footer validation rules (`footer-max-line-length`, `footer-leading-blank`).
  - Custom ignore patterns for `WIP:` and `[skip ci]` commits.
- `.github/settings.yml`: Added command to auto-delete logs from action runs after 90 days.
- `.github/workflows/lint.yml`: Added to automate ESLint and Prettier checks on the repository.
- `.husky/pre-commit`: Added to lint, format, and spell check staged files.
- `.prettierignore` and `.prettierrc` for Prettier configuration.
- `eslint.config.js`: Added ESLint configuration for code problem and syntax checking.
- Lint and formatting scripts in the `package.json` file.
- Lint-staged configuration in `package.json` file.

#### Changed

- Updated project terms dictionary to include 'ianvs' (`.cspell/project-terms.txt`).
- Formatted README, CHANGELOG, spell check and commitlint workflows with Prettier.
- Updated project structure in `README.md` to include ESLint and Prettier files.
- **Stricter validation rules**:
  - Enforced lowercase for types and scopes (`type-case`, `scope-case`).
  - Banned specific subject cases (`sentence-case`, `pascal-case`, etc.).
  - Added warning-level enforcement for blank lines in body/footer.
- Improved help URL and TypeScript support via JSDoc.

### Fixed

- [Unreleased] link in this CHANGELOG file.

### 2024-03-31 (Initial Project Setup)

#### Added

- `.cspell/dependency-names.txt`: Added custom CSpell dictionary with list of dependency names.
- `.cspell/project-terms.txt`: Added custom CSpell dictionary with project terms.
- `.github/workflows/commitlint.yml`: Added workflow for pushed commit message linting.
- `.github/workflows/spellcheck.yml`: Added workflow to check for spelling errors on pushed commits.
- `.husky/commit-msg`: Added to check commit message format with Commitlint.
- `.editorconfig`: Added to ensure consistent file and code formatting across different editors and IDEs.
- `.gitattributes`: Added to handle line endings and file types in Git, ensuring consistency across platforms.
- `.gitignore`: Added to exclude unnecessary files (e.g., `node_modules`, etc.) from version control.
- `.npmrc`: Added config settings for the `npm` CLI.
- `CHANGELOG.md`: Added to document all notable changes to the project.
- `commitlint.config.js`: Added to enforce consistent Git commit message formatting using Commitlint.
- `cspell.json`: Added to configure CSpell for project spell checking.
- `LICENSE`: Added open-source [project license]('./LICENSE) MIT License for usage and distribution.
- `logo-light.svg`: Added as a light variant of the project logo for use in light-themed documents.
- `logo.svg`: Added as the primary project logo for use in documents and branding.
- `package-lock.json`: Added to track the exact dependency tree and ensure reproducible builds.
- `package.json`: Added project metadata, installed development dependencies, and various scripts.
- `README.md`: Added to provide an overview of the project.

#### Changed

- Updated `.npmrc` settings.
- Commented out `omit = dev` setting in `.npmrc` file to fix empty node_modules folder on `npm install`.

#### Fixed

- Fixed Commitlint workflow by ensuring proper installation of required dependencies.
- Installed missing dependencies for Commitlint (`package.json`, `package-lock.json`).

#### Refactor

- Commitlint configuration file to adhere to ESM syntax.

[Unreleased]: https://github.com/mister-fix/teamnest-api/compare/main%40%7B1day%7D...HEAD
