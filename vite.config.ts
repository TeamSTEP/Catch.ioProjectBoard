import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), tsconfigPaths()],
    resolve: {
        alias: {
            // manually making a alias because Vite does not support @ alias mapping
            '@': path.resolve(__dirname, '/src'),
        },
    },
});
