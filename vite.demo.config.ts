import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Demo-specific Vite config for development and demo builds
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'dist-demo',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html')
			}
		}
	}
});
