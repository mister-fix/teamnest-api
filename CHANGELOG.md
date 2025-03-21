# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.3] - 2025-03-21 (Community standards docs, and Git hooks)

### Added

- `.github/pull_request_template.md`: Added to standardize pull request descriptions and ensure all necessary information is provided.
- `.github/ISSUE_TEMPLATE/bug_report.md`: Added to provide a template for reporting bugs, ensuring all relevant details are included.
- `.github/ISSUE_TEMPLATE/feature_request.md`: Added to provide a template for requesting new features, ensuring clarity and completeness.
- `docs/CODE_OF_CONDUCT.md`: Added to define community guidelines and expectations for behavior.
- `docs/CONTRIBUTING.md`: Added to provide guidelines for contributing to the project.
- `docs/SECURITY.md`: Added to outline security policies and procedures for reporting vulnerabilities.
- `docs/SUPPORT.md`: Added to provide information on how to get support for the project.
- `.husky/pre-commit`: Added pre-commit hook to run commit message checks on preceding commits.
- "directories" property to `package.json` file.
- `docs/` and `.github/` folders to project structure diagram in `README.md` file.

### Changed

- Updated contributing and code of conduct sections in the `README.md` file.

### Fixed

- **Changelog file**:
  - Updated date format to use `YYYY-MM-DD` (ISO 8601) for consistency.
  - Corrected grammar and punctuation in various entries (e.g., "New Files and folder" → "New files and folders").
  - Standardized capitalization to sentence case for consistency.
  - Rephrased ambiguous entries for clarity (e.g., `package-lock.json` and `CHANGELOG.md` descriptions).
  - Removed redundant information about `package.json` in the `[0.0.2]` section.
  - Fixed broken links under version tags to ensure they point to the correct GitHub comparisons and releases.

## [0.0.2] - 2025-03-21 (Commitlint and CSpell configuration)

### Added

- `commitlint.config.js`: Added to enforce consistent Git commit message formatting using Commitlint.
- `cspell.json`: Added to configure CSpell for spell checking in the project.
- `.cspell/custom-dictionary.txt`: Added to define custom words for spell checking.
- `.husky/_`: Added to configure Husky for managing Git hooks.
- `.husky/commit-msg`: Added to enforce commit message formatting using Commitlint.
- `package-lock.json`: Added to track the exact dependency tree and ensure reproducible builds.
- New files and folders to the project structure diagram in the `README.md` file.

### Fixed

- Punctuation in this CHANGELOG file under the added section of [0.0.1] tag.

### Removed

- `package.json` file from the added section of [0.0.1] tag.

## [0.0.1] - 2025-03-21 (Initialized project and repository)

### Added

- `.editorconfig`: Added to ensure consistent file and code formatting across different editors and IDEs.
- `.gitattributes`: Added to handle line endings and file types in Git, ensuring consistency across platforms.
- `.gitignore`: Added to exclude unnecessary files (e.g., `node_modules`, etc.) from version control.
- `CHANGELOG.md`: Added to document all notable changes to the project.
- `LICENSE`: Added to define the MIT License for open-source usage and distribution.
- `logo-light.svg`: Added as a light variant of the project logo for use in light-themed documents.
- `logo.svg`: Added as the primary project logo for use in documents and branding.
- `README.md`: Added to provide an overview of the project, setup instructions, and links to documentation.

### Fixed

- Updated Node.js version in Spellcheck workflow to match project requirements (bumped up to v20).

[Unreleased]: https://github.com/mister-fix/teamnest-api/compare/v0.0.3...HEAD
[0.0.3]: https://github.com/mister-fix/teamnest-api/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/mister-fix/teamnest-api/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/mister-fix/teamnest-api/releases/tag/v0.0.1