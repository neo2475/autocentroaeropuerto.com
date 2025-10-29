// app/servicios/page.tsx
import type { Metadata } from "next";
import Header from "@/components/landing/header";
import ServicesSection from "@/components/landing/services";

export const dynamic = "error";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Servicios | Autocentro Aeropuerto",
  description:
    "Mantenimiento, neumáticos, frenos, diagnóstico y más. Consulta nuestros servicios y pide cita.",
};

export default function ServicesIndexPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />

      <main className="py-12">
        <div className="container mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold font-headline">Servicios</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Mantenimiento rápido y mecánica esencial para tu vehículo.
            </p>
          </header>

          {/* Ocultamos el encabezado interno */}
          <ServicesSection showHeading={false} />
        </div>
      </main>
    </div>
  );
}
