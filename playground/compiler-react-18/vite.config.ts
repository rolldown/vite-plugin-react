import { defineConfig } from 'rolldown-vite'
import react from 'rolldown-vite-plugin-react'

// https://gist.github.com/poteto/37c076bf112a07ba39d0e5f0645fec43

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    server: { port: 8901 /* Should be unique */ },
    plugins: [
      react({
        // babel: {
        //   plugins: [
        //     [
        //       'babel-plugin-react-compiler',
        //       { runtimeModule: 'react-compiler-runtime' },
        //     ],
        //   ],
        // },
      }),
    ],
  }
})
