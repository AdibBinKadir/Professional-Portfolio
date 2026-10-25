# Portfolio Starter (React + Node)

A minimal starter for a portfolio site inspired by the provided hero design.

Structure
- `client/` - Vite + React frontend (desktop-first)
- `client-mobile/` - Vite + React frontend (mobile/tablet-first)
- `server/` - Express server (serves API and built frontends with device detection)

Quick start (PowerShell)

```powershell
# 1) Install dependencies for client and server
cd .\portfolio-starter\client; npm install; cd ..\..\portfolio-starter\server; npm install

# 2) Run frontend in dev mode
cd ..\client; npm run dev

# 3) (Optional) Run the server
cd ..\server; npm start
```

Build for production

```powershell
cd .\portfolio-starter\client; npm run build
cd ..\client-mobile; npm run build
# Start the server (serves / from client build and /m from client-mobile build)
cd ..\server; node index.js
```

Notes
- Desktop build is served at `/`; mobile build is served at `/m`. The server will attempt to serve mobile by default on mobile/tablet user-agents.
- Replace placeholder illustration in `client/src/assets/hero-illustration.svg` (or use `hero-illustration.png`).
- Placeholder file routes are served from base-domain **subpaths** (not subdomains):
  - `https://adibkadir.dev/portfolio-html` → `server/static/portfolio-placeholder.html`
  - `https://adibkadir.dev/portfolio-pdf` → `server/static/portfolio-placeholder.pdf`
- For local development, start the server (`npm start`) and open:
  - `http://localhost:4000/portfolio-html`
  - `http://localhost:4000/portfolio-pdf`
