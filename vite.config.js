import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.jsx"),
      name: "personal portfolio",
      fileName: (format) => `index.${format}.js`,
    }
  },
  base: "personal-portfolio"
})
