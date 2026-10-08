# Repository Guidelines

## Project Structure & Module Organization

The application lives in `junk-or-no/` and uses Next.js App Router, React, JavaScript, and Tailwind CSS.

- `app/page.js`: interactive food checker and page sections.
- `app/layout.js`: shared layout and metadata.
- `app/globals.css`: Tailwind import and global styles.
- `lib/foods.js`: food entries and the pure `classifyFood(input)` function.
- `tests/foods.test.js`: classifier tests.

Illustrations currently use inline SVG, emoji, and CSS; there is no dedicated asset directory. Keep classification logic in `lib/` and rendering in `app/`.

## Build, Test, and Development Commands

Use Node.js 20.9 or newer. Run these commands from `junk-or-no/`:

- `npm ci`: install dependencies from the committed lockfile.
- `npm run dev`: start development at `http://localhost:3000`; the server binds to all interfaces.
- `npm test`: run Node's built-in test runner.
- `npm run build`: generate the production static export in `out/`.

Serve `out/` with a static web server when checking production output. The project uses static export, so `next start` is unsuitable.

## Coding Style & Naming Conventions

Match existing code: two-space indentation, semicolons, single-quoted JavaScript strings, and ES module imports/exports. Use PascalCase for React components, camelCase for functions and variables, and kebab-case for CSS classes. Follow App Router filenames such as `page.js` and `layout.js`.

Tailwind runs through PostCSS. No formatter or lint script is configured; keep edits consistent with surrounding code.

## Testing Guidelines

Tests use `node:test` and `node:assert/strict`. Name test files `*.test.js` under `tests/`, with descriptive behavior-based test names. No numerical coverage threshold is configured.

For classifier changes, cover aliases, case and whitespace normalization, empty input, and unknown foods. Preserve whole-name matching: `apple pie` must not match `apple`. Food aliases should be lowercase with single spaces. Run tests and the production build before submitting; check UI changes in a browser at mobile and desktop widths.

## Commit & Pull Request Guidelines

History uses prefixes such as `feat:`, `style:`, and `copy:` followed by a short action, for example `style: add charcoal gradient background`.

Keep commits focused. PR descriptions should explain the resulting behavior, list validation results, link relevant issues when applicable, and include screenshots for visual changes.
