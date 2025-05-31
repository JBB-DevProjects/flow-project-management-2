
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [react()]
  
  // Only add componentTagger in development mode if available
  if (mode === 'development') {
    try {
      const { componentTagger } = require('lovable-tagger')
      plugins.push(componentTagger())
    } catch (error) {
      // lovable-tagger not available, continue without it
      console.warn('lovable-tagger not available')
    }
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
