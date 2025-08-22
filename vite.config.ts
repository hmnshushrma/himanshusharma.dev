import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Server port (default: 5173)
    port: 3000,
    // Fallback if port already in use
    strictPort: true,
    // Open browser automatically
    // open: true,
    // Enable Hot Module Replacement (default: true)
    hmr: true,
    // Allow network access (for testing on mobile/local network)
    host: true, // equivalent to 0.0.0.0
    // Enable CORS
    cors: true,
    // Proxy setup for API calls (example for /api → backend)
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // your backend server
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // optional
      },
    }
  },
  preview: {
    port: 4173,
    open: true,
  }
})
