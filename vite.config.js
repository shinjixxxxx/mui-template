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
          '/exp01/api/' // ← URLエンコード済み
        ),
      },
    },
  },

  base: './',
})
