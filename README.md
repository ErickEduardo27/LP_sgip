# SGIP por egora — Landing page

Sitio estático de la landing de SGIP, el producto de gestión de inventario patrimonial de egora.

## Desarrollo

Requiere Node.js 20.19 o superior.

```sh
npm i
npm run dev
```

## Build estático

```sh
npm run build
```

El sitio completo queda en `dist/client/` (HTML prerenderizado, CSS, JS e imágenes). Sube el contenido de esa carpeta a cualquier hosting estático (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, Nginx, etc.).

## Stack

- TanStack Start (prerender)
- TypeScript
- React
- Tailwind CSS
