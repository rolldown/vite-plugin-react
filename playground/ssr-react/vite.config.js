import { defineConfig } from 'rolldown-vite'
import react from 'rolldown-vite-plugin-react'

export default defineConfig({
  server: { port: 8907 /* Should be unique */ },
  plugins: [react()],
  build: {
    minify: false,
  },
})
