// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
	base: './', // This ensures assets have relative paths
	build: {
		outDir: 'dist', // output directory
	}
})
