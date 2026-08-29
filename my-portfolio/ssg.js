import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { build as viteBuild } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, 'dist')
const manifestPath = path.join(distDir, '.vite', 'manifest.json')
const siteUrl = 'https://www.amanpandya.life'

const routes = [
  { path: '/', title: 'Aman Pandya | Home', description: 'Portfolio of Aman Pandya', output: 'index.html', relativePath: '' },
  { path: '/about/', title: 'About | Aman Pandya', description: 'About Aman Pandya', output: path.join('about', 'index.html'), relativePath: '..' },
  { path: '/blogs/', title: 'Blogs | Aman Pandya', description: 'Blog posts by Aman Pandya', output: path.join('blogs', 'index.html'), relativePath: '..' },
  { path: '/projects/', title: 'Projects | Aman Pandya', description: 'Projects by Aman Pandya', output: path.join('projects', 'index.html'), relativePath: '..' },
]

const analyticsScript = '<script defer src="https://cloud.umami.is/script.js" data-website-id="9894278a-f5f1-4080-872b-aeb3673d99d8"></script>'

async function readManifest() {
  try {
    const content = await fs.readFile(manifestPath, 'utf8')
    return JSON.parse(content)
  } catch {
    throw new Error(`Cannot read manifest at ${manifestPath}. Run "bun run build" first.`)
  }
}

function makeHtml({ title, description, body, assets, relativePath, routePath }) {
  const canonicalUrl = `${siteUrl}${routePath}`;
  const structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aman Pandya',
    jobTitle: 'Software Development Engineer 2',
    url: siteUrl,
    worksFor: {
      '@type': 'Organization',
      name: 'AgriChain',
      url: 'https://agrichain.com/',
    },
    sameAs: [
      'https://github.com/thesparkvision',
      'https://peerlist.io/amanpandya828',
      'https://twitter.com/sherlockd828',
    ],
  });
  const cssLinks = (assets.css || []).map((href) => {
    const cssPath = relativePath ? `${relativePath}/${href}` : `/${href}`;
    return `<link rel="stylesheet" href="${cssPath}">`;
  }).join('\n    ');
  const scriptTags = assets.file ? `<script type="module" src="${relativePath ? `${relativePath}/${assets.file}` : `/${assets.file}`}"></script>` : '';

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script>document.documentElement.classList.add('js')</script>
        <title>${title}</title>
        <meta name="author" content="Aman Pandya" />
        <meta name="description" content="${description}" />
        <link rel="canonical" href="${canonicalUrl}" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${description}" />
        <meta property="og:url" content="${canonicalUrl}" />
        <meta property="og:site_name" content="Aman Pandya" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:description" content="${description}" />
        <script type="application/ld+json">${structuredData}</script>
        <link rel="icon" href="${relativePath ? `${relativePath}/assets/sailboat.svg` : '/assets/sailboat.svg'}" type="image/svg+xml" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=SN+Pro:wght@400;500;600;700&display=swap" />
        ${cssLinks}
        ${analyticsScript}
      </head>
      <body>
        <div id="root">${body}</div>
        ${scriptTags}
      </body>
    </html>
  `;
}


async function compileServerEntry() {
  const ssrDir = path.resolve(__dirname, '.ssr')
  await viteBuild({
    configFile: path.resolve(__dirname, 'vite.config.js'),
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: ssrDir,
      emptyOutDir: true,
      rollupOptions: {
        input: path.resolve(__dirname, 'src/entry-server.jsx'),
      },
    },
  })

  const ssrEntry = path.join(ssrDir, 'entry-server.js')
  const imported = await import(pathToFileURL(ssrEntry).href)
  return imported.render
}

async function generate() {
  const manifest = await readManifest()
  const mainAssets = manifest['index.html']
  if (!mainAssets) {
    throw new Error('index.html entry not found in manifest.')
  }

  const render = await compileServerEntry()

  for (const route of routes) {
    const html = makeHtml({
      title: route.title,
      description: route.description,
      body: render(route.path),
      assets: mainAssets,
      relativePath: route.relativePath,
      routePath: route.path,
    })

    const outputFile = path.join(distDir, route.output)
    await fs.mkdir(path.dirname(outputFile), { recursive: true })
    await fs.writeFile(outputFile, html, 'utf8')
    console.log(`Generated ${route.path} -> ${route.output}`)
  }

  const sitemap = routes.map(route => `  <url><loc>${siteUrl}${route.path}</loc></url>`).join('\n')
  await fs.writeFile(
    path.join(distDir, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap}\n</urlset>\n`,
    'utf8',
  )
  await fs.writeFile(
    path.join(distDir, 'robots.txt'),
    `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`,
    'utf8',
  )
}

generate().catch((error) => {
  console.error(error)
  globalThis.process.exit(1)
})
