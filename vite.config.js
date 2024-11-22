import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Asegura que el servidor sea accesible desde fuera del contenedor
    port: 3000,
    watch: {
      usePolling: true, // Habilita polling para sistemas de archivos compartidos (como Docker)
    },
  },
});
