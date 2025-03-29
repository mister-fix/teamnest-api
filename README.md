# Teamnest API

![license](https://img.shields.io/github/license/mister-fix/teamnest-api?color=blue)
![version](https://img.shields.io/github/v/tag/mister-fix/teamnest-api?label=version)
![contributors](https://img.shields.io/static/v1?label=contributors&message=1&color=success)
![repo size](https://img.shields.io/github/repo-size/mister-fix/teamnest-api?color=yellow)
![code size](https://img.shields.io/github/languages/code-size/mister-fix/teamnest-api?color=red)
![files](https://img.shields.io/github/directory-file-count/mister-fix/teamnest-api?color=skyblue)
![stars](https://img.shields.io/github/stars/mister-fix/teamnest-api?style=social)
![watchers](https://img.shields.io/github/watchers/mister-fix/teamnest-api?style=social)

The **Teamnest API** is the backend for **Teamnest**, a staff and task management web application designed for small to medium-sized businesses. Teamnest empowers businesses to efficiently manage their employees, delegate and track task progression, oversee projects, and streamline workflows. This RESTful API powers the core functionality of Teamnest, providing secure and scalable endpoints for user authentication, employee management, task delegation, project tracking, and more.

## 🚀 Getting Started

Follow the steps below to get Teamnest API up and running on your local machine.

### Prerequisites

To ensure that the API works as intended on your local machine, make sure you have the following services running with the recommended versions below:

- [Node.js](https://nodejs.org/en/about/previous-releases) v22.13.1+
- [npm](https://www.npmjs.com/package/npm?activeTab=versions) v10.9.2+

### Clone the Repository

```bash
git clone https://github.com/mister-fix/teamnest-api.git
cd teamnest-api
```

### Install Dependencies

```bash
npm install
```

## 🔧 Configuration

Create a `.env` file in the root directory and add the necessary variables for the API to work:

```ini
HOST=localhost
PORT=3000
```

Included in the project files is a `.env.example` file that you can use as a baseline for your local `.env` file. The example file has all of the variable names configured for the API, feel free to change the provided values to those that you want to use for your local installation.

At minimum, your `.env` file must have the 'HOST' and 'PORT' environment variables set for the API to run.

### Running the API (development mode)

Run the following command to start the API in development mode:

```bash
npm run dev
```

The following will be printed in your terminal indicating that the API has started successfully:

```bash
> teamnest-api@0.1.0 dev
> cross-env NODE_ENV=development nodemon

[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): index.ts config\**\* src\**\*
[nodemon] watching extensions: ts,js,cjs,mjs,json
[nodemon] starting `ts-node ./index.ts`
Server environment: development
Server is listening on: http://localhost:8080
Press CTRL-C to stop
```

## 🧪 Testing

```bash
npm test       # Run tests
```

## 🌐 API Endpoints

| Endpoint | Method | Description       |
| -------- | ------ | ----------------- |
| `/`      | GET    | Root API endpoint |

## 🏗 Project Structure

```ASCII
teamnest-api/
├─ .github/                   # GitHub configurations (Actions workflows, commit linting)
├─ .husky/                    # Git hooks for enforcing commit rules
├─ .vscode/                   # VSCode settings (extensions, workspace configs)
├─ config/                    # Application configuration using 'config' npm package
├─ scripts/                   # Custom scripts (build, deployment automation)
├─ src/                       # Source code for the API
├─ .dockerignore              # Ignore files for Docker builds
├─ .editorconfig              # Code style consistency across editors
├─ .env.example               # Example environment variables
├─ .gitattributes             # Git settings for handling file types
├─ .gitignore                 # Ignore files in Git
├─ .prettierignore            # Ignore files for Prettier
├─ .prettierrc                # Prettier configuration for code formatting
├─ CHANGELOG.md               # Project changelog
├─ commitlint.config.mjs      # Commit message linting rules
├─ Dockerfile                 # Docker image build instructions
├─ fly.toml                   # Fly.io deployment configuration
├─ index.ts                   # Main entry point for the API
├─ LICENSE                    # Project license
├─ nodemon.json               # Hot-reloading configuration for development
├─ package-lock.json          # Locked npm dependencies
├─ package.json               # Project metadata and dependencies
├─ README.md                  # Project documentation
└─ tsconfig.json              # TypeScript compiler configuration
```

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
