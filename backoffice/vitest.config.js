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
    coverage: {
      exclude: [
      '**/node_modules/**',  
      '**/dist/**',          
      '**/config/**',  
      '**/*.config.js',      
      '**/*.config.ts',
      '**/*.d.ts',
      'src/icons/**',
      'src/clients/**',
      'src/models/**',
      'src/**/*.test.tsx',
      'src/**/*.spec.tsx',
      '**/tests/**',
      '**/tests/mocks/**'
    ],
    }
  },
})
