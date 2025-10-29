// components/landing/services.tsx
"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/lib/services-data";

type ServicesSectionProps = {
  showHeading?: boolean;
  heading?: string;
  subheading?: string;
};

export default function ServicesSection({
  showHeading = true,
  heading = "Servicios",
  subheading = "Mantenimiento y mecánica rápida con garantía.",
}: ServicesSectionProps) {
  return (
    <section id="servicios" className="py-16 bg-background">
      <div className="container mx-auto">
        {showHeading && (
          <header className="mb-10 text-center">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Qué hacemos</p>
            <h2 className="text-2xl md:text-3xl font-bold font-headline">{heading}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{subheading}</p>
          </header>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Link key={s.slug} href={`/servicios/${s.slug}`} aria-label={`Ver detalles de ${s.title}`}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-0.5 group rounded-2xl border-border/60">
                  <CardHeader className="pb-2 flex items-start gap-3">
                    <div className="rounded-xl p-2 ring-1 ring-primary/20 bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-base font-semibold">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>{s.summary}</p>
                    <span className="mt-4 inline-block text-[11px] font-medium text-primary/80 group-hover:text-primary">
                      Ver detalles →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
