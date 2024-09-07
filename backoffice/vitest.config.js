import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.ts',
    exclude: [
      '**/node_modules/**',  
      '**/dist/**',          
      '**/config/**',  
      '**/*.config.js',      
      '**/*.config.ts',
      './src/icons/**',
    ],
  },
})
