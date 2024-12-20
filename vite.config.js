import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://weather-app-flax-gamma.vercel.app/',
  plugins: [react()],
})
