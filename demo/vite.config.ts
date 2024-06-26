import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

export default defineConfig({
  plugins:[vue()],
  resolve: {
    alias: [
      {
        find: /^@jojo\/(.+)$/,
        replacement: join(__dirname, '..', 'packages', '$1', 'src')
      }
    ]
  }
})