import { defineConfig } from 'astro/config'
import { satteri } from '@astrojs/markdown-satteri'
import figureCaptionPlugin from './src/lib/satteri-figure-captions.js'

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://www.amanpandya.com',
  markdown: {
    processor: satteri({ hastPlugins: [figureCaptionPlugin] }),
  },
})
