import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('framer-motion'))   return 'vendor-motion';
          if (id.includes('lucide-react'))    return 'vendor-lucide';
          if (id.includes('react-helmet'))    return 'vendor-helmet';
          if (id.includes('node_modules'))    return 'vendor-react';
        },
      },
    },
  },
  server: { port: 5173, host: true },
});
