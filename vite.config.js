// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path';

export default defineConfig({
	base: './', // This ensures assets have relative paths
	build: {
		outDir: 'dist', // output directory
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				download: resolve(__dirname, 'download.html'),
			},
		},
	}
})
