import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins:[vue()],
  build:{
    lib:{
      entry:'./src/index.ts',
      name:'JojoInput',
      fileName:'jojo-input'
    },
    minify:false,
    rollupOptions: {
      external: [
        /@jojo.*/,
        'vue'
      ]
    }
  }
})