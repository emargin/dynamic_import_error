import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  build: {
    target: 'esnext' //browsers can handle the latest ES features
  }
})
