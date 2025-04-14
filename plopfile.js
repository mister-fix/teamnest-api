/** @format */

export default function (/** @type {import('plop').NodePlopAPI} */ plop) {
	// Welcome message
	plop.setWelcomeMessage(
		'Use this to generate new controllers, middleware, routers, services, or utility files.\nAll generators except for "file" will have a ".ts" file extension.\n'
	);

	// Registering empty file generator
	plop.setGenerator('file', {
		description: 'Generate empty source code files',
		prompts: [
			{
				type: 'input',
				name: 'fileName',
				message: 'Enter the file name (with extension): ',
				validate: (value) => (value ? true : 'File name is required'),
			},
			{
				type: 'list',
				name: 'directory',
				message: 'Where do you want to place the file?',
				choices: [
					{ name: 'Inside root', value: './' },
					{ name: 'Inside src', value: './src/' },
					{ name: 'Inside src config', value: './src/config/' },
					{ name: 'Inside controllers', value: './src/controllers/' },
					{ name: 'Inside libs', value: './src/libs/' },
					{ name: 'Inside middlewares', value: './src/middlewares/' },
					{ name: 'Inside routers', value: './src/routers/' },
					{ name: 'Inside services', value: './src/services/' },
					{ name: 'Inside utils', value: './src/utils' },
				],
			},
		],
		actions: [
			{
				type: 'add',
				path: '{{directory}}{{fileName}}',
				templateFile: '',
			},
		],
	});

	// Registering controller generator
	plop.setGenerator('controller', {
		description:
			'Generate controller files (do not include file extension when providing name)',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Controller name: ',
				validate: (input) => {
					if (/[_\-\s]/.test(input)) {
						return 'Name must be one word';
					}

					if (/controller/i.test(input)) {
						return 'Name cannot contain "middleware" in it';
					}

					if (!/^[a-z]+$/.test(input)) {
						return 'Name must be lowercase and contain only letters';
					}

					return input ? true : 'Controller name is required';
				},
			},
			{
				type: 'input',
				name: 'description',
				message: 'Controller purpose: ',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/controllers/{{lowerCase name}}.controller.ts',
				templateFile: './templates/plop/controller.hbs',
			},
		],
	});

	// Registering middleware generator
	plop.setGenerator('middleware', {
		description: 'generate middleware',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'file name: ',
				validate: (input) => {
					if (/[_\-\s]/.test(input)) {
						return 'Name must be one word';
					}

					if (/middleware/i.test(input)) {
						return 'Name cannot contain "middleware" in it';
					}

					if (!/^[a-z]+$/.test(input)) {
						return 'Name must be lowercase and contain only letters';
					}

					return input ? true : 'Middleware name is required';
				},
			},
			{
				type: 'input',
				name: 'description',
				message: 'Middleware purpose: ',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/middleware/{{dashCase name}}.middleware.ts',
				templateFile: './templates/plop/middleware.hbs',
			},
		],
	});

	// Registering router generator
	plop.setGenerator('router', {
		description: 'Generate router file',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Router name (e.g., "user", "auth", etc.):',
				validate: (input) => {
					if (/[_\-\s]/.test(input)) {
						return 'Name must be one word';
					}

					if (/router/i.test(input) || /routes/i.test(input)) {
						return 'Name cannot contain "router/routes"';
					}

					if (!/^[a-z]+$/.test(input)) {
						return 'Name must be lowercase and contain only letters';
					}

					return input ? true : 'Router name is required';
				},
			},
			{
				type: 'input',
				name: 'description',
				message: 'Router purpose: ',
			},
			{
				type: 'confirm',
				name: 'controller',
				message: 'Will this router use a controller?',
				default: true,
			},
			{
				when: (answers) => answers.controller,
				type: 'input',
				name: 'controllerName',
				message: 'Controller name: ',
				default: (answers) => answers.name,
			},
			{
				when: (answers) => answers.controller,
				type: 'checkbox',
				name: 'methods',
				message: 'Select HTTP methods needed:',
				choices: [
					{ name: 'GET', value: 'get' },
					{ name: 'POST', value: 'post' },
					{ name: 'PUT', value: 'put' },
					{ name: 'PATCH', value: 'patch' },
					{ name: 'DELETE', value: 'delete' },
				],
			},
		],
		actions: (data) => {
			if (data.controller && data.methods) {
				data.endpoints = data.methods.map((method) => ({
					method,
					// methodName: method,
					path: '/',
				}));
			}

			return [
				{
					type: 'add',
					path: 'src/routers/{{dotCase name}}.routes.ts',
					templateFile: 'templates/plop/router.hbs',
				},
			];
		},
	});

	// Registering service generator
	plop.setGenerator('service', {
		description: 'Generate service files',
		prompts: [
			{
				type: 'input',
				name: 'serviceName',
				message: 'Service name (e.g., "user", "auth", etc.):',
				validate: (input) => {
					if (/service/i.test(input) || /services/i.test(input)) {
						return 'Name should not contain "service" or "services"';
					}

					if (/[_\-\s]/.test(input)) {
						return 'Name must be one word';
					}

					if (!/^[a-z]+$/.test(input)) {
						return 'Name must be lowercase and contain only letters';
					}

					return input ? true : 'Service name is required';
				},
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/services/{{dotCase serviceName}}.service.ts',
				templateFile: 'templates/plop/service.hbs',
			},
		],
	});

	// Registering utility generator
	plop.setGenerator('utility', {
		description: 'Generate utility files',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Utility name: ',
				validate: (input) => {
					if (/utility/i.test(input) || /utils/i.test(input)) {
						return 'Name cannot contain "utility/utils" in it';
					}

					if (!/^(?=[a-z])[a-z\s]+$/.test(input)) {
						return 'Name must be lowercase';
					}

					if (/[_\-\s]/.test(input)) {
						return 'Name must be one word';
					}

					return input ? true : 'Utility name is required';
				},
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/utils/{{name}}.util.ts',
				templateFile: 'templates/plop/utility.hbs',
			},
		],
	});
}
