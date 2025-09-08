import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/projeto_reviver/', // Nome do seu repositório
  plugins: [
    react(),
    tailwindcss()
  ],
})