# Proyecto Reanima+ Vida

Web corporativa de formación práctica en respuesta ante emergencias para empresas.

Presenta dos programas:

- Curso oficial ERC de Soporte Vital Básico y uso del DEA, con 4 horas presenciales.
- Programa integral con el curso oficial ERC y un módulo empresarial independiente de Primeros Auxilios, con 6 horas presenciales en total.

La web incluye metodología, contenidos, cronogramas, encaje preventivo, información prudente sobre FUNDAE y acceso a la aplicación educativa de reanimación de Proyecto Reanima+ Vida.

## Cómo está construida

Es una aplicación web Next/React. No existe un `index.html` editable porque el HTML se genera a partir de estos archivos:

- `app/page.tsx`: contenido y estructura de la página.
- `app/globals.css`: diseño responsive para móvil y escritorio.
- `app/layout.tsx`: metadatos, iconos y configuración general.
- `public/`: logotipos, fotografías, manifiesto e iconos de la PWA.

## Verla en local

Requiere Node.js 22 o posterior y pnpm. Desde esta carpeta:

```bash
pnpm install
pnpm dev
```

Después se abre `http://localhost:3000/` en el navegador. No se visualiza haciendo doble clic en un archivo, porque necesita el servidor de desarrollo.

## PWA

La web se puede añadir a la pantalla de inicio como «Reanima+ Vida». Incluye manifiesto, iconos para iPhone y Android y funcionamiento básico sin conexión después de la primera visita.

## Contacto

[proyectoreanimavida@gmail.com](mailto:proyectoreanimavida@gmail.com)
