import react from 'rolldown-vite-plugin-react'
import type { UserConfig } from 'rolldown-vite'

const config: UserConfig = {
  server: { port: 8902 /* Should be unique */ },
  mode: 'development',
  plugins: [react()],
  build: {
    // to make tests faster
    minify: false,
  },
}

export default config
