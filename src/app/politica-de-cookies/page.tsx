import type { Metadata } from "next";
// import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: 'Política de Cookies | Autocentro Aeropuerto',
  description:
    'Información sobre el uso de cookies: tipos, finalidades y cómo configurar o desactivar cookies.',
  alternates: { canonical: '/politica-de-cookies' },
  openGraph: {
    title: 'Política de Cookies | Autocentro Aeropuerto',
    description:
      'Tipos y finalidades de cookies, configuración y desactivación.',
    url: 'https://www.autocentroaeropuerto.com/politica-de-cookies',
    type: 'article',
    locale: 'es_ES',
    siteName: 'Autocentro Aeropuerto',
  },
  twitter: {
    card: 'summary',
    title: 'Política de Cookies | Autocentro Aeropuerto',
    description:
      'Tipos, finalidades y configuración de cookies.',
  },
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  const lastUpdated = "11/10/2025";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main" className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          <h1 className="text-3xl font-bold font-headline mb-2 text-center">
            Política de Cookies
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-6">
            Última actualización: {lastUpdated}
          </p>

          {/* Índice */}
          <nav aria-label="Índice de contenidos" className="not-prose my-6 rounded-md border p-4">
            <ol className="list-decimal pl-5 grid gap-2">
              <li><a href="#consentimiento" className="hover:text-primary">1. Renovar o cambiar el consentimiento</a></li>
              <li><a href="#objeto" className="hover:text-primary">2. Objeto</a></li>
              <li><a href="#que-son" className="hover:text-primary">3. ¿Qué son las cookies?</a></li>
              <li><a href="#terceros" className="hover:text-primary">4. Cookies de terceros</a></li>
              <li><a href="#configuracion" className="hover:text-primary">5. Cómo rechazar/desactivar</a></li>
              <li><a href="#actualizaciones" className="hover:text-primary">6. Actualizaciones</a></li>
            </ol>
          </nav>

          <h2 id="consentimiento" className="text-2xl font-bold font-headline mt-8 mb-4">
            Renovar o cambiar el consentimiento de las cookies
          </h2>

          <h2 id="objeto" className="text-2xl font-bold font-headline mt-8 mb-4">Objeto</h2>
          <p>
            El objeto de la presente política es informar del uso de cookies en este sitio web de acuerdo con lo
            establecido en la legislación de los servicios de la sociedad de la información y de comercio electrónico.
          </p>

          <h2 id="que-son" className="text-2xl font-bold font-headline mt-8 mb-4">
            ¿Qué son las cookies y para qué se utilizan?
          </h2>
          <p>
            Las cookies son ficheros o archivos de texto que un servidor web genera y almacena en el
            ordenador/smartphone/tablet (en adelante, equipo) de un usuario al acceder a determinadas páginas web, para
            almacenar y recuperar información sobre la navegación que realiza el usuario. También pueden consistir en un
            código que permite identificar al usuario de forma inequívoca durante su navegación.
          </p>
          <p>
            El uso de cookies permite obtener información relativa a la navegación; mejorar la experiencia del usuario;
            recoger estadísticas de uso (navegador, páginas visitadas, número de visitas, tiempo en el sitio, etc.);
            geolocalizar al usuario (región y, potencialmente, localidad); medir la efectividad de campañas de correo
            electrónico; y mejorar funcionalidades para segmentos específicos (especialmente suscriptores).
          </p>
          <p>
            Este sitio web utiliza cookies, tanto propias como de terceros. Más adelante el usuario puede encontrar
            información concreta sobre las mismas.
          </p>

          <h2 id="terceros" className="text-2xl font-bold font-headline mt-8 mb-4">
            ¿Cuáles son las cookies de terceros utilizadas y la finalidad de uso en el sitio web?
          </h2>

          <div className="overflow-x-auto">
            <Table aria-label="Listado de soluciones de terceros que emplean cookies">
              <caption className="text-left text-sm text-muted-foreground mb-2">
                Relación de terceros que pueden instalar cookies a través de este sitio, con su finalidad y opciones de privacidad.
              </caption>
              <TableHeader>
                <TableRow>
                  <TableHead scope="col">Solución de Terceros</TableHead>
                  <TableHead scope="col">Tipo/Propósito</TableHead>
                  <TableHead scope="col">Proveedor</TableHead>
                  <TableHead scope="col">Política de Privacidad y opciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Google Analytics</TableCell>
                  <TableCell>
                    Analíticas: datos anónimos sobre visitas y uso del sitio. Puede registrar origen del usuario y
                    keywords utilizadas. Además, YouTube (Google) usa cookies para medir visualizaciones y eventos.
                  </TableCell>
                  <TableCell>Google Inc.</TableCell>
                  <TableCell>
                    <a href="https://policies.google.com/privacy?hl=es" target="_blank" rel="noopener noreferrer nofollow">Privacidad</a>
                    <br />
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer nofollow">Rechazar</a>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Google Maps</TableCell>
                  <TableCell>
                    Ubicación: servicio de mapas, puede registrar origen del usuario y términos de búsqueda; genera
                    identificadores con fines analíticos.
                  </TableCell>
                  <TableCell>Google Inc.</TableCell>
                  <TableCell>
                    <a href="https://policies.google.com/privacy?hl=es" target="_blank" rel="noopener noreferrer nofollow">Privacidad</a>
                    <br />
                    <a href="https://support.google.com/google-ads/answer/32050?hl=es" target="_blank" rel="noopener noreferrer nofollow">
                      Opciones Ads
                    </a>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>AddToAny</TableCell>
                  <TableCell>Interacción social: permite compartir contenidos en redes sociales.</TableCell>
                  <TableCell>AddToAny</TableCell>
                  <TableCell>
                    <a href="https://www.addtoany.com/privacy" target="_blank" rel="noopener noreferrer nofollow">Privacidad</a>
                    <br />
                    <a href="https://www.addtoany.com/buttons/features/" target="_blank" rel="noopener noreferrer nofollow">No rastrear</a>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>AddThis</TableCell>
                  <TableCell>
                    Interacción social: compartir en redes (Google, Facebook, etc.). Herramientas web.
                  </TableCell>
                  <TableCell>Oracle Inc.</TableCell>
                  <TableCell>
                    <a href="https://www.oracle.com/legal/privacy/addthis-privacy-policy.html" target="_blank" rel="noopener noreferrer nofollow">Privacidad</a>
                    <br />
                    <a href="https://datacloudoptout.oracle.com/" target="_blank" rel="noopener noreferrer nofollow">Rechazar</a>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Adobe Omniture</TableCell>
                  <TableCell>
                    Analíticas: datos anónimos sobre visitas; permite realizar pruebas y evaluar la presentación de la web.
                  </TableCell>
                  <TableCell>Adobe Systems Incorporated</TableCell>
                  <TableCell>
                    <a href="https://www.adobe.com/es/privacy.html" target="_blank" rel="noopener noreferrer nofollow">Privacidad</a>
                    <br />
                    <a href="https://www.adobe.com/es/privacy/opt-out.html" target="_blank" rel="noopener noreferrer nofollow">Opciones y cookies</a>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>YouTube</TableCell>
                  <TableCell>Vídeo web</TableCell>
                  <TableCell>Google Inc.</TableCell>
                  <TableCell>
                    <a href="https://policies.google.com/privacy?hl=es" target="_blank" rel="noopener noreferrer nofollow">Privacidad</a>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Facebook</TableCell>
                  <TableCell>Like, Comments, Feed</TableCell>
                  <TableCell>Meta Platforms, Inc.</TableCell>
                  <TableCell>
                    <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer nofollow">Privacidad</a>
                    <br />
                    <a href="https://www.facebook.com/help/211829542181913" target="_blank" rel="noopener noreferrer nofollow">Complementos</a>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Twitter (X)</TableCell>
                  <TableCell>Follow / Widgets</TableCell>
                  <TableCell>X Corp.</TableCell>
                  <TableCell>
                    <a href="https://twitter.com/es/privacy" target="_blank" rel="noopener noreferrer nofollow">Privacidad</a>
                    <br />
                    <a href="https://help.twitter.com/es/using-twitter/follow-button" target="_blank" rel="noopener noreferrer nofollow">Complementos</a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h2 id="configuracion" className="text-2xl font-bold font-headline mt-8 mb-4">
            ¿Cómo rechazar, desactivar y eliminar las cookies?
          </h2>
          <p>
            El usuario puede impedir o rechazar el uso de cookies, y deshabilitarlas o eliminarlas en cualquier momento
            respecto de su navegación por este sitio web.
          </p>
          <p>
            La mayoría de navegadores permite gestionar las preferencias en cualquier momento. Consulte:
          </p>
          <ul>
            <li>
              Firefox:{" "}
              <a href="https://support.mozilla.org/es/kb/Deshabilitar%20cookies" target="_blank" rel="noopener noreferrer nofollow">
                https://support.mozilla.org/es/kb/Deshabilitar%20cookies
              </a>
            </li>
            <li>
              Chrome:{" "}
              <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer nofollow">
                https://support.google.com/chrome/answer/95647?hl=es
              </a>
            </li>
            <li>
              Internet Explorer:{" "}
              <a
                href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Soporte Microsoft
              </a>
            </li>
            <li>Safari: Safari &gt; Preferencias &gt; Privacidad</li>
            <li>
              Opera:{" "}
              <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer nofollow">
                https://help.opera.com/en/latest/web-preferences/#cookies
              </a>
            </li>
            <li>
              Android (Chrome):{" "}
              <a href="https://support.google.com/chrome/answer/95647?hl=es&co=GENIE.Platform%3DAndroid" target="_blank" rel="noopener noreferrer nofollow">
                Configurar cookies en Android
              </a>
            </li>
            <li>
              iOS (Safari):{" "}
              <a href="https://support.apple.com/es-es/HT201265" target="_blank" rel="noopener noreferrer nofollow">
                Borrar historial y cookies
              </a>
            </li>
          </ul>
          <p>
            Para deshabilitar cookies y dispositivos de almacenamiento y recuperación de datos individualmente puede
            instalar en el navegador extensiones específicas (por ejemplo, “Ghostery”).
          </p>
          <p>
            Algunas características del sitio solo están disponibles si se permite la instalación de cookies. Si decide
            no aceptar o bloquear determinadas cookies (en función de su finalidad), puede verse afectado el
            funcionamiento normal del sitio o el acceso a algunos servicios.
          </p>

          <h2 id="actualizaciones" className="text-2xl font-bold font-headline mt-8 mb-4">
            Actualizaciones y cambios en la política de cookies
          </h2>
          <p>
            El responsable puede modificar esta política en función de cambios en el uso de cookies, nuevas exigencias
            legales o instrucciones de las autoridades de control. Los cambios significativos se publicarán en esta
            misma página. El usuario debe revisarla periódicamente, sin perjuicio de que podamos comunicar cambios
            relevantes mediante avisos en el sitio y/o otros medios.
          </p>
        </article>
      </main>
    </div>
  );
}
