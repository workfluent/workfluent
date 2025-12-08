# workfluent

This repository is the home for the Workfluent project.

## Tech Stack

- **React**: Core library for building user interfaces
- **Gatsby 5**: Static site generator with reactive site generation
- **Tailwind CSS**: Utility-first CSS framework for styling

## Project Structure

- **`site/`**: The main Gatsby website (React + Tailwind CSS)
- **`.venv/`**: (Optional) Python virtual environment for auxiliary scripts
- **`README.md`**: Project documentation

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Development

```bash
cd site
npm run develop
```

The site will be available at `http://localhost:8000`

### Build

```bash
cd site
npm run build
```

### Deploy

The built site will be in the `site/public` directory, ready for deployment to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).
