import { defineConfig } from 'astro/config';

// Sitio estático. Sin framework de UI: HTML semántico primero, JS mínimo.
// Repo de publicación: ancardenasc.github.io (user/org page → sirve en la raíz, sin base path).
export default defineConfig({
  output: 'static',
  site: 'https://ancardenasc.github.io',
});
