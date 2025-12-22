# Engineering & Asset Guidelines

As our team grows, it is crucial to maintain a consistent, predictable codebase. This document outlines the standards for file naming, directory structure, and asset management for the Tiny Web project.

## 1. Directory Structure

### `src/` (Source Code)
- **`components/`**: Atomic UI units that are reused across multiple sections or pages. (e.g., `Button.js`, `Navbar.js`).
- **`sections/`**: High-level page fragments that contain the business logic and layout for a specific part of a page. (e.g., `Hero.js`, `Features.js`).
- **`styles/`**: Global theme variables, CSS resets, and shared utility styles.
- **`hooks/`**: Custom React hooks.
- **`utils/`**: Shared JavaScript utility functions.

### `public/assets/` (Static Assets)
All static assets should be organized by type within themed subdirectories:
- **`brand/`**: Logos, icons, and identity collateral.
- **`images/`**: Photos, illustrations, and static mockups.
- **`videos/`**: Video mockups, background clips, and demos.

## 2. Naming Conventions

### File Naming
- **React Components**: `PascalCase.js` (e.g., `FeatureRow.js`).
- **CSS Files**: Should match the component name or be grouped by concern (e.g., `Hero.css`).
- **Assets**: `kebab-case.ext` (e.g., `hero-demo-video.mp4`). No spaces, no specific build numbers (like `10646`) in filenames.

### Variables & Code
- **Variables / Functions**: `camelCase`.
- **CSS Classes**: `kebab-case` (BEM-lite encouraged, e.g., `hero__title`).

## 3. Best Practices
- **Clean Imports**: Group imports by standard library, local components, and then styles/assets.
- **Self-Documenting Code**: Use descriptive function and variable names rather than generic ones.
- **Asset Optimization**: Always compress images and videos before committing to the repository.

---
*The Tiny App Team*
