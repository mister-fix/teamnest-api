/** @format */
import { execSync } from 'node:child_process';
import console from 'node:console';
import { existsSync, rmSync } from 'node:fs';

/** @format */

const distPath = './dist';

// Delete dist folder if it exists
if (existsSync(distPath)) {
	console.log('🗑️ Deleting existing dist folder...');
	rmSync(distPath, { recursive: true, force: true });
}

// Run TypeScript compiler
console.log('🏗️ Building project...');
execSync('tsc --project tsconfig.json && tsc-alias -p tsconfig.json', {
	stdio: 'inherit',
});
