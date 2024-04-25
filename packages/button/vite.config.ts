import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'JojouiButton',
      fileName: 'jojoui-button'
    },
    minify: false,
    rollupOptions: {
      external: [
        /@jojoui.*/,
        'vue'
      ]
    }
  }
})