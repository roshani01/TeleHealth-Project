
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Local dev only; Vercel uses its own port
  },
  build: {
    outDir: 'dist', // Vercel expects a static folder like "dist"
    emptyOutDir: true,
  },
});
