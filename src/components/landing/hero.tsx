'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-cover');

  return (
    <section
      className="
        relative w-full
        min-h-[100dvh]                      /* ocupa toda la ventana */
        -mt-[var(--header-h,65px)]          /* se mete bajo el header sticky */
        pt-[var(--header-h,65px)]           /* compensa para que el texto no quede tapado */
        flex items-center justify-center text-center text-white
        overflow-hidden
      "
    >
      {(heroImage?.imageUrl || '/portada_3.webp') && (
        <Image
          src={heroImage?.imageUrl || '/portada_3.webp'}
          alt={heroImage?.description || 'Autocentro Aeropuerto - taller mecánico en Córdoba'}
          fill
          priority
          sizes="100vw"
          data-ai-hint={heroImage?.imageHint}
          className="
            object-cover
            /* 🔹 Punto focal: más a la izquierda en móvil para ver el caliper */
            object-[32%_50%]
            sm:object-[36%_50%]
            md:object-[42%_50%]
            lg:object-[48%_50%]
            will-change-transform
          "
        />
      )}

      {/* overlay para legibilidad (un poco menos opaco arriba y más abajo) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/40 to-black/55" />

      <div className="relative z-10 container px-4 md:px-6 space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
          Expertos en el cuidado de tu vehículo en Córdoba
        </h1>

        <p className="max-w-[700px] mx-auto text-lg md:text-xl text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
          Servicio confiable, reparaciones rápidas y precios transparentes. Tu coche está en las mejores manos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="transition-transform active:scale-95">
            <Link href="#servicios">Nuestros Servicios</Link>
          </Button>

          <Button asChild size="lg" variant="default" className="transition-transform active:scale-95">
            <a href="tel:+34957468222" aria-label="Llamar ahora a Autocentro Aeropuerto">
              Llámanos ahora
            </a>
          </Button>
        </div>
      </div>

      {/* margen de seguridad para barras del navegador móvil */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </section>
  );
}
