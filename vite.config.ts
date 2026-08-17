import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      // Directs API requests during local development to any backend server
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin.html'),
        notfound: resolve(__dirname, '404.html'),
        servererror: resolve(__dirname, '500.html')
      }
    },
    outDir: 'dist-vite'
  }
});
