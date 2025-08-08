# Personal Website

A personal website built with Astro featuring a landing page and blog posts. This site showcases how to create a fast, modern static website using Astro.

## 📝 Project Overview

This project is a personal website for Pete Shepley, featuring:

- A responsive landing page with personal introduction
- A blog section with sample posts
- Clean, modern design with optimized performance

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── astro.svg
│   ├── components/
│   │   └── Welcome.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── blog/
│   │       ├── getting-started-with-astro.md
│   │       ├── web-development-trends.md
│   │       └── productivity-tips.md
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── BlogPostLayout.astro
│   └── pages/
│       ├── index.astro
│       └── blog/
│           ├── index.astro
│           └── [...slug].astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🔧 Technologies Used

- **[Astro](https://astro.build/)**: The web framework for content-driven websites
- **Astro Content Collections**: For type-safe content management
- **HTML/CSS**: For structure and styling
- **Markdown**: For blog content
- **TypeScript**: For content schema definition

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Visit `http://localhost:4321` in your browser

## 📝 Adding New Blog Posts

To add a new blog post:

1. Create a new `.md` file in the `src/content/blog/` directory
2. Add the frontmatter with title, description, pubDate, tags, and featured flag
3. Write your content in Markdown format

Example frontmatter:

```md
---
title: Your Blog Post Title
description: A brief description of your blog post
pubDate: Month Day, Year
tags: ["Tag1", "Tag2", "Tag3"]
featured: true  # Set to true to display on the home page, defaults to false if omitted
---
```

The `featured` flag determines whether the post appears in the featured section on the home page. If omitted, it defaults to `false`.

## 📚 Learn More

To learn more about Astro, check out the [Astro documentation](https://docs.astro.build).