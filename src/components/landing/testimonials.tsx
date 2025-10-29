'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

const testimonials = [
  { name: 'Alfredo M.', text: 'Un trato excelente, me dieron cita inmediata y todo muy rápido y el trato... GENIAL Lo recomiendo 100%', stars: 5, avatar: '/Alfredo_M_perfil.png' },
  { name: 'Pilar A.', text: 'Servicio muy profesional y excelente trato. Confío plenamente en su servicio', stars: 5, avatar: '/Pilar_A_perfil.png' },
  { name: 'Félix T. M.', text: 'Gracias por la atención y el trato profesional. Resolutivos y rápidos.', stars: 5, avatar: '/Felix_T_M_perfil.png' },
  { name: 'Javi D. H.', text: 'Excelente calidad relación precio y sobre todo el trato personal, gracias a Antonio y a todo su equipo.', stars: 5, avatar: '/Javi_D_H_perfil.png' },
  { name: 'Antonio M. R.', text: 'Muy buen trato personal y profesional. Magnífica atención y consejos para el mantenimiento del vehículo.', stars: 5, avatar: '/Antonio_M_R_perfil.png' },
  { name: 'Edu', text: 'En neumaticos son unos profesionales. Tienen personal cualificado y maquinaria muy actual. El trabajo realizado ha quedado perfecto. Gracias por todo, sin duda volveré y lo recomiendo al.100%', stars: 5, avatar: '/Edu_perfil.png' },
  { name: 'Alonso Rojas Bermúdez', text: 'Un trato genial , una profesionalidad y servicio inmejorable. Me lo recomendó un amigo y ahora lo recomiendo yo 👍👍…', stars: 5, avatar: '/A_perfil.png' },
  { name: 'Rafaelmagister', text: 'Más de 20 años viniendo a este taller. Precio excelente. Trato personal inmejorable. Profesionalidad sin competencia. Ningún otro taller está a la altura. Taller de primera división. Honestidad, transparencia, fiabilidad, garantía, tranquilidad, rapidez, agilidad, asesoramiento. El mejor servicio.', stars: 5, avatar: '/Rafael_perfil.png' },
  { name: 'J.R.', text: 'Muy buen trato al cliente, me atendieron explicándome todo al detalle y de forma profesional, los recomiendo 100%', stars: 5, avatar: '/JR_perfil.png' },
  { name: 'Paco Arevalo', text: 'Excelente. La atención siempre, el trato cercano, consejos profesionales y precios normales. Mi valoración personal es por tener un lugar donde dejar la autocaravana sin preocupaciones. 10/10', stars: 5, avatar: '/Paco_perfil.png' },
];

export default function TestimonialsSection() {
  const avatarImage = PlaceHolderImages.find((p) => p.id === 'avatar');

  // Autoplay más robusto (pausa al interactuar/focus/hover)
  const plugin = React.useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  // Respeta usuarios con “reduce motion”
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section
      id="testimonios"
      className="w-full py-14 md:py-24 lg:py-28 bg-muted/20 dark:bg-gray-950/40"
      aria-labelledby="testimonios-heading"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <h2
            id="testimonios-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-headline text-foreground"
          >
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-lg">
            La satisfacción de nuestros clientes es nuestra mayor prioridad.
          </p>
        </div>

        <Carousel
          plugins={prefersReducedMotion ? [] : [plugin.current]}
          opts={{ align: 'start', loop: true }}
          className="w-full max-w-5xl mx-auto mt-10 md:mt-12"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          aria-label="Carrusel de opiniones de clientes"
        >
          <CarouselContent>
            {testimonials.map((t, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col border border-border/70 bg-background/80 backdrop-blur">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center flex-grow">
                      {/* Estrellas con texto accesible */}
                      <div className="flex mb-3" aria-hidden="true">
                        {Array.from({ length: t.stars }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="sr-only">{`${t.stars} de 5 estrellas`}</span>

                      {/* Texto */}
                      <p className="text-muted-foreground mb-5 leading-relaxed">
                        “{t.text}”
                      </p>

                      {/* Persona */}
                      <div className="flex items-center gap-3">
                        <Avatar className="size-10">
                          {t.avatar ? (
                            <AvatarImage
                              src={t.avatar}
                              alt={`Avatar de ${t.name}`}
                              width={40}
                              height={40}
                            />
                          ) : (
                            avatarImage && (
                              <AvatarImage
                                src={`${avatarImage.imageUrl.replace('1759188602', index.toString())}`}
                                alt={avatarImage.description || 'Cliente'}
                                data-ai-hint={avatarImage.imageHint}
                                width={40}
                                height={40}
                              />
                            )
                          )}
                          <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="font-semibold font-headline text-foreground">{t.name}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controles accesibles */}
          <CarouselPrevious aria-label="Opinión anterior" className="aria-[disabled=true]:opacity-30" />
          <CarouselNext aria-label="Opinión siguiente" className="aria-[disabled=true]:opacity-30" />
        </Carousel>

        {/* Imagen Euromaster debajo del carrusel */}
        <div className="mt-12 md:mt-14 flex justify-center">
          <Image
            src="/euromaster_mejor_valorados.webp"
            alt="Euromaster — Talleres mejor valorados por los clientes"
            width={960}
            height={360}
            sizes="(max-width: 768px) 90vw, 960px"
            className="rounded-2xl shadow-xl object-contain dark:opacity-90 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
