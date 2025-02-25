/**
 * Plop main configuration file.
 * @param {object} plop - The Plop API used to configure generators.
 * @returns {void} - This function does not return any value.
 */
export default function (/** @type {import('plop').NodePlopAPI} */ plop) {
	// Welcome message
	plop.setWelcomeMessage('Select a generator');

	// Registering controller generator
	plop.setGenerator('controller', {
		description: 'generate controller',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'controller name: ',
				validate: function (value) {
					if (/controller/i.test(value)) {
						return 'controller name should not contain the word "controller"';
					}
					return value ? true : 'controller name is required';
				},
			},
			{
				type: 'input',
				name: 'model',
				message:
					'model name (capital case, ex: "User"), leave blank if not needed',
				default: '',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/controllers/{{dashCase name}}-controller.ts',
				templateFile: './plop-templates/controller.hbs',
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
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/middleware/{{dashCase name}}.ts',
				templateFile: './plop-templates/middleware.hbs',
			},
		],
	});

	// Registering model generator
	plop.setGenerator('model', {
		description: 'generate model',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'model name: ',
				validate: (value) => (value ? true : 'model name is required'),
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/models/{{titleCase name}}.ts',
				templateFile: './plop-templates/model.hbs',
			},
		],
	});

	// Registering router generator
	plop.setGenerator('router', {
		description: 'generate router',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'router name:',
				validate: function (value) {
					if (/router/i.test(value)) {
						return 'router name should not contain the word "router"';
					}
					return value ? true : 'router name is required';
				},
			},
			{
				type: 'input',
				name: 'controller',
				message: 'enter the name of the controller (e.g., auth):',
				default: '',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/routes/{{dashCase name}}-router.ts',
				templateFile: './plop-templates/router.hbs',
			},
		],
	});

	// Registering service generator
	plop.setGenerator('service', {
		description: 'generate services file',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'service name: ',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/services/{{dashCase name}}-service.ts',
				templateFile: './plop-templates/service.hbs',
			},
		],
	});

	// Registering utility generator
	plop.setGenerator('utility', {
		description: 'generate utility function file',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'utility name: ',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/utils/{{dashCase name}}.ts',
				templateFile: './plop-templates/util.hbs',
			},
		],
	});
}
