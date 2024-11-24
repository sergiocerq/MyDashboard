import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "./user-auth-form";
import { CarouselEscavaNews } from "./carousel-escavanews";

export const metadata: Metadata = {
  title: "Autenticação",
  description: "Página de autenticação e criação de conta do projeto Escavador",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="h-1/3 lg:hidden"></div>
      <div className="container relative max-w-xs mx-auto h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 ">
        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-white" />
          <div className="relative z-20 flex flex-col items-start gap-12 text-lg font-medium">
            <Image
              src="/logo-escavador.svg"
              width={150}
              height={150}
              alt="Logo"
              className="mr-2 fill-white"
            />
            <div className="text-black w-full">
              <CarouselEscavaNews />
            </div>
          </div>

          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2 text-zinc-900">
              <p className="text-lg">
                &ldquo;Esse sistema é excelente, me ajudou a encontrar o que eu
                precisava de uma forma muito mais rápido do que eu imaginava.
                Recomendo bastante!&rdquo;
              </p>
              <footer className="text-sm">Sérgio Cerqueira</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Criar uma conta
              </h1>
              <p className="text-sm text-muted-foreground">
                Insira o seu email abaixo para criar a sua conta
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Ao clicar em continuar, você concorda com os nossos{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Termos de Serviço
              </Link>{" "}
              e{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
