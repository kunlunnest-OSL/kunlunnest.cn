import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 启用生产环境优化
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // 移除console
        drop_debugger: true,
      },
    },
    // 代码分割优化
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion', 'gsap', '@studio-freight/lenis'],
        },
      },
    },
    // 生成更小的chunk
    chunkSizeWarningLimit: 1000,
  },
  // 开发服务器优化
  server: {
    hmr: {
      overlay: true,
    },
  },
})
