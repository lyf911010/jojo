import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry:'./src/index.ts',
      name: 'JojoShared',
      fileName:'jojo-shared'
    },
    minify: false,
    rollupOptions:{
    external:[/lodash.*/]
    }
  }
})