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
import Image from "next/image";

export function CarouselEscavaNews() {
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  );

  const news = [
    {
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQGUbRQ6SulVvA/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1728415877984?e=1737590400&v=beta&t=h-oGENYF15LTGCxe-gXEtv_ELb4g_Vgr3XK8iFTl7K0",
      news: "https://www.linkedin.com/pulse/dados-judiciais-aceleram-decis%C3%B5es-e-s%C3%A3o-importantes-para-diversos-7olcf/?trackingId=GMuF2y%2FqSt6jjzLtYmVy5A%3D%3D",
      title: "Dados judiciais",
      subtitle:
        "Dados judiciais aceleram decisões e são importantes para diversos nichos. Já imaginou como eles podem auxiliar uma empresa da área de transportes?",
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQGMKV82KoDB8A/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1727211118096?e=1737590400&v=beta&t=iY5IKjBCanSAmaiKSnloThbNacZXK9DbYV5aiShkyzg",
      news: "https://www.linkedin.com/pulse/o-escavador-para-al%C3%A9m-do-setembro-amarelo-como-sa%C3%BAde-mental-ip48f/?trackingId=DPLkrjfaQFuf38uzj%2B35hw%3D%3D",
      title: "Setembro Amarelo",
      subtitle:
        "O Escavador para além do setembro amarelo: como a saúde mental é cultivada o ano inteiro?",
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQEN_N_7lbN7wQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1726250242264?e=1737590400&v=beta&t=DINHqeZ63UNwEAxBy0QN_sI45Vt9tUxN2G_mXpgE0xc",
      news: "https://www.linkedin.com/pulse/como-ia-tem-revolucionado-o-escavador-escavador-p128f/?trackingId=qLU1ThUoQVSRXUUYXO8Dow%3D%3D",
      title: "Inteligência Artificial",
      subtitle: "Como a IA tem revolucionado o Escavador",
    },
  ];

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
