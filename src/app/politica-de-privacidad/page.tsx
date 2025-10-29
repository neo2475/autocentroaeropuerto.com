import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/landing/header";
// import Footer from "@/components/landing/footer";

export const metadata: Metadata = {
  title: 'Política de Privacidad | Autocentro Aeropuerto',
  description:
    'Conoce cómo tratamos tus datos personales: responsable, finalidades, base legal, plazos, derechos y medidas de seguridad.',
  alternates: { canonical: '/politica-de-privacidad' },
  openGraph: {
    title: 'Política de Privacidad | Autocentro Aeropuerto',
    description:
      'Responsable, datos tratados, finalidades, base legal, plazos, derechos y seguridad.',
    url: 'https://www.autocentroaeropuerto.com/politica-de-privacidad',
    type: 'article',
    locale: 'es_ES',
    siteName: 'Autocentro Aeropuerto',
  },
  twitter: {
    card: 'summary',
    title: 'Política de Privacidad | Autocentro Aeropuerto',
    description:
      'Tratamiento de datos personales en Autocentro Aeropuerto.',
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString("es-ES");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main" className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          <h1 className="text-3xl font-bold font-headline mb-2 text-center">
            Política de Privacidad
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-6">
            Última actualización: {lastUpdated}
          </p>

          {/* Breadcrumb */}
          <nav className="not-prose mb-6 text-sm text-muted-foreground text-center">
            <a href="/" className="hover:text-primary">Inicio</a>
            <span className="mx-2">/</span>
            <span>Política de Privacidad</span>
          </nav>

          {/* Índice */}
          <nav aria-label="Índice de contenidos" className="not-prose my-6 rounded-md border p-4">
            <ol className="list-decimal pl-5 grid gap-2 md:grid-cols-2">
              <li><a className="hover:text-primary" href="#responsable">1. Responsable del tratamiento</a></li>
              <li><a className="hover:text-primary" href="#datos">2. Datos que tratamos</a></li>
              <li><a className="hover:text-primary" href="#finalidades">3. Finalidades y base legal</a></li>
              <li><a className="hover:text-primary" href="#plazos">4. Plazos de conservación</a></li>
              <li><a className="hover:text-primary" href="#destinatarios">5. Destinatarios y encargados</a></li>
              <li><a className="hover:text-primary" href="#derechos">6. Derechos de los usuarios</a></li>
              <li><a className="hover:text-primary" href="#seguridad">7. Medidas de seguridad</a></li>
              <li><a className="hover:text-primary" href="#menores">8. Menores de edad</a></li>
              <li><a className="hover:text-primary" href="#cookies">9. Cookies</a></li>
              <li><a className="hover:text-primary" href="#contacto">10. Contacto</a></li>
            </ol>
          </nav>

          <h2 id="responsable" className="text-2xl font-bold font-headline mt-8 mb-4">
            1. Responsable del tratamiento
          </h2>
          <p>
            <strong>Autocentro Aeropuerto</strong> (en adelante, “la Empresa”), con domicilio en
            <strong> Ctra. Aeropuerto Km. 4,4, 14005 Córdoba (Córdoba), España</strong>. Teléfono:
            <strong> +34 957 468 222</strong>. Email:
            <strong> info@autocentroaeropuerto.com</strong>.
          </p>

          <h2 id="datos" className="text-2xl font-bold font-headline mt-8 mb-4">
            2. Datos que tratamos
          </h2>
          <ul>
            <li><strong>Identificativos y de contacto:</strong> nombre, email, teléfono.</li>
            <li><strong>Datos de vehículo:</strong> matrícula, marca/modelo, km, historial de servicio.</li>
            <li>
              <strong>Datos de navegación:</strong> IP, dispositivo, páginas visitadas, cookies (ver{" "}
              <Link href="/politica-de-cookies" className="underline hover:text-primary">
                Política de Cookies
              </Link>
              ).
            </li>
          </ul>

          <h2 id="finalidades" className="text-2xl font-bold font-headline mt-8 mb-4">
            3. Finalidades y base legal
          </h2>
          <ul>
            <li><strong>Gestión de citas y servicios</strong> (ejecución de contrato/medidas precontractuales).</li>
            <li><strong>Atención al cliente</strong> (interés legítimo/ejecución de contrato).</li>
            <li><strong>Comunicaciones comerciales</strong> (consentimiento; revocable en cualquier momento).</li>
            <li><strong>Mejora del sitio web y seguridad</strong> (interés legítimo).</li>
          </ul>

          <h2 id="plazos" className="text-2xl font-bold font-headline mt-8 mb-4">
            4. Plazos de conservación
          </h2>
          <p>
            Conservamos los datos el tiempo necesario para la finalidad por la que se recogieron y para cumplir
            obligaciones legales. En caso de comunicaciones comerciales, hasta que revoques el consentimiento.
          </p>

          <h2 id="destinatarios" className="text-2xl font-bold font-headline mt-8 mb-4">
            5. Destinatarios y encargados
          </h2>
          <p>
            Podremos compartir datos con proveedores necesarios para la prestación del servicio (talleres asociados,
            hosting, analítica, mensajería) con contratos de encargo de tratamiento.
            No realizamos cesiones internacionales fuera del EEE salvo que exista garantía adecuada.
          </p>

          <h2 id="derechos" className="text-2xl font-bold font-headline mt-8 mb-4">
            6. Derechos de los usuarios
          </h2>
          <p className="mb-3">
            Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad
            escribiendo a <strong>info@autocentroaeropuerto.com</strong> o al domicilio indicado. Tienes derecho a reclamar
            ante la <strong>Agencia Española de Protección de Datos</strong>.
          </p>
          <ul className="text-muted-foreground">
            <li>Acceso a tus datos y a la información del tratamiento.</li>
            <li>Rectificación de datos inexactos o incompletos.</li>
            <li>Supresión (cuando proceda legalmente).</li>
            <li>Oposición y limitación al tratamiento en determinadas circunstancias.</li>
            <li>Portabilidad de los datos cuando sea aplicable.</li>
          </ul>

          <h2 id="seguridad" className="text-2xl font-bold font-headline mt-8 mb-4">
            7. Medidas de seguridad
          </h2>
          <p>
            Aplicamos medidas técnicas y organizativas proporcionales al riesgo (control de accesos, cifrado en tránsito,
            políticas internas, copias de seguridad).
          </p>

          <h2 id="menores" className="text-2xl font-bold font-headline mt-8 mb-4">
            8. Menores de edad
          </h2>
          <p>No tratamos datos de menores de 14 años sin consentimiento de sus padres o tutores.</p>

          <h2 id="cookies" className="text-2xl font-bold font-headline mt-8 mb-4">
            9. Cookies
          </h2>
          <p>
            Para más información sobre el uso de cookies, consulta la{" "}
            <Link href="/politica-de-cookies" className="underline hover:text-primary">
              Política de Cookies
            </Link>.
          </p>

          <h2 id="contacto" className="text-2xl font-bold font-headline mt-8 mb-4">
            10. Contacto
          </h2>
          <p>
            Para cualquier duda o ejercicio de derechos: <strong>info@autocentroaeropuerto.com</strong> — Tel.:{" "}
            <strong>+34 957 468 222</strong>.
          </p>
        </article>
      </main>
    </div>
  );
}
