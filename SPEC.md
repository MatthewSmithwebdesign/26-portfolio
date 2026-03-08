# Developer Portfolio - Terminal Theme

## Project Overview

- **Project name**: DevTerminal Portfolio
- **Type**: Developer portfolio website with terminal UI
- **Core functionality**: A portfolio that simulates a terminal interface on load, allowing visitors to navigate using terminal commands to view about, projects, skills, and blog
- **Target users**: Potential clients, employers, and fellow developers

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom SCSS for terminal effects
- **Content**: MDX (Markdown + JSX) for easy blog/project management
- **Deployment**: Vercel
- **Email**: Resend (for domain email) or Forward Email

---

## UI/UX Specification

### Terminal Interface

**Layout**
- Full-screen terminal on homepage
- Fixed header with minimal navigation (optional, can be hidden)
- Terminal window with:
  - Title bar (optional, can be styled as retro terminal)
  - Output area (scrollable)
  - Input line with blinking cursor

**Visual Design**
- Background: `#0a0a0a` (near black)
- Primary text: `#00ff00` (matrix green) or `#10b981` (terminal green)
- Secondary text: `#6b7280` (gray for timestamps, hints)
- Accent: `#22c55e` (bright green for success)
- Error: `#ef4444` (red for errors)
- Font: `JetBrains Mono`, `Fira Code`, or `Courier New` (monospace)
- Font size: 14px-16px
- Line height: 1.6

**Terminal Effects**
- Blinking cursor animation
- Typewriter effect for command output
- Scanline effect (subtle CRT overlay, optional)
- Glow effect on text (subtle)

### Pages Structure

1. **Home (Terminal)** - `app/page.tsx`
   - Welcome message with ASCII art logo
   - Available commands list
   - Interactive terminal input

2. **About** - `app/about/page.tsx`
   - Professional bio
   - Career highlights
   - Current role (Senior Drupal Developer)
   - Freelance work

3. **Projects** - `app/projects/page.tsx`
   - Grid of project cards
   - Categories: Drupal, Shopify, WordPress, AI/ML
   - Each card shows: title, description, tech stack, link

4. **Skills** - `app/skills/page.tsx`
   - Technical skills organized by category
   - Languages, Frameworks, Tools, CMS/Platforms

5. **Blog** - `app/blog/page.tsx`
   - List of blog posts (MDX-based)
   - Each post: title, date, excerpt, tags

6. **Blog Post** - `app/blog/[slug]/page.tsx`
   - Full MDX rendered content

---

## Functionality Specification

### Terminal Commands

| Command | Description |
|---------|-------------|
| `help` | Show available commands |
| `about` | Navigate to about page |
| `projects` | Navigate to projects page |
| `skills` | Navigate to skills page |
| `blog` | Navigate to blog |
| `contact` | Show contact information |
| `clear` | Clear terminal |
| `ls` | List available pages |
| `whoami` | Show user info |
| `cat [file]` | Read a file (e.g., `cat readme.md`) |

### Content Management

**Projects** - Add new projects by creating MDX files in `content/projects/`
```mdx
---
title: "Project Name"
description: "Brief description"
tech: ["Drupal", "PHP", "React"]
category: "drupal"
link: "https://example.com"
date: "2024-01-15"
---
```

**Blog Posts** - Add new posts by creating MDX files in `content/blog/`
```mdx
---
title: "Post Title"
date: "2024-01-15"
excerpt: "Brief excerpt"
tags: ["drupal", "php"]
---
```

---

## Content Specification

### About Section Content

**Professional Summary**
- Senior Drupal Developer at enterprise company
- Freelance full-stack developer
- 10+ years experience

**Tech Stack**
- **Languages**: Python, PHP, JavaScript, TypeScript
- **Frontend**: React, Vue.js, Tailwind CSS, SCSS
- **Backend**: Node.js, Python, PHP
- **Databases**: PostgreSQL, MySQL, MongoDB
- **CMS**: Drupal (specialist), Shopify, WordPress
- **AI/ML**: AI integration, machine learning projects

**Services**
- Custom web development
- Drupal development & migration
- E-commerce solutions (Shopify)
- AI integration
- Technical consulting

---

## Domain & Email Configuration

### Vercel Domain Setup
1. Add domain in Vercel dashboard
2. Update GoDaddy nameservers to Vercel
3. Configure A record and CNAME

### Email Options (moving off GoDaddy)
1. **Option A**: Vercel Email (new service) - receive emails
2. **Option B**: Forward Email (forward to Gmail)
3. **Option C**: Resend + Gmail integration

---

## File Structure

```
/app
 
  /page /layout.tsx.tsx (terminal)
  /about/page.tsx
  /projects/page.tsx
  /skills/page.tsx
  /blog
    /page.tsx
    /[slug]/page.tsx
/components
  /Terminal
    Terminal.tsx
    TerminalInput.tsx
    TerminalOutput.tsx
  /Layout
    Header.tsx
    Footer.tsx
  /ui
    Card.tsx
    Button.tsx
/content
  /projects/*.mdx
  /blog/*.mdx
/lib
  /mdx.ts
  /projects.ts
  /blog.ts
/public
  /ascii
```

---

## Acceptance Criteria

1. Terminal loads on homepage with blinking cursor
2. All terminal commands work and navigate correctly
3. Projects display in categorized grid
4. Skills show organized by category
5. Blog posts render from MDX files
6. Easy to add new projects/blogs via MDX files
7. Deploys successfully to Vercel
8. Domain points to Vercel
9. Email forwarding works to Gmail
