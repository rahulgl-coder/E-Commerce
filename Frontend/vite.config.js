import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 5173,
    allowedHosts: ['e-commerce-5-kdu1.onrender.com'] // ✅ Add your Render domain here
  }
})
