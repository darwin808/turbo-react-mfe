import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import federation from '@originjs/vite-plugin-federation';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remoteViteReactUrl =
  process.env.REMOTE_VITE_REACT_URL || `http://localhost:3001`;

const remoteLogin = process.env.REMOTE_LOGIN_URL || `http://localhost:3002`;

const port = 3000;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'poc_host',
      filename: 'remoteEntry.js',
      // Modules to expose
      remotes: {
        poc_remote_a: `${remoteViteReactUrl}/assets/remoteEntry.js`,
        poc_login: `${remoteLogin}/assets/remoteEntry.js`,
      },
      shared: ['react', 'react-dom'],
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
    minify: true,
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
