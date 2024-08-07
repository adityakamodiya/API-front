import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // or 'dist' based on your setup
  },
  server: {
    historyApiFallback: true, // Handle client-side routing
  }
})
