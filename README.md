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

- **User Authentication**: Secure login, registration, and session management using JWT (JSON Web Tokens).
- **Staff Management**: Add, update, and manage employee profiles.
- **Task Management**: Full CRUD operations (Create, Read, Update, Delete) for tasks, projects, and user assignments.
- **Project Organization**: Create and manage projects, assign tasks to users, and track progress.
- **Robust Error Handling**: Centralized error handling for consistent responses.
- **RESTful Endpoints**: Clean and well-documented API endpoints for seamless integration.
- **Database Integration**: Built-in support for MongoDB using Mongoose, with automatic retries on failed database connections.
- **Logging**: Comprehensive logging using a custom logger for tracking API events, errors, and database connections.
- **Rate Limiting & Security**: API security is enhanced with request rate limiting and HTTP header protection (via Helmet).
- **Modular Design**: Clean and modular architecture with clear separation between routes, controllers, services, and utilities.
- **Scheduled Task Retry**: Utility to handle retries for failed tasks with countdown mechanisms.

## Quick Start

Detailed instructions on how to get the API up and running on your local machine and how to access the API on the web are coming soon.

Follow the steps below to get Teamnest API up and running on your local machine or deployed to Fly.io. These quick start instructions assume you have Node.js, NPM, Docker, and the GitHub CLI installed on your machine.

### Clone the Repository

```bash
git clone https://github.com/mister-fix/teamnest-api.git
cd teamnest-api
```

### Install Dependencies

```bash
npm install
```

### Create Local .env file

Using the `.env.example` file as a base, create a `.env` file in the root of the project directory with the environment variables matching the names listed in the `.env.example` file.
Feel free to provide any desired port and host configuration when running the API locally, as well as any secrets for JWT, Bcrypt, and MongoDB.

### Build and Start the API

```bash
npm run build
npm start
```

### Access the API

Once the API is running, you can access it locally at: `http://localhost:{your_port_number}/api`. You can use VSCode extensions like [RestClient](https://marketplace.visualstudio.com/items?itemName=humao.rest-client), [ThunderClient](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client), or [Postman](https://www.postman.com/) to make HTTP requests to the API.

<!-- Alternatively, the API is accessible via the web at: [https://teamnest-api.fly.dev/api](https://teamnest-api.fly.dev/api). This URL provides access to the Teamnest API endpoints, allowing interaction with the API from any web client or tool like Postman or Hoppscotch. -->

## API Documentation

<!-- The API provides the following key endpoints:

- `GET /tasks`: Get a list of all tasks.
- `POST /tasks`: Create a new task.
- `PUT /tasks/:id`: Update an existing task.
- `DELETE /tasks/:id`: Delete a task.
- `POST /auth/register`: Register a new user.
- `POST /auth/verify-email:token`: Verify a user's email address using a token.
- `POST /auth/login`: Login a user and retrieve a JWT token.
- `POST /auth/forgot-password`: Request a password reset link for the user.
- `POST /auth/reset-password/:token`: Reset a user's password using a reset token. -->

Detailed API usage documentation is coming soon.

## Project Structure

```ASCII
teamnest-api/
├─ .cspell/                 # Spellcheck files
├─ .github/                 # GitHub CI/CD workflows and issue templates
├─ .husky/                  # Git hooks for commit checks
├─ .vscode/                 # VSCode settings and extensions
├─ docs/                    # GitHub supporting documents and templates
├─ plop-templates/          # Code generation templates (e.g., controllers, services, etc.)
├─ src/                     # Main source code directory
│  ├─ config/               # Configuration files (e.g., database, environment)
│  ├─ controllers/          # API route handlers
│  ├─ middleware/           # Express middleware functions
│  ├─ models/               # Mongoose models (e.g., Task, User)
│  ├─ routes/               # API routes (e.g., health, users)
│  ├─ utils/                # Utility functions (e.g., retry mechanisms, logger)
│  ├─ app.ts                # Express app setup
├─ .editorconfig            # Editor configuration for consistent coding styles
├─ .env.example             # Example .env file
├─ .gitattributes           # Git attributes for the project
├─ .gitignore               # Git ignore rules for the project
├─ .prettierignore          # Files and directories to ignore for Prettier
├─ .prettierrc              # Prettier configuration for code formatting
├─ CHANGELOG.md             # Changelog for project updates
├─ commitlint.config.mjs    # Commit message linting configuration
├─ cspell.json              # Configuration for spellcheck
├─ eslint.config.mjs        # ESLint configuration for code linting
├─ index.ts                 # Application entry point
├─ LICENSE                  # Project license
├─ logo-light.svg           # Light mode logo for the project
├─ logo.svg                 # Primary logo for the project
├─ nodemon.json             # Nodemon configuration for automatic server restarts
├─ package-lock.json        # Locked versions of dependencies
├─ package.json             # Project metadata and dependencies
├─ plopfile.mjs             # Plop.js configuration for code generation
├─ README.md                # Project documentation
├─ tsconfig.json            # TypeScript project configuration
```

## Installation

Project installation instructions are currently being prepared.

## Built With

List of project dependencies will evolve over time depending on the updates and needs of the project. For a more up to date list,
you can look at the [package.json](./package.json) file's dependencies section for current packages being utilized.

- [TypeScript](https://typescriptlang.org) - A strongly typed programming language that builds on JavaScript.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - A lightweight interpreted programming language.
- [Node.js](https://nodejs.org/) - JavaScript runtime and server environment.
- [Express.js](https://expressjs.com/) - Backend and Node.js framework.
- [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit) - Rate limiting middleware for Express.
- [CORS](https://github.com/expressjs/cors) - Express middleware to handle CORS.
- [Helmet](https://helmetjs.github.io/) - Express middleware to secure.
- [Dotenv](https://www.npmjs.com/package/dotenv) - Loads environment variables from a '.env' file into process.env
- [Winston](https://www.npmjs.com/package/winston) - Log files.
- [Morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware.
- [Plop](https://plopjs.com/) - File and code generator.
- [ESLint](https://eslint.org/) - Tool for identifying and reporting on patterns found in code.
- [Prettier](https://prettier.io/) - Code formatter.
- [Husky](https://typicode.github.io/husky/) - Manage Git hooks.
- [GitHub Actions](https://docs.github.com/en/actions) - CI/CD workflows.

## Author

Created and maintained by [@mister-fix].

## Contributing

Contributions are welcome! Please follow the guidelines outlined in the [CONTRIBUTING.md](./docs/CONTRIBUTING.md) file for details on how to contribute.

## Code of Conduct

Please adhere to our [Code of Conduct](./docs/CODE_OF_CONDUCT.md) when participating in the community.

## Contributors

[@mister-fix] 🐉

## Contact

For any technical project questions or inquiries, send an email [here](mailto:hellostephenwm@gmail.com).

## License

This project is available under [GNU AGPL version 3.0](./LICENSE). You can learn more about open-source licenses here: [choosealicense.com]

## Acknowledgements

- Inspired by modern web application architectures.
- Built with best practices for security and performance in mind.
- Special thanks to the open-source community for their valuable contributions.

## Miscellaneous

- Emojis used in the project markdown files are provided by [@rxaviers], you can [check them out here].
- Badges and shields used in the project markdown files are generated by [img.shields.io].

[@mister-fix]: https://github.com/mister-fix/
[choosealicense.com]: https://choosealicense.com
[@rxaviers]: https://github.com/rxaviers
[check them out here]: https://gist.github.com/rxaviers/7360908
[img.shields.io]: https://img.shields.io/
