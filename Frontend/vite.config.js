import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the build goes to the 'dist' folder
  },
  server: {
    port: 3001, // Define the development server port
  },
})
