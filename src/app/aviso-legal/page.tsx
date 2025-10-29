import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/landing/header";
// import Footer from "@/components/landing/footer";

export const metadata: Metadata = {
  title: 'Aviso Legal | Autocentro Aeropuerto',
  description:
    'Consulta el Aviso Legal de Autocentro Aeropuerto: titular del sitio, condiciones de uso, propiedad intelectual, responsabilidad y jurisdicción.',
  alternates: { canonical: '/aviso-legal' },
  openGraph: {
    title: 'Aviso Legal | Autocentro Aeropuerto',
    description:
      'Titularidad del sitio, condiciones de uso, responsabilidad y jurisdicción.',
    url: 'https://www.autocentroaeropuerto.com/aviso-legal',
    type: 'article',
    locale: 'es_ES',
    siteName: 'Autocentro Aeropuerto',
  },
  twitter: {
    card: 'summary',
    title: 'Aviso Legal | Autocentro Aeropuerto',
    description:
      'Titularidad, condiciones de uso, propiedad intelectual y jurisdicción.',
  },
  robots: { index: true, follow: true },
};

export default function LegalNoticePage() {
  const lastUpdated = new Date().toLocaleDateString("es-ES");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main" className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          <h1 className="text-3xl font-bold font-headline mb-2 text-center">
            Aviso Legal
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-6">
            Última actualización: {lastUpdated}
          </p>

          {/* Breadcrumb */}
          <nav className="not-prose mb-6 text-sm text-muted-foreground text-center">
            <a href="/" className="hover:text-primary">Inicio</a>
            <span className="mx-2">/</span>
            <span>Aviso Legal</span>
          </nav>

          {/* Contenido */}
          <h2 id="titular" className="text-2xl font-bold font-headline mt-8 mb-4">
            Titular del sitio web
          </h2>
          <p>
            <strong>Autocentro Aeropuerto</strong> — Ctra. Aeropuerto Km. 4,4, 14005 Córdoba (Córdoba), España.
            <br />
            <strong>Tel.:</strong> +34 957 468 222 — <strong>Email:</strong>{" "}
            <a href="mailto:aeropuerto@autocentroaeropuerto.com">aeropuerto@autocentroaeropuerto.com</a>.
          </p>

          <h2 id="uso" className="text-2xl font-bold font-headline mt-8 mb-4">
            Condiciones de uso
          </h2>
          <p>
            El acceso y uso de este sitio implica la aceptación de las presentes condiciones. El usuario se compromete
            a utilizar los contenidos de forma lícita, respetuosa con la normativa vigente y con los derechos de
            terceros, absteniéndose de realizar actividades que puedan dañar, sobrecargar o deteriorar el sitio.
          </p>

          <h2 id="propiedad" className="text-2xl font-bold font-headline mt-8 mb-4">
            Propiedad intelectual e industrial
          </h2>
          <p>
            Los contenidos del sitio (textos, imágenes, logotipos, marcas, diseños, código) son propiedad de sus
            titulares o se utilizan con autorización. Queda prohibida su reproducción, distribución o comunicación
            pública sin autorización expresa, salvo los usos permitidos por ley.
          </p>

          <h2 id="responsabilidad" className="text-2xl font-bold font-headline mt-8 mb-4">
            Responsabilidad
          </h2>
          <ul>
            <li>Aunque procuramos que la información sea precisa y actualizada, no garantizamos la ausencia de errores o interrupciones.</li>
            <li>No nos hacemos responsables del uso que se haga de la información, ni de daños derivados del uso del sitio o de la aplicación de la información contenida.</li>
          </ul>

          <h2 id="enlaces" className="text-2xl font-bold font-headline mt-8 mb-4">
            Enlaces externos
          </h2>
          <p>
            Este sitio puede contener enlaces a páginas de terceros. No ejercemos control sobre dichos sitios ni
            asumimos responsabilidad por sus contenidos, disponibilidad o políticas. Te recomendamos revisar sus
            respectivos avisos legales y políticas de privacidad/cookies.
          </p>

          <h2 id="datos" className="text-2xl font-bold font-headline mt-8 mb-4">
            Protección de datos y cookies
          </h2>
          <p>
            Para información sobre el tratamiento de datos personales, consulta la{" "}
            <Link href="/politica-de-privacidad" className="underline hover:text-primary">
              Política de Privacidad
            </Link>
            . Para el uso de cookies y tecnologías similares, consulta la{" "}
            <Link href="/politica-de-cookies" className="underline hover:text-primary">
              Política de Cookies
            </Link>
            .
          </p>

          <h2 id="jurisdiccion" className="text-2xl font-bold font-headline mt-8 mb-4">
            Legislación aplicable y jurisdicción
          </h2>
          <p>
            Las presentes condiciones se rigen por la legislación española. Salvo normativa imperativa, las partes se
            someten a los juzgados y tribunales de Córdoba para la resolución de controversias.
          </p>

          <h2 id="modificaciones" className="text-2xl font-bold font-headline mt-8 mb-4">
            Modificaciones del aviso legal
          </h2>
          <p>
            Podemos actualizar este aviso para reflejar cambios normativos o de funcionamiento del sitio. Las
            modificaciones surtirán efecto desde su publicación.
          </p>
        </article>
      </main>
    </div>
  );
}
