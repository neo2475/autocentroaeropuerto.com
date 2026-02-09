# Autocentro Aeropuerto Web

Sitio web corporativo de **Autocentro Aeropuerto** desarrollado con Next.js.

## Tabla de contenidos

- [Descripcion](#descripcion)
- [Stack tecnologico](#stack-tecnologico)
- [Requisitos](#requisitos)
- [Puesta en marcha](#puesta-en-marcha)
- [Variables de entorno](#variables-de-entorno)
- [Scripts](#scripts)
- [Rutas principales](#rutas-principales)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Build y despliegue](#build-y-despliegue)
- [SEO](#seo)

## Descripcion

Este proyecto implementa la web publica de Autocentro Aeropuerto con enfoque en:
- presentacion de servicios
- captacion de contactos (telefono, WhatsApp y formularios/secciones de CTA)
- posicionamiento local SEO para Cordoba

## Stack tecnologico

- Next.js 15 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Radix UI + shadcn/ui
- Genkit + Gemini (uso opcional en flujos IA)

## Requisitos

- Node.js 20+
- npm 10+

## Puesta en marcha

```bash
npm install
npm run dev
```

La aplicacion arranca en `http://localhost:9002`.

## Variables de entorno

Crea `.env.local` en la raiz del proyecto:

```env
GEMINI_API_KEY=tu_clave_de_gemini
NEXT_PUBLIC_GOOGLE_MAPS_KEY=tu_clave_de_google_maps
```

Notas:
- `GEMINI_API_KEY`: necesaria solo para ejecutar flujos de Genkit.
- `NEXT_PUBLIC_GOOGLE_MAPS_KEY`: clave publica para integraciones de Google Maps en cliente.

## Scripts

```bash
# Desarrollo (puerto 9002)
npm run dev

# Build produccion
npm run build

# Arranque en produccion
npm run start

# Calidad de codigo
npm run lint
npm run typecheck

# Flujos IA (Genkit)
npm run genkit:dev
npm run genkit:watch
```

## Rutas principales

- `/` landing principal
- `/servicios` listado de servicios
- `/servicios/[slug]` detalle de servicio (SSG)
- `/aviso-legal`
- `/politica-de-privacidad`
- `/politica-de-cookies`

## Estructura del proyecto

```text
src/
  app/                    # Rutas, layout y metadatos
  components/
    landing/              # Secciones de la pagina principal
    ui/                   # Componentes UI reutilizables
  lib/
    services-data.ts      # Datos de servicios
    service-slugs.ts      # Slugs de rutas dinamicas
  ai/                     # Configuracion y flujos de Genkit
```

## Build y despliegue

La configuracion actual en `next.config.ts` usa:
- `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true`

Para generar salida estatica:

```bash
npm run build
```

El resultado se genera en `out/`, listo para hosting estatico o Firebase App Hosting.

## SEO

- Metadatos y Open Graph configurados para marca local.
- JSON-LD tipo `AutoRepair` para las sedes.
- Paginas legales y enlaces canonicos configurados en rutas principales.
