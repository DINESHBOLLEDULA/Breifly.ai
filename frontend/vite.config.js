import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This tells the dev server to fall back to index.html for all routes
    // so that React Router (BrowserRouter) can handle client-side navigation
    // without getting a 404 on direct URL access or page refresh.
    historyApiFallback: true,
  },
  preview: {
    // Same fix for `vite preview` (production preview mode)
    historyApiFallback: true,
  },
})
