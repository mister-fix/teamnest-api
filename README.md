# <img src="./logo.svg#gh-light-mode-only" alt="teamnest-api logo light" height="40" /><img src="./logo-light.svg#gh-dark-mode-only" alt="teamnest-api logo light" height="40" />

![license](https://img.shields.io/github/license/mister-fix/teamnest-api?color=blue)
![version](https://img.shields.io/github/v/tag/mister-fix/teamnest-api?label=version)
![contributors](https://img.shields.io/static/v1?label=contributors&message=1&color=success)
![repo size](https://img.shields.io/github/repo-size/mister-fix/teamnest-api?color=yellow)
![code size](https://img.shields.io/github/languages/code-size/mister-fix/teamnest-api?color=red)
![files](https://img.shields.io/github/directory-file-count/mister-fix/teamnest-api?color=skyblue)
![stars](https://img.shields.io/github/stars/mister-fix/teamnest-api?style=social)
![watchers](https://img.shields.io/github/watchers/mister-fix/teamnest-api?style=social)

The **Teamnest API** is the backend for **Teamnest**, a staff and task management web application designed for small to medium-sized businesses. Teamnest empowers businesses to efficiently manage their employees, delegate and track task progression, oversee projects, and streamline workflows. This RESTful API powers the core functionality of Teamnest, providing secure and scalable endpoints for user authentication, employee management, task delegation, project tracking, and more.

## Features

- **User Authentication**: Secure login, registration, and session management using JSON Web Tokens (JWT).
- **OAuth Integration**: Google OAuth integration with Passport.js.
- **Staff Management**: Manage team members, roles, and permissions, add, update, and manage employee profiles.
- **Task Management**: Full CRUD operations (Create, Read, Update, Delete) for tasks, projects, and user assignments.
- **Project Organization**: Create and manage projects, assign tasks to users, and track progress.
- **Error Handling**: Comprehensive error handling with meaningful error messages.
- **RESTful Endpoints**: Clean and well-documented API endpoints for seamless integration.
- **Database Integration**: PostgreSQL database integration using Prisma ORM.
- **Logging**: Detailed logging for debugging and monitoring.
- **Rate Limiting & Security**: API security is enhanced with request rate limiting and HTTP header protection (via Helmet).
- **Modular Design**: Clean and modular architecture with clear separation between routes, controllers, services, and utilities.
- **Scheduled Task Retry**: Automatically retry failed tasks at scheduled intervals.

## Getting Started

Detailed instructions on how to get the API up and running on your local machine and how to access the API on the web are coming soon.

## API Documentation

Detailed documentation of the API are currently being developed and will become available in the future.

## Project Structure

```ASCII
teamnest-api/
├─ .cspell/                 # Configuration for spell-checking using CSpell
├─ .github/                 # GitHub-specific files (e.g., workflows, issue templates)
├─ .husky/                  # Husky hooks for Git (e.g., pre-commit, pre-push)
├─ docs/                    # Project documentation files
├─ .editorconfig            # EditorConfig settings for consistent coding styles
├─ .gitattributes           # Git attributes for handling files (e.g., line endings)
├─ .gitignore               # Specifies files and directories to ignore in Git
├─ .prettierignore          # Files and directories to ignore for Prettier formatting
├─ .prettier                # Prettier configuration for code formatting
├─ CHANGELOG.md             # Record of changes made to the project
├─ commitlint.config.js     # Configuration for commit message linting
├─ cspell.json              # Custom spell-checking configuration
├─ eslint.config.js         # ESLint configuration for JavaScript/TypeScript linting
├─ LICENSE                  # License file for the project
├─ logo-light.svg           # Light mode logo for the project
├─ logo.svg                 # Primary logo for the project
├─ package-lock.json        # Locked versions of dependencies
├─ package.json             # Project metadata and dependencies
├─ README.md                # Project documentation
```

## Contributing

Contributions are welcome! Please follow the guidelines outlined in the [CONTRIBUTING.md](./docs/CONTRIBUTING.md) file for details on how to contribute.

## Code of Conduct

Please adhere to our [Code of Conduct](./docs/CODE_OF_CONDUCT.md) when participating in the community.

## Author

Created and maintained by [@mister-fix].

## Contributors

[@mister-fix] 🐉

## License

This project is available under the [MIT](./LICENSE) license. You can learn more about open-source licenses here: [choosealicense.com].

## Acknowledgements

- Inspired by modern web application architectures. Special thanks to the open-source community for their valuable contributions.
- Thanks to the Node.js and Express.js communities for their excellent documentation and support. Special thanks to the Prisma team for creating an amazing ORM.

## Contact

For any questions or inquiries, send an email [here](mailto:hellostephenwm@gmail.com).

## Miscellaneous

- Emojis used in the project markdown files are provided by [@rxaviers], you can [check them out here](https://gist.github.com/rxaviers/7360908).
- Badges and shields used in the project markdown files are generated by [img.shields.io].

[@mister-fix]: https://github.com/mister-fix/
[choosealicense.com]: https://choosealicense.com
[@rxaviers]: https://github.com/rxaviers
[img.shields.io]: https://img.shields.io/
