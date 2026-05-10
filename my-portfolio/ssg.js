import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { build as viteBuild } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, 'dist')
const manifestPath = path.join(distDir, '.vite', 'manifest.json')

const routes = [
  { path: '/', title: 'Aman Pandya | Home', description: 'Portfolio of Aman Pandya', output: 'index.html', relativePath: '' },
  { path: '/about', title: 'About | Aman Pandya', description: 'About Aman Pandya', output: path.join('about', 'index.html'), relativePath: '..' },
  { path: '/blogs', title: 'Blogs | Aman Pandya', description: 'Blog posts by Aman Pandya', output: path.join('blogs', 'index.html'), relativePath: '..' },
  { path: '/projects', title: 'Projects | Aman Pandya', description: 'Projects by Aman Pandya', output: path.join('projects', 'index.html'), relativePath: '..' },
]

const analyticsScript = '<script defer src="https://cloud.umami.is/script.js" data-website-id="9894278a-f5f1-4080-872b-aeb3673d99d8"></script>'

async function readManifest() {
  try {
    const content = await fs.readFile(manifestPath, 'utf8')
    return JSON.parse(content)
  } catch (error) {
    throw new Error(`Cannot read manifest at ${manifestPath}. Run "npm run build" first.`)
  }
}

function makeHtml({ title, description, body, assets, relativePath }) {
  const cssLinks = (assets.css || []).map((href) => {
    const cssPath = relativePath ? `${relativePath}/${href}` : `/${href}`;
    return `<link rel="stylesheet" href="${cssPath}">`;
  }).join('\n    ');
  const scriptTags = assets.file ? `<script type="module" src="${relativePath ? `${relativePath}/${assets.file}` : `/${assets.file}`}"></script>` : '';

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="author" content="Aman Pandya" />
    <meta name="description" content="${description}" />
    <meta name="keywords" content="Aman,Pandya,Portfolio,Website" />
    <link rel="icon" href="${relativePath ? `${relativePath}/assets/sailboat.svg` : '/assets/sailboat.svg'}" type="image/svg+xml" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat" />
    ${cssLinks}
    ${analyticsScript}
  </head>
  <body>
    <div id="root">${body}</div>
    ${scriptTags}
  </body>
</html>`;
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
    })

    const outputFile = path.join(distDir, route.output)
    await fs.mkdir(path.dirname(outputFile), { recursive: true })
    await fs.writeFile(outputFile, html, 'utf8')
    console.log(`Generated ${route.path} -> ${route.output}`)
  }
}

generate().catch((error) => {
  console.error(error)
  process.exit(1)
})
