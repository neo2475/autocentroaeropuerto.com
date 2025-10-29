'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { MouseEvent } from 'react';

export default function CTASection() {
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Si estamos en la home, hacer scroll suave a #contacto
    if (pathname === '/') {
      const el = document.getElementById('contacto');
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Si NO estamos en la home, dejamos que navegue a /#contacto
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
            ¿Listo para Recuperar el Rendimiento de tu Coche?
          </h2>
          <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Contáctanos hoy mismo y recibe un diagnóstico inicial sin costo.
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm space-y-2">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="w-full transition-transform active:scale-95"
          >
            {/* En home hace scroll; fuera de home navega a /#contacto */}
            <Link href="/#contacto" onClick={handleClick} prefetch={false} aria-label="Ir a la sección de contacto">
              ¡Solicita tu Cita Ya!
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
