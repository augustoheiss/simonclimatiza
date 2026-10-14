import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-motion'
            if (id.includes('lucide-react') || id.includes('dompurify')) return 'vendor-ui'
            if (id.includes('react')) return 'vendor-react'
          }
          if (id.includes('src/data/cursoInstalacaoHVAC')) return 'data-instalacao'
          if (id.includes('src/data/cursoManutencaoHVAC')) return 'data-manutencao'
          if (id.includes('src/data/cursoTVRProCO380V')) return 'data-tvr-co'
        },
      },
    },
  },
})
