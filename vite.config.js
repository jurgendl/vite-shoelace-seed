import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint'

export default defineConfig({
	root: 'src/',
	build: {
		outDir: '../dist/', // Directory for the build
		rollupOptions: {
			input: 'src/vite-shoelace-seed-index.html',
			output: {
				entryFileNames: 'vite-shoelace-seed-index.js',
				chunkFileNames: 'vite-shoelace-seed-index.js',
				/* `assetFileNames` in the Vite configuration specifies the format for naming asset files (such as
				images, fonts, etc.) that are part of the build output. In this case, `[name].[ext]` is used as
				the format, where `[name]` represents the original asset file name and `[ext]` represents the
				original file extension. This configuration ensures that asset files are named based on their
				original names and extensions in the build output. */
				/* add path to the assetFileNames to make sure the assets are copied to the dist folder */
				assetFileNames: 'assets/[name].[ext]',
			}
		},
		// Plugin to rename the index.html in the output
		writeIndex: {
			newFileName: 'vite-shoelace-seed-index.html',
		},
	},
	/*
	resolve: {
	alias: {
	  '@': path.resolve(__dirname, './src'),
	  '@assets': path.resolve(__dirname, './src/assets'),
	  '@components': path.resolve(__dirname, './src/components'),
	  '@layouts': path.resolve(__dirname, './src/layouts'),
	  '@pages': path.resolve(__dirname, './src/pages')
	}
  }
	  */
});
