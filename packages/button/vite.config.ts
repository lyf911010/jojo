import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins:[vue()],
  build:{
    lib:{
      entry:'./src/index.ts',
      name:'JojoButton',
      fileName:'jojo-button'
    },
    minify:false,
    rollupOptions:{
      external:[
        /@jojo.*/,
        'vue'
      ]
    }
  }
})