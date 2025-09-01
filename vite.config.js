import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    host: true,
    port: 5173,
    strictPort: true,

    allowedHosts: ['test02.i-elements.net', 'test02vite.i-elements.net'],
    hmr: {
      host: '0.0.0.0',
      protocol: 'ws',
      port: 5173
    },
    // ★ 追加：/api をPHP側にプロキシ
    proxy: {
      '/api': {
        target: 'http://test02.i-elements.net', // 80番へ転送
        changeOrigin: true,                      // Hostヘッダを書き換え
        // HTTPSで自己署名等なら secure:false を付ける
        // secure: false,
        rewrite: (path) => path.replace(
          /^\/api/,
          '/exp01/12.%E7%94%BB%E5%83%8F%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89' // ← URLエンコード済み
        ),
      },
    },
  },

  base: './',
})
