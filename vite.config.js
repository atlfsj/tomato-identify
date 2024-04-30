import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  assetsDir: 'assets',
  //base: '/tomato-identify/dist/',
  base: './',
  server: {
    proxy: {
      '/api': {
        target: 'http://7c705a8f.r2.cpolar.cn', // 产生跨域的地址
        changeOrigin: true
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
