# Java Genics LLC — Company Website

Professional company website for [Java Genics LLC](https://javagenics.org), built with Vite, React, TypeScript, Tailwind CSS, and Three.js (React Three Fiber).

## Pages

- **Home** — Hero with subtle 3D animation, value proposition, services and project highlights
- **About** — Mission, team, agile process
- **Services** — Agentic software, cloud infra, migration, accessibility, security
- **Projects** — AI ebooks, Ring Camera apps, accounting automation
- **Contact** — Email and contact form (mailto)
- **Support** — Support channels and monitoring info
- **Privacy Policy** / **Terms of Service**

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deployment

This site deploys automatically to **GitHub Pages** on every push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### First-time setup

1. Go to [Repository Settings → Pages](https://github.com/Zanuah/javagenics-website/settings/pages)
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the workflow builds and deploys within ~2 minutes

The site will be available at `https://zanuah.github.io/javagenics-website/` until a custom domain is configured.

### Custom domain (javagenics.org)

A [`public/CNAME`](public/CNAME) file is included. To point your domain:

1. In GitHub repo **Settings → Pages → Custom domain**, enter `javagenics.org`
2. At your domain registrar, remove Google Sites domain mapping
3. Add DNS records:
   - **A records** for `@` (apex):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME** for `www` → `zanuah.github.io` (optional)
4. Wait for DNS propagation (up to 24 hours)
5. Enable **Enforce HTTPS** in GitHub Pages settings

## Tech stack

- [Vite 6](https://vite.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/) for client-side routing
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [drei](https://github.com/pmndrs/drei) for subtle hero animation

## Contact

**Java Genics LLC**  
San Antonio, Texas  
[requests@javagenics.org](mailto:requests@javagenics.org)
