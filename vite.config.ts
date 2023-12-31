import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  preview: {
    port: 80080,
  },
  resolve:{
    alias: {
      '@' : fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
