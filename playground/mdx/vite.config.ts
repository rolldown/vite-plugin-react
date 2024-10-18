import { defineConfig } from 'rolldown-vite'
import react from 'rolldown-vite-plugin-react'
import mdx from '@mdx-js/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 8901 /* Should be unique */ },
  plugins: [{ enforce: 'pre', ...mdx() }, react({ jsxInclude: /\.(mdx|md)$/ })],
})
