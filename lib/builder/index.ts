#!/usr/bin/env node
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises';
import path from 'node:path';

import { build, type Options } from 'tsup';

type PackageExports = {
    [key: string]: {
        import: string;
        require?: string;
        default?: string;
        types?: string;
        browser?: string | Record<string, string>;
    };
};

// Get the current directory of the script
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Grab package.json from current package in order to get
// all entry points defined in "exports" field
const pkgExports: PackageExports = JSON.parse(await fs.readFile(path.join(__dirname, '../package.json'), 'utf-8')).exports;

let entries: string[] = [];
for (const [name, { import: target }] of Object.entries(pkgExports)) {
    if (name.includes('*')) {
        // Handle wildcard entries
        const srcDir = target.replace('*.js', '').replace('dist', 'src');
        const files = await fs.readdir(srcDir);
        entries.push(...files.map((file) => path.resolve(path.join(srcDir, file))));
    } else {
        // Handle specific entries
        entries.push(
            path.resolve(
                target.replace('dist', 'src').replace('.js', '.ts'))
            )
    }
};

const libOptions: Options = {
        clean: true,
        dts: true,
        entry: entries,
        format: [
            'esm',
            'cjs',
            'iife'
        ],
        outDir: 'dist',
        platform: 'node',
        sourcemap: true,
        splitting: false,
        target: 'es2020',
        treeshake: true,
};

const appOptions: Options = {
    clean: true,
    dts: false,
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    outDir: 'dist',
    platform: 'browser',
    sourcemap: true,
    splitting: true,
    target: 'es2020',
    treeshake: true,
};

// Check if the user has provided a valid command
if (process.argv.length < 3 || (!process.argv[2]?.includes('--lib') && !process.argv[2]?.includes('--app') || !process.argv[2]?.includes('--all'))) {
    console.error('Usage: tsup --lib | --app | --all [--watch]');
    process.exit(1);
}
switch (process.argv[2]) {
    case '--lib':
        if (process.argv.includes('--watch')) {
            libOptions.watch = true;
        }
        console.log('Building library...');
        await build(libOptions);
        console.log('Library build completed successfully!');
        break;
    case '--app':
        if (process.argv.includes('--watch')) {
            appOptions.watch = true;
        }
        console.log('Building application...');
        await build(appOptions);
        console.log('Application build completed successfully!');
        break;
    case '--all':
        if (process.argv.includes('--watch')) {
            console.log('Building library and application in watch mode...');
            libOptions.watch = true;
            appOptions.watch = true;
        }
        await build(libOptions);
        console.log('Library build started in watch mode...');
        await build(appOptions);
        console.log('Application build started in watch mode...');
        break;
    default:
        console.error('Invalid command. Use --lib, --app, or --all (with optional --watch flag for watch mode) to successfully build.');
        process.exit(1);
}