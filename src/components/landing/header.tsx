'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#sobre-nosotros', label: 'Sobre Nosotros' },
  { href: '/#testimonios', label: 'Testimonios' },
  { href: '/#contacto', label: 'Contacto' },
];

const TEL_VISIBLE = '957 468 222';
const TEL_LINK = 'tel:+34957468222';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    if (isHomePage && href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="inicio"
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 [--header-h:65px]"
    >
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-6">
        {/* grid: logo | centro (marca móvil o nav desktop) | acciones */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-3 h-16">
          {/* Columna 1: logo + marca DESKTOP */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0" aria-label="Ir al inicio">
            <Image
              src="/Euromaster_logo_inicio.webp"
              width={120}
              height={28}
              alt="Logo Euromaster"
              className="h-7 w-auto object-contain sm:h-8"
              priority
              sizes="(max-width: 768px) 120px, 160px"
            />
            {/* Marca visible sólo en desktop */}
            <span className="hidden md:block font-bold font-headline text-primary leading-none text-xl">
              Autocentro Aeropuerto
            </span>
          </Link>

          {/* Columna 2 móvil: marca en UNA línea centrada */}
          <div className="md:hidden min-w-0 text-center">
            <span
              className="block font-bold font-headline text-primary leading-none text-sm whitespace-nowrap"
              title="Autocentro Aeropuerto"
            >
              Autocentro Aeropuerto
            </span>
          </div>

          {/* Columna 2 desktop: navegación centrada */}
          <nav className="hidden md:flex items-center justify-center gap-6 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Columna 3: acciones derecha */}
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <a
              href={TEL_LINK}
              className="hidden md:inline-flex items-center gap-2 font-semibold hover:text-primary"
              aria-label={`Llamar ahora a Autocentro Aeropuerto al ${TEL_VISIBLE.replace(/\s+/g, '')}`}
            >
              <Phone className="h-4 w-4" />
              <span>{TEL_VISIBLE}</span>
            </a>

            <Button asChild variant="default" size="sm" className="hidden md:inline-flex">
              <Link href="/#contacto" onClick={(e) => handleLinkClick(e, '/#contacto')}>
                Solicita una Cita
              </Link>
            </Button>

            {/* Menú móvil */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden p-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="w-[86vw] max-w-sm px-4 pt-4 pb-6
                           [&>button]:text-primary [&>button:hover]:bg-primary/10"
              >
                {/* Cabecera drawer con marca a dos líneas */}
                <div className="mb-5 pr-10">
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3"
                    aria-label="Ir al inicio"
                  >
                    <Image
                      src="/Euromaster_logo_inicio.webp"
                      width={120}
                      height={28}
                      alt="Logo Euromaster"
                      className="h-7 w-auto object-contain"
                      sizes="120px"
                    />
                    <span className="font-bold font-headline text-primary text-base leading-tight">
                      <span className="block">Autocentro</span>
                      <span className="block">Aeropuerto</span>
                    </span>
                  </Link>
                </div>

                <nav className="flex flex-col gap-4 text-base">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-primary"
                        onClick={(e) => handleLinkClick(e, link.href)}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-6 space-y-3">
                  <a
                    href={TEL_LINK}
                    className="inline-flex items-center gap-2 text-base font-semibold hover:text-primary"
                    aria-label={`Llamar ahora a Autocentro Aeropuerto al ${TEL_VISIBLE.replace(/\s+/g, '')}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone className="h-5 w-5" />
                    <span>{TEL_VISIBLE}</span>
                  </a>

                  <SheetClose asChild>
                    <Button asChild className="w-full rounded-xl py-3">
                      <Link
                        href="/#contacto"
                        onClick={(e) => handleLinkClick(e, '/#contacto')}
                        aria-label="Ir al formulario para pedir cita"
                      >
                        Solicita una Cita
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
