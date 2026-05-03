# Project Agent Guide: André Correia Portfolio

This document provides essential context and instructions for AI coding agents (like Codex) tasked with maintaining or extending this graphic design portfolio.

## 1. Project Overview
- **Purpose**: A professional portfolio for André Correia, a Graphic Designer & Art Director specializing in technical precision and editorial experimentation.
- **Tone & Aesthetic**: High-impact minimalism, brutalist accents, and "technical-experimental" vibe. Key elements include the "issues_hd" branding, electric blue accents over off-white, and pixelated hover effects.
- **User Experience**: A single-page, high-performance web experience with smooth scroll-snapping, motion-based transitions, and an interactive "DVD Bounce" menu area for discovery.

## 2. Technical Architecture
- **Framework**: React 19 (Functional Components + Hooks).
- **Build Tool**: Vite 6.
- **Core Dependencies**:
  - `motion`: Used extensively for animations (transitions, hover effects, staggered reveals).
  - `tailwindcss 4`: Core styling system.
  - `lucide-react`: UI icons.
- **Folder Structure**:
  - `/src/components`: UI modules (Navigation, ProjectCard, ProjectLookbook, etc.).
  - `/src/constants.ts`: Central source of truth for project data, mockup lists, and social links.
  - `/src/index.css`: Global styles including Tailwind imports and theme variables.
  - `/public`: Static assets (images, PDFs, mockups).
- **Routing**: Single Page Application (SPA). Snap-sections are managed via IDs and scroll-snapping.
- **Styling**: Tailwind utility-first approach. Custom "electric-blue" and "off-white" colors are central to the brand.

## 3. Development Commands
- **Install Dependencies**: `npm install`
- **Local Development**: `npm run dev` (runs on port 3000).
- **Build for Production**: `npm run build`
- **Preview Production Build**: `npm run preview`
- **Linting**: `npm run lint`

## 4. Environment Variables
The following variables are expected in the environment:

| Variable | Required | Safe for Frontend | Description |
| :--- | :--- | :--- | :--- |
| `GEMINI_API_KEY` | Optional | No (Backend) | Used for Gemini AI features via `@google/genai`. |
| `APP_URL` | Optional | Yes | The base URL of the application. |

*Note: In Google AI Studio, these are injected automatically. When moving to Codex/Other platforms, ensure these are mapped appropriately in your CI/CD or `.env` files.*

## 5. Deployment Notes
- **Static Hosting**: This project is ideally suited for static hosting (Vercel, Netlify, GitHub Pages, or Render Static Sites).
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Routing**: Since this is an SPA, if you add sub-routes, ensure your host is configured to redirect all 404s to `index.html`.
- **Render Settings**: If deploying on Render, use the "Static Site" service type.

## 6. Important Constraints for Future AI Agents
- **Visual Continuity**: Maintain the "issues_hd" identity. Do not change colors, fonts (Sans-serif bold), or the pixelation filter logic without explicit instructions.
- **Focused Changes**: Prefer surgical edits to components rather than refactoring the entire layout.
- **Mobile First**: mobile responsiveness is a high priority. Ensure changes do not break the 768px (md) breakpoint behavior.
- **Asset Integrity**: Do not delete files from `/public/images` or `/public/techpacks` unless they are confirmed to be removed from `constants.ts`.
- **Verification**: Always run `npm run build` after styling changes to ensure Tailwind 4 continues to compile correctly.

## 7. Known Issues & Risks
- **Asset Paths**: Asset paths in `constants.ts` are absolute (e.g., `/images/...`). Ensure these files exist in the `/public` directory.
- **Iframe Constraints**: Within AI Studio, some pointer-events and scroll-behaviors might feel different than on a standalone browser. Always test in a "New Tab" when available.
- **Mobile DVD Bounce**: The bounce area logic is sensitive to container dimensions. Be careful when adjusting hero section heights on mobile.

## 8. Suggested First Task for Codex
**Verification & Audit**:
"Codex, please inspect the project structure, verify all dependencies are correctly installed, and perform a dry-run of the build process. Specifically, audit `src/constants.ts` to ensure all listed image paths correspond to actual files in the `/public` directory. Report any potential deployment risks or environment variable misconfigurations before proceeding with functional changes."
