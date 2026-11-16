# Ifeoluwa Sanni — Portfolio

Personal portfolio of Ifeoluwa (Phoebe) Sanni, Lead Full-Stack Blockchain Developer.

**Live:** https://ifeoluwaayosanni.vercel.app

## Stack

React 18 (Create React App), React Router, Tailwind CSS, Framer Motion. Deployed on Vercel.

## Run locally

```bash
npm install
npm start        # http://localhost:3000
npm run build    # production build in ./build
```

## Updating content

| What | Where |
| --- | --- |
| Projects | `src/data/projects.js` — add an entry at the top of the list |
| Project screenshots | `src/Images/` — WebP, about 900px wide |
| Skills, open-source work, experience | `src/Components/Experience.js` |
| Bio | `src/Components/About.js` and `src/Components/Home.js` |
| Resume PDF | replace `src/Images/res.pdf` |
| Link-preview title, description and image | `public/index.html`, `public/og-image.png` |

Project cards pull stars, forks and last-push time from the GitHub API. For a private
repository, leave `repo` out and set `privateRepo: true` to show a "Private repo" label.
