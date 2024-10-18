import { defineConfig } from 'rolldown-vite'
import react from 'rolldown-vite-plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    server: { port: 8900 /* Should be unique */ },
    plugins: [react()],
  }
})
