import { spawnSync } from 'child_process';

console.log('Checking if package-lock.json is up-to-date...');
const result = spawnSync('pnpm', ['install', '--lockfile-only', '--ignore-scripts'], { encoding: 'utf-8' });

if (result.error) {
    console.error(`Error running npm: ${result.error.message}`);
    process.exit(1);
}