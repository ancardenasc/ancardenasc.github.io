# Portfolio site (esqueleto)

Sitio estático del portafolio, stack Astro (HTML semántico primero, JS mínimo). Página única multi-ruta: inicio, proyectos, skills, sobre mí, contacto.

## Estado
Esqueleto inicial (Bloque A del plan de trabajo). Contenido real se llena a medida que cada proyecto (P1-P5) cumple su Definition of Done en `portfolio-blueprint/`.

## Pendiente antes de publicar
- [ ] `npm install` (no ejecutado aún — requiere red)
- [ ] Decidir dominio/nombre de repo de publicación (`ancardenasc.github.io` u otro) — pendiente de confirmación
- [ ] CI: axe + Lighthouse CI con presupuesto de accesibilidad/rendimiento
- [ ] Contenido real de "Sobre mí" y "Proyectos"
- [ ] Declaración de accesibilidad (ver plantilla en `docs/accessibility/` de cada proyecto)

## Desarrollo local
```bash
npm install
npm run dev
```

## Accesibilidad — decisiones ya aplicadas en el esqueleto
- `lang="es"` en el documento
- Skip link al contenido principal
- Tokens de color con contraste AA verificado, modo claro/oscuro vía `prefers-color-scheme`
- `prefers-reduced-motion` respetado globalmente
- Foco visible (`:focus-visible`) en vez de `outline: none`
