# Resume App

## Server

This is a simple express service that fronts our chatGPT usage. Uses an in-memory cache for ease -- def don't do this in production...

## App

A create-react app to look like a chat box.

```
personalportfolio

├─ .gitignore
├─ data
│  ├─ Fortune_1000.csv
│  └─ index.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ android-chrome-192x192.png
│  ├─ android-chrome-512x512.png
│  ├─ apple-touch-icon.png
│  ├─ CNAME
│  ├─ favicon-16x16.png
│  ├─ favicon-32x32.png
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ server
│  ├─ .dockerignore
│  ├─ .gitignore
│  ├─ Dockerfile
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ companies.json
│  │  ├─ index.ts
│  │  ├─ resume.ts
│  │  ├─ routes
│  │  │  ├─ post-message-claude.ts
│  │  │  └─ post-message.ts
│  │  ├─ system-message.ts
│  │  └─ utils
│  │     └─ data.ts
│  └─ tsconfig.json
├─ src
│  ├─ app.tsx
│  ├─ common-types.ts
│  ├─ companies.json
│  ├─ components
│  │  ├─ chat-message.tsx
│  │  ├─ chat.tsx
│  │  ├─ company-input.tsx
│  │  ├─ error-modal.tsx
│  │  ├─ help-modal.tsx
│  │  ├─ intro-modal.tsx
│  │  └─ topbar.tsx
│  ├─ index.css
│  ├─ index.tsx
│  ├─ logo.svg
│  ├─ me.jpg
│  ├─ react-app-env.d.ts
│  └─ services.ts
└─ tsconfig.json

```