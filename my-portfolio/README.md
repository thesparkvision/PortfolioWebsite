# Aman Pandya portfolio

Static portfolio built with Astro, Tailwind CSS, and Bun.

## Commands

```bash
bun install
bun run dev
bun run build
bun run preview
```

The site is rendered as static HTML. JavaScript is used only for optional enhancements such as theme switching; primary content and navigation do not depend on it.

## Native blog posts

Add one folder per post under `src/content/blog/<year>/<MM-DD>-<title-slug>/`. Keep the article in `index.md` and its images in that post's `images/` folder. The year and month-day prefix make posts easy to browse chronologically in GitHub; the explicit frontmatter `slug` controls the public URL. Astro validates the frontmatter, renders the Markdown to a static HTML page, and includes it on `/blogs/`.

```text
src/content/blog/2020/09-06-one-skill-that-any-professional-should-have/
├── index.md
└── images/
    └── networking.jpg
```

```md
---
title: A useful title
description: A short summary for the writing list and search previews.
publishedAt: 2026-10-03
slug: a-useful-title
readTimeInMinutes: 5
originalSource:
  label: Hashnode
  url: https://example.com/original-post
---

Write the post here using Markdown.
Add local images with relative Markdown paths, for example `![Description](./images/example.jpg)`. To add a visible caption, use the optional Markdown image title: `![Description](./images/example.jpg "Image source: Photographer or publication")`. The blog renderer turns that title into a semantic `<figcaption>`; the alt text remains the image description. Omit the title when the image has no caption.
```

Set `slug` explicitly because posts live in folders with an `index.md` filename. Use lowercase words separated by hyphens. A date prefix such as `2026-10-03-a-useful-title` is supported if you want dated URLs; a plain slug such as `a-useful-title` stays stable if you revise or republish the post. The folder's `MM-DD` prefix is only for organization and does not change the URL. The publication date remains visible on the page either way.
