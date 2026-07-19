import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// This config file runs as an ES module under Node, so __dirname is not
// available directly. Rebuilding it from import.meta.url is the
// standard workaround.
const currentDir = path.dirname(fileURLToPath(import.meta.url))

// Standard Vite config for a React + TypeScript project.
// Build output is split automatically by Vite/Rollup per dynamic import,
// which covers the "code splitting" requirement for lazy loaded sections.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Mirrors the "@/*" path in tsconfig.app.json so imports like
      // "@/components/Navbar" resolve the same way in the editor and
      // in the actual Rollup build.
      '@': path.resolve(currentDir, './src'),
    },
  },
  build: {
    // Keep chunks reasonably sized and warn if something balloons
    chunkSizeWarningLimit: 700,
  },
})
