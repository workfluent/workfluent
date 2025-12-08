# WorkFluent Project Documentation

Welcome to the **WorkFluent** repository. This document provides a technical overview of the project's structure, technology stack, and setup instructions.

## 🛠 Tech Stack

- **Framework**: [Gatsby 5](https://www.gatsbyjs.com/) (built on React)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Hosting**: GitHub Pages now, hostinger business web plan later 
- **Package Manager**: npm

## 📂 Project Structure

The project is organized as a monorepo-style wrapper containing the main web application.

### Root Directory
- **`site/`**: Contains the source code for the Gatsby application. This is where all development work happens.
- **`.venv/`**: *Optional*. A Python virtual environment, if needed for backend scripts or tooling compatibility.
- **`.vscode/`**: Workspace settings for Visual Studio Code.
- **`README.md`**: This technical documentation file.

### Website Directory (`site/`)

This directory is a standard Gatsby project.

#### `src/` (Source Code)
- **`pages/`**:
  - `index.js`: The main landing page. This single file contains the entire homepage layout, including components for the Hero, Services, Projects, and Contact sections. It handles state for the navbar scroll effect and form interactions.
- **`styles/`**:
  - `global.css`: The global stylesheet. It imports Tailwind directives (`@tailwind base`, etc.) and defines custom global styles like the "scrolling galaxy" background animation and custom scrollbars.

#### `static/` (Public Assets)
- **`images/`**: Stores static assets like project portfolio images. These are served directly at build time.
- **`.nojekyll`**: A critical empty file that prevents GitHub Pages from stripping files starting with underscores (like `_gatsby` folders) during deployment.

#### Configuration Files
- **`gatsby-config.js`**:
  - Configures site metadata (title, description).
  - Registers plugins (`gatsby-plugin-postcss`, `gatsby-plugin-react-helmet`).
  - Sets `pathPrefix` to `/workfluent` for proper GitHub Pages routing.
- **`tailwind.config.js`**:
  - Configures the Tailwind design system, including custom themes, colors, and content paths.
- **`package.json`**:
  - Defines project dependencies and executable scripts (e.g., `develop`, `build`, `deploy`).

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/workfluent/workfluent.git
   cd workfluent
   ```

2. Navigate to the site directory and install dependencies:
   ```bash
   cd site
   npm install
   ```

### Development

Start the local development server:
```bash
npm run develop
```
The site will be running at `http://localhost:8000`.

### Building & Deployment

To build the production static files:
```bash
npm run build
```

To deploy to GitHub Pages (builds and pushes to `gh-pages` branch):
```bash
npm run deploy
```

> **Note**: The deploy script automatically adds the `--prefix-paths` flag to ensure assets load correctly on the subdirectory URL.
