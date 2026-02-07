# Portfolio Website V1

A personal portfolio site built with Next.js to showcase skills, projects, and contact links.

Live site: [https://v1-akilesh.vercel.app/](https://v1-akilesh.vercel.app/)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run build
npm run start
```

## Core Capabilities

- Animated intro section with social/contact links
- Skills grid grouped by category
- Project showcase card with repository and live links
- Responsive layout with Tailwind CSS and Framer Motion

## Configuration

No environment variables are required for local development.

## Usage

Update portfolio content in `/Users/akilesh/Developer/v1/lib/data.ts`:

- `skillsData` for skill categories and icons
- `projectsData` for featured projects
- `links` for section navigation labels

You can customize sections in:

- `/Users/akilesh/Developer/v1/components/intro.tsx`
- `/Users/akilesh/Developer/v1/components/skills.tsx`
- `/Users/akilesh/Developer/v1/components/projects.tsx`

## Contributing and Testing

Run lint checks before submitting changes:

```bash
npm run lint
```

Contributions are welcome via pull requests.

## License

MIT License. See `/Users/akilesh/Developer/v1/LICENSE`.
