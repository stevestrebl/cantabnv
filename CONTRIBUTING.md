# Contributing to Cambridge Alumni Society of Nevada

Thank you for your interest in contributing. This document explains how to run the project, what we expect from contributions, and where to edit content.

## Development

1. **Clone and install**

   ```bash
   git clone https://github.com/stevestrebl/cantabnv.git
   cd cantabnv
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173). The server reloads when you change files.

3. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

## Code and content

- **Lint and format**: Run `npm run lint` and `npm run format` before submitting. Code must pass ESLint and be formatted with Prettier.
- **Where to edit content**:
  - **Events**: Edit `src/lib/events.ts` to add or change events. The Events page reads from this file.
  - **About / Join copy**: Edit the Svelte page files in `src/routes/about/+page.svelte` and `src/routes/join/+page.svelte`.
  - **Home page**: `src/routes/+page.svelte`.
  - **Site-wide nav and footer**: `src/lib/Header.svelte` and `src/lib/Footer.svelte`.

## Pull requests

- Open a branch, make your changes, and open a PR against the default branch.
- Keep changes focused; separate unrelated edits into different PRs where possible.
- Ensure the project builds (`npm run build`) and passes checks (`npm run check`, `npm run lint`).

## License

Contributions are made under the same license as the project: **GNU GPL v3**. See `LICENSE` for details.
