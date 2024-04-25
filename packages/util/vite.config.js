import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'JojouiUtil',
      fileName: 'jojoui-util'
    },
    rollupOptions: {
      external: [/lodash.*/],
    }
  },
  minfy: false
})