# BHM Energy – Landing Page

Modern, dark-themed landing page for **BHM Energy**, an electrical engineering and fine fixture mounting company from Novi Sad, Serbia.

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Output**: Standalone build (optimized for containerized deployment)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later
- npm, yarn, or pnpm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── public/
│   ├── logo.png                    # Company logo
│   └── images/                     # Service & portfolio images
├── src/
│   ├── app/
│   │   ├── globals.css             # Global styles + Tailwind
│   │   ├── layout.tsx              # Root layout with metadata
│   │   └── page.tsx                # Landing page (all sections)
│   └── components/
│       └── ui/
│           ├── Header.tsx          # Sticky navbar
│           ├── Hero.tsx            # Hero section with CTA
│           ├── Services.tsx        # 4-card services grid
│           ├── Process.tsx         # 4-step timeline
│           ├── Portfolio.tsx       # 6-image portfolio grid
│           ├── Contact.tsx         # Contact form + info
│           └── Footer.tsx          # Footer
├── tailwind.config.ts              # Custom BHM theme
├── next.config.ts                  # Standalone output config
├── package.json
└── tsconfig.json
```

## Deploying to DigitalOcean App Platform

### Option A: Auto-Deploy from GitHub (Recommended)

1. **Push this repo to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - BHM Energy landing page"
   git remote add origin https://github.com/YOUR_USERNAME/bhm-energy.git
   git branch -M main
   git push -u origin main
   ```

2. **Create a new App on DigitalOcean**:
   - Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
   - Click **"Create App"**
   - Select **GitHub** as the source
   - Authorize and select your `bhm-energy` repository
   - DigitalOcean will auto-detect it as a **Next.js** app

3. **Configure Build & Run settings** (usually auto-detected):
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`
   - **HTTP Port**: `3000`
   - **Node.js Version**: `18` or `20`

4. **Deploy**:
   - Click **"Next"** through the settings
   - Choose your plan (Basic plan starts at $5/mo)
   - Click **"Create Resources"**

5. **Automatic Deployments**:
   - Every push to `main` will trigger an automatic rebuild and deploy.

### Option B: Deploy via `doctl` CLI

```bash
# Install the DigitalOcean CLI
# https://docs.digitalocean.com/reference/doctl/how-to/install/

doctl apps create --spec .do/app.yaml
```

Create `.do/app.yaml` if you want declarative config:

```yaml
name: bhm-energy
services:
  - name: web
    github:
      repo: YOUR_USERNAME/bhm-energy
      branch: main
      deploy_on_push: true
    build_command: npm run build
    run_command: npm start
    http_port: 3000
    instance_count: 1
    instance_size_slug: apps-s-1vcpu-0.5gb
    source_dir: /
```

### Environment Variables (Optional)

No environment variables are required for the static landing page. If you add a form backend later, you can set API keys in the DigitalOcean App Platform dashboard under **Settings → App-Level Environment Variables**.

## Customization

### Colors
Edit `tailwind.config.ts` to modify the brand colors:
- `bhm-orange`: Vibrant Orange (#F15A29)
- `bhm-navy`: Deep Navy Blue (#1A365D)
- `bhm-dark`: Background Dark (#0F172A)

### Logo
Replace `/public/logo.png` with your company logo.

### Images
Replace images in `/public/images/` with your own project photos.

## License

© 2026 BHM Energy. All rights reserved.
