import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to https://yourusername.github.io (user/organization site)
// or to a custom domain, base should stay '/'.
// If deploying to https://yourusername.github.io/repository-name (project site
// with no custom domain), set base to '/repository-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/',
})
