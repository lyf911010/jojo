import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry:'./src/index.ts',
      name: 'JojoUi',
      fileName:'jojo-ui'
    },
    minify: false,
    rollupOptions:{
    external:[/lodash.*/, 'vue']
    }
  }
})