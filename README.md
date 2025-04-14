<!-- @format -->

# <img src="./logo.svg#gh-light-mode-only" alt="teamnest-api logo light" height="40" /><img src="./logo-light.svg#gh-dark-mode-only" alt="teamnest-api logo light" height="40" />

![license](https://img.shields.io/github/license/mister-fix/teamnest-api?color=blue)
![version](https://img.shields.io/github/v/tag/mister-fix/teamnest-api?label=version)
![contributors](https://img.shields.io/static/v1?label=contributors&message=1&color=success)
![repo size](https://img.shields.io/github/repo-size/mister-fix/teamnest-api?color=yellow)
![code size](https://img.shields.io/github/languages/code-size/mister-fix/teamnest-api?color=red)
![files](https://img.shields.io/github/directory-file-count/mister-fix/teamnest-api?color=skyblue)
![stars](https://img.shields.io/github/stars/mister-fix/teamnest-api?style=social)
![watchers](https://img.shields.io/github/watchers/mister-fix/teamnest-api?style=social)

The **Teamnest API** is the backend for **Teamnest**, a staff and task management web application designed for small to
medium-sized businesses. Teamnest empowers businesses to efficiently manage their employees, delegate and track task
progression, oversee projects, and streamline workflows. This RESTful API powers the core functionality of Teamnest,
providing secure and scalable endpoints for user authentication, employee management, task delegation, project tracking,
and more.

## 🚀 Getting Started

Follow the steps below to get Teamnest API up and running on your local machine.

### Prerequisites

To ensure that the API works as intended on your local machine, make sure you have the following services running with
the recommended versions below:

- [Git](https://git-scm.com/downloads): v2.49.0+
- [Node.js](https://nodejs.org/en/about/previous-releases): v22.13.1+
- [npm](https://npmjs.com/package/npm?activeTab=versions): v10.9.2+

### Clone the Repository

Run the following command to clone the repository:

```bash
git clone https://github.com/mister-fix/teamnest-api.git
cd teamnest-api
```

### Install Dependencies

```bash
npm install
```

### Configure Variables

Create a `.env` file in the root of the project directory and add the necessary variables for the API to work:

```ini
HOST=localhost
PORT=5000
PROTOCOL=HTTP
```

Included in the project files is a `.env.example` file that you can use as a baseline for your local `.env` file. The
example file has all of the variable names needed to run the API, but with dummy values, feel free to change provided
values to custom values that you want to use for your local installation.

At minimum, your `.env` file must have `HOST`, `PORT`, and `PROTOCOL` variables set in order for the API to start. The
other variables are needed for once the API is running, such as for authentication, etc.

### Running the API

Run the following command to start the API in development mode:

```bash
npm run dev
```

The following will be printed in your terminal indicating that the API has started successfully:

```bash
> teamnest-api@0.2.0 dev
> cross-env NODE_ENV=development nodemon

[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): index.ts config\**\* src\**\* scripts\**\*
[nodemon] watching extensions: ts,js,json
[nodemon] starting `node --loader ./scripts/loader.js --no-warnings=ExperimentalWarning ./index.ts`
Starting server in development mode
Server is listening at: http://localhost:8080
Press CTRL+C to stop the server
```

To run the API in production mode, you must first compile the project by running the following command:

```bash
npm run build
```

The following will be printed in your terminal indicating that the project build script is running:

```bash
> teamnest-api@0.2.0 build
> node ./scripts/build.js

🗑️ Deleting existing dist folder...
🏗️ Building project...
```

Once complete, the 'dist' folder will appear in the root project directory with the source code compiled into
JavaScript.

To start the project run the following command:

```bash
npm run start
```

The following will be printed in your terminal indicating that the project has started successfully:

```bash
> teamnest-api@0.2.0 start
> cross-env NODE_ENV=production node dist/index.js

Starting server in production mode
Server is listening at: http://localhost:8080
```

## 🏗️ Project Structure

```ASCII
teamnest-api/
├─ .cspell/                   # Custom CSpell dictionaries
├─ .github/                   # GitHub configurations (Actions workflows, commit linting)
├─ .husky/                    # Husky hooks for Git (e.g., pre-commit, pre-push)
├─ .vscode/                   # VSCode settings (extensions, workspace configs)
├─ config/                    # Application configuration using 'config' npm package
├─ scripts/                   # Custom scripts (build, deployment automation)
├─ src/                       # Source code for the API (routes, controllers, services, utils)
├─ .editorconfig              # Code style consistency across different editors/IDEs
├─ .env.example               # Example environment variables for local development
├─ .gitattributes             # Git settings for end-of-line handling, diffs, etc.
├─ .gitignore                 # Specifies intentionally untracked files to ignore in Git
├─ .npmrc                     # Configuration for npm CLI behavior
├─ .nvmrc                     # Node.js version manager
├─ .prettierignore            # Specifies files for Prettier to exclude formatting
├─ .prettierrc                # Prettier configuration for consistent code formatting
├─ CHANGELOG.md               # Project changelog with version history
├─ commitlint.config.js       # Commit message linting rules (used with Husky)
├─ cspell.json                # Custom spell-checking configuration (CSpell)
├─ eslint.config.js           # ESLint configuration using flat config format
├─ index.ts                   # Main entry point for the API (typically sets up and starts the server)
├─ LICENSE                    # Project license (e.g., MIT)
├─ logo-light.svg             # Light mode version of the project logo
├─ logo.svg                   # Primary logo for the project
├─ nodemon.json               # Nodemon configuration for hot-reloading during development
├─ package-lock.json          # Locked npm dependency versions for reproducible installs
├─ package.json               # Project metadata, scripts, and dependency definitions
├─ README.md                  # Project overview, setup instructions, and documentation
├─ tsconfig.json              # Base TypeScript configuration for compiling the project
└─ tsconfig.lint.json         # Extended TS config for type-checking during linting (used by ESLint)
```

## ✏️ Author

Created and maintained by [@mister-fix].

## 👀 Contributors

[@mister-fix](https://github.com/mister-fix/) 🐉

## 📜 License

This project is available under the [MIT](./LICENSE) license. You can learn more about open-source licenses here:
[choosealicense.com](https://choosealicense.com/).

## 🙏 Acknowledgements

- Inspired by modern web application architectures. Special thanks to the open-source community for their valuable
  contributions.
- Thanks to the Node.js and Express.js communities for their excellent documentation and support. Special thanks to the
  Prisma team for creating an amazing ORM.

## ☎️ Contact

For any questions or inquiries, send an email [here](mailto:hellostephenwm@gmail.com).

## 🧶 Miscellaneous

- Thanks to [@rxaviers](https://github.com/rxaviers/) for the emoji's used in this project, you can
  [check them out here](https://gist.github.com/rxaviers/7360908).
- Badges and shields used in the project markdown files are generated by [img.shields.io](https://img.shields.io/).
