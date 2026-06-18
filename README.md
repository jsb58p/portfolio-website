# Portfolio Website (React + Vite)

## File architecture

```
portfolio-website/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── resume.pdf       (add your own; linked from Nav.jsx)
│   └── CNAME             (add only if using a custom domain)
├── src/
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

## Setup

```
npm install
npm run dev
```

## Build

```
npm run build
```

Output goes to `dist/`.

## Deploy (GitHub Pages)

1. Push this repository to GitHub on branch `main`.
2. Repository Settings → Pages → Source → "GitHub Actions".
3. `.github/workflows/deploy.yml` builds and publishes `dist/` on every push to `main`.
4. For a custom domain: add a `CNAME` file containing the domain to `public/`, set it again in Settings → Pages → Custom domain, and configure DNS records per https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site.
5. For a project site (`https://yourusername.github.io/repository-name`) with no custom domain, set `base: '/repository-name/'` in `vite.config.js`.
