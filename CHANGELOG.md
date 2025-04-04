<!-- @format -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2025-04-04

### 🚀 Enhancements

- **Project Structure**:
  - Added new `src/` directory with organized architecture:
    - `config/`: Express-specific middleware configurations (Helmet, Cors, etc.).
    - `controllers/`: Route controllers.
    - `middleware/`: Custom middleware (error handling, etc.).
    - `routers/`: Route definitions.
    - `services/`: Business logic.
    - `utils/`: Utility functions.
  - Introduced `config/` directory for environment-based configurations (`default.js`, `production.js`).
  - Created `scripts/` directory for build and loader scripts.
  - Added `.vscode/` settings (`extensions.json`).

### ✨ Features

- **Added TypeScript support**:
  - Introduced `tsconfig.json` and `tsconfig.lint.json`.
  - Configured `index.ts` as the main application entrypoint.
  - Added Express initialization in `src/app.ts`.
- **Introduced environment configuration files**:
  - `.env.example` for environment variable references.
  - `config/default.js` and `config/production.js` for environment settings.

### 📦 Dependencies

- **Added runtime dependencies**:
  - `compression`, `config`, `cors`, `dotenv`, `express`, `express-rate-limit`, `helmet`, `morgan`, `ms`, `pretty-ms`.
- **Added TypeScript type definitions**:
  - `@types/compression`, `@types/config`, `@types/cors`, `@types/express`, `@types/helmet`, `@types/morgan`, and `@types/node`.
- **Added development tools**:
  - `nodemon` for automatic restarts.
  - `ts-node`, `tsx`, `ts-patch`, `tsc-alias`, and `tsconfig-paths` for improved TypeScript support.

### 🛠️ Configuration Updates

- **Updated `package.json`**:
  - Specified `index.ts` as the main entrypoint (`"main": "index.ts"`).
  - Added `build`, `typecheck`, `validate`, `dev`, and `start` scripts.
  - Enhanced `lint-staged` to support TypeScript (`tsc --noEmit`).
- Added `nodemon.json` for development environment settings.

### 🔃 Changes

- **Updated linting & formatting**:
  - Updated ESLint configuration to support TypeScript.
  - Disabled spacing in import groups enforcement in ESLint (leave functionality to Prettier).
  - Added `@cspell/dict-node`, `@cspell/dict-typescript` dictionaries in the `cspell.json` file.
  - Added project terms to corresponding CSpell dictionary (`.cspell/project-terms.txt`).

## [config/stable] - 2024-04-01

### Added

- **Git Hooks**:
  - `.husky/commit-msg`: Added to check commit message format with Commitlint.
  - `.husky/pre-commit`: Added to lint, format, and spell check staged files.
- **Linting & Formatting**:
  - `.prettierignore` and `.prettierrc` for Prettier configuration.
  - `eslint.config.js`: Added ESLint configuration for code problem and syntax checking.
  - `commitlint.config.js`: Added to enforce consistent Git commit message formatting using Commitlint.
  - `cspell.json`: Configuration for code and documentation spell checking.
  - `.cspell/dependency-names.txt`: Dictionary with names of dependencies that CSpell doesn't recognize.
  - `.cspell/project-terms.txt`: Dictionary with project specific terms.
- **CI/CD & Automation**:
  - `.github/workflows/commitlint.yml`: Added workflow for pushed commit message linting.
  - `.github/workflows/spellcheck.yml`: Added workflow to check for spelling errors on pushed commits.
  - `.github/workflows/lint.yml`: Added to automate ESLint and Prettier checks on the repository.
  - `.github/settings.yml`: Added command to auto-delete logs from action runs after 90 days.
- **Project Infrastructure**:
  - `.editorconfig`: Added to ensure consistent file and code formatting across different editors and IDEs.
  - `.gitattributes`: Added to handle line endings and file types in Git, ensuring consistency across platforms.
  - `.gitignore`: Added to exclude unnecessary files (e.g., `node_modules`, etc.) from version control.
  - `.npmrc`: Added config settings for the `npm` CLI.
- **Project Metadata**:
  - `logo-light.svg`: Added as a light variant of the project logo for use in light-themed documents.
  - `logo.svg`: Added as the primary project logo for use in documents and branding.
  - `package-lock.json`: Added to track the exact dependency tree and ensure reproducible builds.
  - `package.json`: Added project metadata, installed development dependencies, and various scripts.
- **Documentation**:
  - `LICENSE`: Added open-source [project license](./LICENSE) MIT License.
  - `CHANGELOG.md`: Added to document all notable changes to the project.
  - `README.md`: Added to provide an overview of the project.

### Changed

- Updated `.npmrc` settings.
- Commented out `omit = dev` setting in `.npmrc` file to fix empty node_modules folder on `npm install`.
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
- Commitlint workflow dependencies
- `.npmrc` configuration for `node_modules`

### Refactor

- Commitlint configuration file to adhere to ESM syntax.

[Unreleased]: https://github.com/mister-fix/teamnest-api/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/mister-fix/teamnest-api/compare/config/stable...v0.1.0
[config/stable]: https://github.com/mister-fix/teamnest-api/releases/tag/config/stable
