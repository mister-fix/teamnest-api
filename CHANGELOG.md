# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **GitHub Actions**: Added `.github/workflows/commitlint.yml` for commit message linting.
- **Husky Hook**: Added `.husky/commit-msg` to enforce commit message rules.
- **VS Code Settings**: Added `.vscode/extensions.json` to recommend extensions.
- **Configuration Files**: Added `config/production.js` and `config/default.js` for environment-based configuration using npm `config` package.
- **Build Script**: Added `scripts/build.mjs` for project build automation.
- **Application Entry**: Added `src/app.ts` as a core application file.
- **Docker & Deployment**:
  - `.dockerignore` to exclude unnecessary files from Docker builds.
  - `Dockerfile` for containerizing the application.
  - `fly.toml` for Fly.io deployment configuration.
- **Editor & Linting**:
  - `.editorconfig` for consistent coding styles.
  - `.prettierignore` and `.prettierrc` for Prettier configuration.
  - `commitlint.config.mjs` for commit message linting.
- **Environment & Version Control**:
  - `.env.example` to provide an environment variable template.
  - `.gitattributes` and `.gitignore` for proper Git handling.
- **Project Metadata**:
  - `LICENSE` to define project licensing.
  - `README.md` for project documentation.
  - `CHANGELOG.md` to track changes.
  - `package.json` and `package-lock.json` for dependencies and scripts.
  - `tsconfig.json` for TypeScript configuration.
  - `nodemon.json` for development workflow automation.

[Unreleased]: https://github.com/mister-fix/teamnest-api/compare/initial-commit...HEAD
