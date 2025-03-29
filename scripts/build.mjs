import { execSync } from 'child_process';
import { existsSync, rmSync } from 'fs';

const distPath = './dist';

// Delete dist folder if it exists
if (existsSync(distPath)) {
	console.log('🗑️ Deleting existing dist folder...');
	rmSync(distPath, { recursive: true, force: true });
}

// Run TypeScript compiler
console.log('🏗️ Building project...');
execSync('tspc', { stdio: 'inherit' });
