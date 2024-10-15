import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Design-System/', // Certifique-se de que este caminho corresponda ao caminho do seu repositório
  optimizeDeps: {
    exclude: ['DocsRenderer'], // Excluindo módulos, se necessário
  },
})
