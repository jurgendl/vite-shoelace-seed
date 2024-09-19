import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		outDir: 'dist', // Directory for the build
		rollupOptions: {
			input: './vite-shoelace-seed-index.html',
			output: {
				entryFileNames: 'vite-shoelace-seed-index.js',
				chunkFileNames: 'vite-shoelace-seed-index.js',
				assetFileNames: 'vite-shoelace-seed-index.[ext]',
			}
		},
		// Plugin to rename the index.html in the output
		writeIndex: {
			newFileName: 'vite-shoelace-seed-index.html',
		},
	},
});
