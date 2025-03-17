import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://emailtracer-backend.onrender.com',
        changeOrigin: true,
        secure: true,
        ws: true, // Ensure WebSocket support
      },
    },
  },
});
