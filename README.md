# Raclettemeisterschaft

Website for the Raclettemeisterschaft, built with [Astro](https://astro.build) and TypeScript.

## Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`   |
| `npm run preview` | Preview the build locally                |

## Structure

```
public/              Static assets served as-is
src/
  components/        Header, Footer
  layouts/           BaseLayout (shared page shell)
  pages/             One file per route
  styles/            Global CSS
```
