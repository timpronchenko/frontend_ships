import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/frontend_ships",
  server: {
    host: "0.0.0.0",
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8000/web",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/"),
      },
      '/tauri-api': {
        target: 'http://localhost:8000/tauri',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tauri-api/, ''),
      },
    },
  },
});