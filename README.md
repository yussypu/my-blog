# ✨ My Personal Blog

Built with the [Tailwind Next.js Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog), this is my personal space to share ideas, write about tech, and document what I’m learning.

> Fast. Responsive. Fully customizable. Written in Markdown and powered by Next.js 13, Tailwind CSS, and Contentlayer.

## 🚀 Features

- ✅ Next.js 13 App Directory with React Server Components  
- 📝 Markdown content powered by [Contentlayer](https://www.contentlayer.dev/)  
- 🎨 Fully styled with [Tailwind CSS](https://tailwindcss.com/)  
- 🔍 SEO optimized, with RSS feed and sitemap  
- 🌗 Dark mode toggle  
- 🏷️ Tags, categories, and search  
- 💡 Code syntax highlighting and copy-to-clipboard  
- 🖼️ Image optimization and lazy loading  
- ⚙️ Easily deployable with Vercel  

## 📚 Posts

All blog posts are written in Markdown (`.mdx`) and live in the `content/blog` directory. Frontmatter controls the post metadata:

```md
---
title: "Hello World"
date: "2025-04-08"
tags: ["blog", "welcome"]
draft: false
summary: "This is my first post!"
---
```

## 🛠️ Getting Started

```bash
git clone https://github.com/yourusername/your-blog-repo.git
cd your-blog-repo
pnpm install    # or yarn / npm install
pnpm dev        # starts the dev server
```

Then open [http://localhost:3000](http://localhost:3000) to view your site.

## 🧩 Customization

Make it your own:

- Update site metadata in `data/siteMetadata.ts`
- Add your info in `data/authors/default.mdx`
- Modify layout and components in `components/` and `styles/`
- Replace or add posts in `content/blog/`
- Configure navigation in `data/headerNavLinks.ts`

## 📦 Deploy

Easiest way: **[Deploy to Vercel](https://vercel.com/new/git/external?repository-url=https://github.com/timlrx/tailwind-nextjs-starter-blog)**

Or deploy manually:

```bash
pnpm build
pnpm start
```


## 🙋‍♂️ Contributing / Questions

This project is based on the awesome open-source template by [@timlrx](https://github.com/timlrx). Feel free to fork and modify it for your own use. If you run into issues or have ideas, check out:

- [FAQ](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/FAQ.md)
- [Past issues](https://github.com/timlrx/tailwind-nextjs-starter-blog/issues)
- [Discussions](https://github.com/timlrx/tailwind-nextjs-starter-blog/discussions)

---

> Built with ❤️ using Next.js, Tailwind, and Markdown.
