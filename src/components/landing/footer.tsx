import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Route } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Location = {
  name: string;
  address: string;
  phone: string;
  phoneHref: string;
  whatsapp?: string;
  whatsappHref?: string;
  email: string;
  mapUrl: string;
};

function mapsDirectionsUrlByText(destination: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

const locations: Location[] = [
  {
    name: 'Córdoba - Ctra. del Aeropuerto',
    address: 'Ctra. Aeropuerto Km. 4,4 - 14005 Córdoba (Córdoba)',
    phone: '957 468 222',
    phoneHref: 'tel:+34957468222',
    whatsapp: '644 032 823',
    whatsappHref: 'https://wa.me/34644032823',
    email: 'aeropuerto@autocentroaeropuerto.com',
    mapUrl:
      'https://www.google.com/maps/place/Euromaster+C%C3%B3rdoba+Autocentro+Aeropuerto+1/@37.86191,-4.82652,15z/data=!4m6!3m5!1s0xd6d20a7a433c135:0xaa2ecf5ae57606cc!8m2!3d37.86191!4d-4.82652!16s%2Fg%2F1tgptzkr?hl=es&entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    name: 'Córdoba - C.C. Miralbaida',
    address:
      'Avda. Nuestra Señora de Begoña - C.C. Miralbaida - 14005 Córdoba (Córdoba)',
    phone: '957 462 068',
    phoneHref: 'tel:+34957462068',
    whatsapp: '635 818 009',
    whatsappHref: 'https://wa.me/34635818009',
    email: 'miralbaida@autocentroaeropuerto.com',
    mapUrl:
      'https://www.google.com/maps/place/Euromaster+C%C3%B3rdoba+Autocentro+Aeropuerto+2/@37.88269,-4.80985,13z/data=!4m6!3m5!1s0xd6cdf54d6853151:0x3918ea56b050f95f!8m2!3d37.88269!4d-4.80985!16s%2Fg%2F12hqp0q9s?hl=es&entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    name: 'Córdoba - P.I. Amargacena',
    address:
      'Polígono Industrial Amargacena - C/ Ingeniero Juan de la Cierva - 14013 Córdoba (Córdoba)',
    phone: '957 429 586',
    phoneHref: 'tel:+34957429586',
    whatsapp: '654 662 142',
    whatsappHref: 'https://wa.me/34654662142',
    email: 'amargacena@autocentroaeropuerto.com',
    mapUrl:
      'https://www.google.com/maps/place/Euromaster+C%C3%B3rdoba+Autocentro+Aeropuerto+3/@37.84526,-4.79973,15z/data=!4m6!3m5!1s0xd6d20da6323d2a1:0x3cf5fce3b694a6f5!8m2!3d37.84526!4d-4.79973!16s%2Fg%2F1hc492sl0?hl=es&entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D',
  },
];

function isValidEmail(email: string) {
  return email.includes('@');
}

export default function Footer() {
  return (
    // sin pb-24 aquí; el espacio para la barra móvil va en el bloque azul
    <footer id="contacto" className="w-full bg-card text-foreground pb-0">
      {/* NUESTROS CENTROS */}
      <div className="container mx-auto py-12 text-sm">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold font-headline">Nuestros Centros</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Elige el más cercano y contáctanos por teléfono, WhatsApp o email.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Card
              key={location.name}
              className="flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl will-change-transform"
            >
              <CardHeader className="pb-2">
                <CardTitle className="font-semibold tracking-tight text-base font-headline text-primary">
                  {location.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{location.address}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <a
                    href={location.phoneHref}
                    className="hover:text-primary"
                    aria-label={`Llamar a ${location.name} al ${location.phone.replace(/\s+/g, '')}`}
                  >
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  {isValidEmail(location.email) ? (
                    <a
                      href={`mailto:${location.email}`}
                      className="hover:text-primary truncate"
                      aria-label={`Enviar email a ${location.name}`}
                    >
                      {location.email}
                    </a>
                  ) : (
                    <span className="truncate" title={location.email}>
                      {location.email}
                    </span>
                  )}
                </div>

                {/* WhatsApp */}
                {location.whatsapp && location.whatsappHref && (
                  <div className="pt-1">
                    <a
                      href={location.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1DA851] transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2 ring-offset-background"
                      aria-label={`Abrir WhatsApp con ${location.name}`}
                    >
                      WhatsApp
                    </a>
                  </div>
                )}

                {/* Botones */}
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 justify-center rounded-full border border-primary text-primary px-3 py-1.5 text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
                    aria-label={`Abrir ubicación de ${location.name} en Google Maps`}
                  >
                    Abrir ubicación
                  </a>

                  <a
                    href={mapsDirectionsUrlByText(`${location.name} ${location.address}`)}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 justify-center rounded-full px-3 py-1.5 text-xs font-semibold bg-primary text-primary-foreground transition-transform active:scale-95 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
                    aria-label={`Ver ruta hacia ${location.name}`}
                  >
                    <Route className="h-3.5 w-3.5" aria-hidden="true" />
                    Ver ruta
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* HORARIO */}
      <div className="container mx-auto mt-2 pt-8 border-t text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-base font-headline">Horario de Atención</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-primary mt-1 shrink-0" />
                <div>
                  <p>Lunes a Viernes: 7:30 - 15:30</p>
                  <p>Sábados: 9:00 - 13:30 (solo en la ubicación Córdoba - Ctra. del Aeropuerto)</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space-y-2 mb-6 md:mb-10"></div>

      {/* BRANDING + SÍGUENOS (con separador abajo) */}
      <div className="container mx-auto mt-2 pt-8 border-t text-sm">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Euromaster_logo_inicio.webp"
              width={150}
              height={50}
              alt="Logo Euromaster"
              className="h-auto"
              priority
            />
            <span className="font-bold text-lg font-headline">
              Autocentro Aeropuerto
            </span>
          </Link>

          <p className="text-muted-foreground">
            Tu taller de confianza para el cuidado integral de tu vehículo.
          </p>

          <div className="space-y-2">
            <h4 className="font-semibold text-base font-headline">Síguenos</h4>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <a
                href="https://www.facebook.com/autocentroaeropuerto/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 hover:text-primary"
                aria-label="Abrir Facebook Autocentro Aeropuerto"
              >
                <Image src="/Facebook_icono.webp" alt="Facebook" width={16} height={16} className="shrink-0" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.euromaster-neumaticos.es/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 hover:text-primary"
                aria-label="Abrir web Euromaster Neumáticos"
              >
                <Image src="/Euromaster_logo.webp" alt="EUROMASTER" width={16} height={16} className="shrink-0" />
                <span>EUROMASTER</span>
              </a>
            </div>
          </div>
        </div>
      </div>
          <div className="space-y-2 mb-6 md:mb-10"></div>


      {/* LEGAL + ENLACES — FRANJA AZUL (sin borde arriba) */}
      <div className="w-full bg-[#0B3D6E] text-white">
        <div
          className="container mx-auto pt-8 text-center text-xs"
          style={{ paddingBottom: 'calc(6rem + env(safe-area-inset-bottom, 0px))' }} // hueco barra móvil
        >
          <p>© 2025 Autocentro Aeropuerto. Todos los derechos reservados.</p>
          <div className="mt-4 flex flex-col items-center gap-1">
            <div className="space-x-4">
              <Link href="/aviso-legal" className="hover:underline">Aviso Legal</Link>
              <Link href="/politica-de-privacidad" className="hover:underline">Política de Privacidad</Link>
              <Link href="/politica-de-cookies" className="hover:underline">Política de Cookies</Link>
            </div>
            <span className="mt-2 text-white/85">sdigital - Diseño web</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
