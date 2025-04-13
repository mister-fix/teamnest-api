<!-- @format -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2025-04-13

### Added

- **Project Structure**:
  - Added new `src/` directory with organized architecture:
    - `config/`: Express-specific middleware configurations (Helmet, Cors, etc.).
    - `controllers/`: Route controllers.
    - `middleware/`: Custom middleware (error handling, etc.).
    - `routers/`: Route definitions.
    - `services/`: Business logic.
    - `utils/`: Utility functions.
  - Created `scripts/` directory for build and loader scripts.
  - Added recommended list of extensions for VSCode (`.vscode/extensions.json`).
- **Added TypeScript support**:
  - Introduced `tsconfig.json` and `tsconfig.lint.json`.
  - Configured `index.ts` as the entrypoint for application development.
  - Added Express initialization in the `src/` directory configuring the application and server.
- **Introduced environment configuration files**:
  - `.env.example` for environment variable references.
  - `config/default.js` and `config/production.js` for environment settings.
- **Added runtime dependencies**:
  - `compression`, `config`, `cors`, `dotenv`, `cross-env`, `express`, `http-errors`, `express-rate-limit`, `helmet`,
    `morgan`, `ms`, `pretty-ms`.
- **Added TypeScript type definitions**:
  - `@types/compression`, `@types/config`, `@types/cors`, `@types/express`, `@types/http-errors`, `@types/morgan`,
    `@types/node`.
- **Added development tools**:
  - `nodemon` for automatic restarts.
  - `ts-node`, `tsx`, `ts-patch`, `tsc-alias`, and `tsconfig-paths` for improved TypeScript support.
- Added `nodemon.json` for development environment settings.

### Changed

- **Updated `package.json`**:
  - Specified `dist/index.js` as the main entrypoint (`"main": "dist/index.js"`).
  - Added `build`, `dev`, and `start` scripts.
  - Enhanced `lint-staged` to support TypeScript.
- **Updated linting & formatting**:
  - Updated ESLint and Prettier configurations to support TypeScript.
- Updated project structure to include new files and folders (`tsconfig.json`, `nodemon.json`, `index.ts`, etc.).
- Formatted Commitlint configuration file, spell check and commitlint workflows with Prettier.
- Specified `dist/index.js` as the main entrypoint in the `package.json` file.
- Updated `lint-staged` configuration in the `package.json` file to include TypeScript files.
- Added `frameguard`, `pjson`, and `hsts` to project terms dictionary (`.cspell/project-terms.txt`).

### Fixed

- N/A (No fixes in this release)

### Removed

- N/A (No removals in this release)

## [0.1.0] - 2025-04-10

This is the initial release of the Teamnest API project, including foundational setup and documentation.

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

- N/A (No changes in this release)

### Fixed

- N/A (No fixes in this release)

### Removed

- N/A (No removals in this release)

[Unreleased]: https://github.com/mister-fix/teamnest-api/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/mister-fix/teamnest-api/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/mister-fix/teamnest-api/releases/tag/v0.1.0
