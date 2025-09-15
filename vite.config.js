import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/Kani-a/Cardapio-Dogao-Maluco.git', // 👈 troque para o nome do seu repo
})
