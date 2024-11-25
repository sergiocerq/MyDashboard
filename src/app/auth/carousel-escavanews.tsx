"use client";

import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { news } from "./data/escavanews-data";

/**
 * @description
 * O componente `CarouselEscavaNews` é responsável por renderizar o carrossel de notícias do escavanews do linkedln.
 * Ele utiliza o componente `Carousel` e exibe uma lista de notícias com título, subtítulo e um botão para visualizar a notícia completa no linkedln.
 *
 * @example
 * import { CarouselEscavaNews } from "@/components/carousel-escavanews";
 *
 * function App() {
 *   return (
 *     <div>
 *       <CarouselEscavaNews />
 *     </div>
 *   );
 * }
 *
 * @returns {JSX.Element} Retorna o carrossel de notícias do escavanews.
 */
export function CarouselEscavaNews() {
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[plugin.current]}
      orientation="vertical"
      className="w-full"
    >
      <CarouselContent className="-mt-1 h-[38rem]">
        {news.map((item, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card className="">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.subtitle}</CardDescription>
                  <Button
                    variant={"link"}
                    className="self-start p-0 text-sky-600 hover:text-sky-800"
                    onClick={() => {
                      window.open(item.news, "_blank");
                    }}
                  >
                    Ver Notícia
                  </Button>
                </CardHeader>
                <CardContent className="flex items-center justify-center p-6">
                    <img
                      src={item.image}
                      width={700}
                      height={700}
                      alt="News"
                    />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
