import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://www.amanpandya.com',
  vite: {
    plugins: [tailwindcss()],
  },
})
