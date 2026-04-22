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
        manualChunks: (id) => {
          // React 相关库
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react-vendor';
            }
            // 动画库
            if (id.includes('framer-motion') || id.includes('gsap') || id.includes('@studio-freight/lenis')) {
              return 'animation-vendor';
            }
          }
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
