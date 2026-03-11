# Cambridge Alumni Society of Nevada Website

Website for the **Cambridge Alumni Society of Nevada**.

This project hosts the public website for the alumni community connecting graduates of the **University of Cambridge living in Nevada**. The site provides information about events, membership, and the alumni network in the region.

Domain: https://cantabnv.org

---

# Tech Stack

This website is built with:

- **SvelteKit**
- **TypeScript**
- **Vite**
- **ESLint**
- **Prettier**

The project is open source under the **GNU GPL v3 license**.

---

# Development Setup

## 1. Clone the repository

```bash
git clone https://github.com/<org-or-user>/cantabnv.git
cd cantabnv
```

## 2. Install dependencies

```bash
npm install
```

## 3. Start the development server

```bash
npm run dev
```

Then open:

```
http://localhost:5173
```

The server will automatically reload when files change.

---

# Project Structure

```
cantabnv/
│
├─ src/
│  ├─ routes/          # Pages
│  ├─ lib/             # Reusable components
│  └─ app.html
│
├─ static/             # Static assets (images, logos)
├─ eslint.config.js
├─ svelte.config.js
├─ vite.config.ts
└─ package.json
```

Key directories:

**`src/routes`**
Defines pages of the site using the SvelteKit routing system.

**`src/lib`**
Reusable components and shared UI.

**`static`**
Images, icons, and other public assets.

---

# Linting and Formatting

Run ESLint:

```bash
npm run lint
```

Format the codebase:

```bash
npm run format
```

Formatting is automatically applied on save if using VS Code / Cursor with the recommended settings.

---

# Building for Production

To create a production build:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

Deployment depends on the chosen SvelteKit adapter.

---

# Contributing

Contributions are welcome.

Please ensure:

- code passes ESLint
- code is formatted with Prettier
- changes are documented where relevant

---

# License

This project is licensed under the **GNU General Public License v3.0**.

See `LICENSE` for details.
