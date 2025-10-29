// app/servicios/[slug]/page.tsx
import type { Metadata } from "next";
import Header from "@/components/landing/header";
import Link from "next/link";
import { getService, SERVICE_SLUGS } from "@/lib/services-data";
import { notFound } from "next/navigation";

export const dynamic = "error";
export const revalidate = false;

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: `${s.title} | Autocentro Aeropuerto`,
    description: s.summary,
  };
}

export default function ServicePage({ params }: Props) {
  const s = getService(params.slug);
  if (!s) notFound();
  const Icon = s.icon;

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header /> {/* 👈 igual que en cookies */}

      <main className="py-12">
        <div className="container mx-auto max-w-4xl">
          <nav className="text-xs text-muted-foreground mb-3">
            <Link href="/">Inicio</Link> <span className="mx-1">/</span>
            <Link href="/servicios/">Servicios</Link> <span className="mx-1">/</span>
            <span className="text-foreground">{s.title}</span>
          </nav>

          <h1 className="text-2xl md:text-3xl font-bold font-headline flex items-center gap-2">
            <span className="inline-flex rounded-xl p-2 ring-1 ring-primary/20 bg-primary/5">
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
            </span>
            {s.title}
          </h1>
          {s.hero && <p className="mt-2 text-muted-foreground">{s.hero}</p>}

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <section className="rounded-2xl border p-5">
              <h2 className="font-semibold mb-2">Qué incluye</h2>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {s.includes?.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section className="rounded-2xl border p-5">
              <h2 className="font-semibold mb-2">Beneficios</h2>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {s.benefits?.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <a
              href={`https://wa.me/34644032823?text=${encodeURIComponent("Hola, quiero pedir cita para: " + s.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-semibold bg-primary text-primary-foreground transition-transform active:scale-95 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
            >
              Pedir cita por WhatsApp
            </a>

            <a
              href="tel:+34957468222"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-semibold bg-primary text-primary-foreground transition-transform active:scale-95 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
            >
              Llamar Aeropuerto
            </a>

            <a
              href="tel:+34957462068"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-semibold bg-primary text-primary-foreground transition-transform active:scale-95 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
            >
              Llamar Miralbaida
            </a>

            <a
              href="tel:+34957429586"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-semibold bg-primary text-primary-foreground transition-transform active:scale-95 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
            >
              Llamar Amargacena
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
