# Wallet App PWA

A mobile-first wallet/cards/statistics Progressive Web App built with **Vue 3**, **TypeScript**, and **Vite**, configured as a PWA.

This app is intended to be run locally for review and testing. You should be able to clone the repository, install dependencies, and run it without any extra configuration.

---

## Prerequisites

- **Node.js**: v18 or later is recommended
- **Package manager**: `npm` (you can also use `pnpm` or `yarn` if you prefer)

> If you use `pnpm` or `yarn`, adapt the commands accordingly (e.g. `pnpm install`, `yarn dev`, etc.).

---

## 1. Install Dependencies

From the project root (where `package.json` is located), run:

```bash
npm install
```

This will install all required dependencies for the app and its tooling (Vue, Vite, TypeScript, ESLint, etc.).

---

## 2. Run the Project Locally

To start the development server:

```bash
npm run dev
```

Then open the URL shown in the terminal (usually:

```text
http://localhost:5173
```

The development server will automatically reload when you make code changes.

---

## 3. Build & Preview (Optional)

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

This is useful for testing the **PWA behavior** (service worker, icons, install prompts, etc.), since service workers are not active in dev mode.

---

## 4. Linting & Formatting

### Lint

To run the linter:

```bash
npm run lint
```

This checks the codebase (Vue, TypeScript, etc.) for style and quality issues.

### Format

If a formatting script is configured (for example, using Prettier), you can run:

```bash
npm run format
```

If the project does not yet have a `format` script, you can add one in `package.json` or run your formatter directly (e.g. `npx prettier --write .`).

---

## 5. How to Test the UI (Pages & Modals)

To quickly explore the main screens and modal flows:

1. Start the dev server:
   ```bash
   npm run dev
   ```
2. Open the app in your browser.
3. **Use the bottom/footer action buttons** to navigate:
   - Tap/click the **bottom navigation buttons** to move between the primary screens.
   - Some of these action buttons **open modals** (for example: add card, view details, actions on cards or stats).
   - Use these buttons to:
     - Open and close modals
     - Navigate to secondary screens
     - Verify transitions, overlays, and mobile behavior

> **Testing note:** For review, please make sure to:
>
> - Click through all **footer/bottom action buttons**
> - Open / close the various **modals**
> - Navigate between the main pages to confirm that routing and state behave as expected.

---

## 6. PWA Notes

The project is configured as a **PWA** using `vite-plugin-pwa`. In a production build:

- A **service worker** is registered automatically.
- A **web app manifest** is generated with icons and meta data.
- The app can be **installed** on supported browsers (mobile & desktop).

To test PWA capabilities:

1. Run:

   ```bash
   npm run build
   npm run preview
   ```

2. Open the preview URL in Chrome.
3. Open DevTools → **Application** tab:
   - Check **Manifest** (icons, name, theme color).
   - Check **Service Worker** is active.
4. On mobile/desktop, you should see an **“Install app”** or **“Add to Home Screen”** option.

---

## 7. Troubleshooting

- If the dev server does not start, verify your Node version (`node -v`) is ≥ 18.
- If `npm install` fails, try clearing your lockfile and `node_modules`:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
- If lint/format scripts are missing, check `package.json` to confirm script names or adjust the commands in this README.

---

If you follow the steps above, you should be able to clone the repo, install dependencies, and run the project locally without issues.
