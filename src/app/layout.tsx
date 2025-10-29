import type { Metadata } from 'next';
import './globals.css';
// import WhatsAppButton from '@/components/ui/whatsapp-button'; // seguimos sin mostrarlo
import ScrollToTopButton from '@/components/landing/scroll-to-top-button';
// import MobileCTABar from '@/components/cta/MobileCTABar';

// ⬇️ IMPORTA TU FOOTER COMPARTIDO
import Footer from '@/components/landing/footer';
// ⬅️ Si tu cabecera está en un componente (Navbar/SiteHeader), puedes importarla aquí también:
// import SiteHeader from '@/components/layout/site-header';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.autocentroaeropuerto.com'),
  title: 'Autocentro Aeropuerto | Taller mecánico en Córdoba',
  description:
    'Mecánica rápida, mantenimiento, neumáticos y frenos en Córdoba. Confía en Autocentro Aeropuerto para el cuidado integral de tu vehículo.',
  keywords: [
    'taller mecánico Córdoba',
    'neumáticos Córdoba',
    'alineación Córdoba',
    'frenos Córdoba',
    'cambio de aceite Córdoba',
    'enganches de remolque Córdoba',
    'mantenimiento vehículo Córdoba',
    'Autocentro Aeropuerto',
    'Euromaster Córdoba'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Autocentro Aeropuerto | Taller mecánico en Córdoba',
    description:
      'Mecánica rápida, neumáticos y mantenimiento integral de vehículos en Córdoba.',
    url: 'https://www.autocentroaeropuerto.com/',
    siteName: 'Autocentro Aeropuerto',
    locale: 'es_ES',
    type: 'website',
    images: ['/Euromaster_logo_inicio.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autocentro Aeropuerto | Taller mecánico en Córdoba',
    description:
      'Mecánica rápida, mantenimiento, neumáticos y frenos en Córdoba.',
    images: ['/Euromaster_logo_inicio.webp'],
  },
  robots: { index: true, follow: true },
};

const locationsStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: 'Autocentro Aeropuerto - Ctra. del Aeropuerto',
    image: 'https://www.autocentroaeropuerto.com/Euromaster_logo_inicio.png',
    '@id': 'https://www.autocentroaeropuerto.com/#aeropuerto',
    url: 'https://www.autocentroaeropuerto.com/',
    telephone: '+34957468222',
    email: 'aeropuerto@autocentroaeropuerto.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ctra. Aeropuerto Km. 4,4',
      addressLocality: 'Córdoba',
      postalCode: '14005',
      addressRegion: 'Córdoba',
      addressCountry: 'ES',
    },
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsStructuredData) }}
        />
      </head>
      <body className="font-body antialiased">
        {/* Cabecera global (si la tienes) */}
        {/* <SiteHeader /> */}

        {/* Contenido de cada página */}
        {children}

        {/* Utilidades globales */}
        {/* <WhatsAppButton /> */}
        <ScrollToTopButton />

        {/* Pie de página global SIEMPRE visible en todas las rutas */}
        <Footer />
      </body>
    </html>
  );
}
