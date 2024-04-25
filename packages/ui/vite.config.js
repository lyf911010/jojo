import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'Jojoui/ui',
      fileName: 'jojoui-ui'
    },
    rollupOptions: {
      external: [
        /@jojoui.*/,
        'vue'
      ]
    }
  },
})