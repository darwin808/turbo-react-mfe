import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import federation from '@originjs/vite-plugin-federation';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 3002;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'poc_login',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './page': './src/App.tsx',
      },
      shared: [],
    }),
  ],
  server: {
    port,
  },
  preview: {
    port,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },

  resolve: {
    alias: [
      {
        find: './runtimeConfig',
        replacement: './runtimeConfig.browser',
      },
      // Reference: https://github.com/vercel/turbo/discussions/620#discussioncomment-2136195
      {
        find: '@ui',
        replacement: path.resolve(__dirname, '../../packages/ui/src'),
      },
    ],
  },
});
