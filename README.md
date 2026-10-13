# Veska landing

Landing estática y responsive para Veska. Se genera con Node.js sin dependencias externas.

## Desarrollo

```bash
npm run build
npm run check
npm test
npm run serve
```

Luego abre `http://localhost:4173`.

## Configuración

Copia `.env.example` a `.env` o exporta las variables antes de compilar:

- `PUBLIC_SITE_URL`: URL canónica de producción.
- `PUBLIC_FORM_ENDPOINT`: endpoint HTTPS que recibe el formulario vía `POST` JSON.
- `PUBLIC_CONTACT_EMAIL`: correo alternativo; se oculta si está vacío.
- `PUBLIC_INSTAGRAM_URL`: perfil real; se oculta si está vacío.
- `PUBLIC_ANALYTICS_ID`: ID opcional. La página solo emite eventos si existe consentimiento explícito en `window.__VESKA_ANALYTICS_CONSENT__`.

Sin `PUBLIC_FORM_ENDPOINT`, el formulario conserva los datos y muestra un estado de configuración pendiente; nunca simula un envío exitoso.

## Imágenes

Los assets editoriales de `public/assets/images/` fueron generados para esta demo y exportados en AVIF, WebP y JPEG. Los archivos fuente originales se pueden reemplazar manteniendo los mismos nombres y proporciones.
