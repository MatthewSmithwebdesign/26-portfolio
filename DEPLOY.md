# Deployment Guide

## Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Click "Deploy"

## Domain & Email Setup

### Moving Domain from GoDaddy to Vercel

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Enter your domain (e.g., yourname.com)
   - Vercel will provide nameservers

2. **In GoDaddy:**
   - Go to DNS Management
   - Change nameservers to Vercel's nameservers:
     ```
     ns1.vercel-dns.com
     ns2.vercel-dns.com
     ```

3. **Wait for propagation** (up to 24-48 hours)

### Email Setup (Moving off GoDaddy)

**Option 1: Forward Email (Free)**
- Use [Forward Email](https://forwardemail.net)
- Add MX records in GoDaddy/Vercel pointing to Forward Email
- Emails forward to your Gmail

**Option 2: Vercel Email (New)**
- Go to Vercel → Settings → Email
- Set up email receiving
- Connect to your Gmail

**Option 3: Resend + Gmail**
- Use [Resend](https://resend.com) for sending
- Set up email forwarding to Gmail
- Professional inbox at your domain

## Adding Content

### Add a New Project

Create a new `.mdx` file in `content/projects/`:
```mdx
---
title: "Project Name"
description: "Brief description"
tech: ["React", "Node.js"]
category: "react"
link: "https://example.com"
date: "2024-01-15"
---

# Project Details
Your project description here...
```

### Add a New Blog Post

Create a new `.mdx` file in `content/blog/`:
```mdx
---
title: "Blog Post Title"
date: "2024-01-15"
excerpt: "Brief excerpt"
tags: ["react", "tutorial"]
---

# Your content here...
```

## Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
