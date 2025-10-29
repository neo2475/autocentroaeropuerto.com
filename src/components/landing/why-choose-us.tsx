import { Award, ShieldCheck, FileText, Users } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Mecánicos Cualificados',
    description: 'Contamos con un equipo de profesionales altamente cualificados y con gran experiencia.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Garantía en Todas las Reparaciones',
    description: 'Tranquilidad total con nuestra garantía por escrito.',
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Presupuestos Claros y Sin Sorpresas',
    description: 'Aprobamos contigo cada costo antes de comenzar.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Atención al Cliente Excepcional',
    description: 'Te mantenemos informado durante todo el proceso.',
  },
];

export default function WhyChooseUsSection() {
  const teamImage = PlaceHolderImages.find(p => p.id === 'mechanic-team');
  return (
    <section id="sobre-nosotros" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Confianza y Calidad Garantizada
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nos comprometemos a ofrecer un servicio excepcional y resultados que superen tus expectativas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-6">
                {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        {feature.icon}
                    </div>
                    <div>
                    <h3 className="text-lg font-bold font-headline">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                {teamImage && (
                  <Image
                      src={teamImage.imageUrl}
                      width="550"
                      height="400"
                      alt={teamImage.description}
                      data-ai-hint={teamImage.imageHint}
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                )}
            </div>
        </div>
      </div>
    </section>
  );
}
