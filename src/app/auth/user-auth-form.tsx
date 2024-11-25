"use client";

import * as React from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderIcon } from "lucide-react";
import { useAuthForm } from "./data/useAuthForm";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string; // Classe TailwindCSS para estilizações adicionais
}

/**
 * @description Componente de formulário para a autenticação do usuário.
 *
 * Este componente renderiza um formulário de autenticação de usuário com campos para
 * entrada de email, um botão de envio e um botão de login com o Google.
 * Ele também exibe um ícone de carregamento enquanto a solicitação de autenticação está sendo processada.
 *
 * @example
 * // Exemplo de uso do componente UserAuthForm
 * import { UserAuthForm } from "@/components/user-auth-form";
 *
 * function App() {
 *   return (
 *     <div>
 *       <UserAuthForm className="custom-class" />
 *     </div>
 *   );
 * }
 */
export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
   const { isLoading, onSubmit, credentials, handleChange } = useAuthForm();

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              name="email"
              onChange={handleChange}
            value={credentials.email}
              />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="senha">
              Senha
            </Label>
            <Input
              id="password"
              name="senha"
              placeholder="Senha"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              onChange={handleChange}
              value={credentials.senha}
            />
          </div>
          <Button
            disabled={isLoading}
            className="bg-amber-500 hover:bg-amber-700 font-semibold"
          >
            {isLoading && <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />}
            Entrar
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Ou continue com
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Image
            src="/google.svg"
            width={16}
            height={16}
            alt="GitHub"
            className="mr-2"
          />
        )}{" "}
        Google
      </Button>
    </div>
  );
}
