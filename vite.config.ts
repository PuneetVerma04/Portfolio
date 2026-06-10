import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Deployed on Vercel, which serves the app at the domain root, so base is '/'.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
