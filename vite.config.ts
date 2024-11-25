import {defineConfig} from 'vite'
import {resolve} from 'path';

// https://vite.dev/config/
export default defineConfig({
    server: {
        host: '127.0.0.1',
        port: 3000,
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                projects: resolve(__dirname, 'projects/index.html'),
                blog: resolve(__dirname, 'blog/index.html'),
                about: resolve(__dirname, 'about/index.html'),
            }
        }
    },
    plugins: [],
    css: {},
});
