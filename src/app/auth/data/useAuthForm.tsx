import { useRouter } from "next/navigation";
import React from "react";

/**
 * @description
 * Custom Hook para gerenciar o estado e as ações do formulário de login do usuário.
 *
 * O hook fornece o estado de carregamento, as credenciais do usuário, e as funções para atualizar o estado nos campos do formulário e para enviá-lo.
 *
 * @example
 * // Exemplo de uso do hook useAuthForm
 * import { useAuthForm } from "@/hooks/useAuthForm";
 *
 * function UserAuthForm() {
 *   const { isLoading, onSubmit, credentials, handleChange } = useAuthForm();
 *
 *   return (
 *     <form onSubmit={onSubmit}>
 *       <input
 *         type="email"
 *         name="email"
 *         value={credentials.email}
 *         onChange={handleChange}
 *         disabled={isLoading}
 *       />
 *       <input
 *         type="password"
 *         name="senha"
 *         value={credentials.senha}
 *         onChange={handleChange}
 *         disabled={isLoading}
 *       />
 *       <button type="submit" disabled={isLoading}>
 *         {isLoading ? "Carregando..." : "Entrar"}
 *       </button>
 *     </form>
 *   );
 * }
 *
 * @returns {object} Retorna um objeto contendo:
 * - `isLoading` (boolean): Indica se a requisição está sendo enviada ou não.
 * - `onSubmit` (function): Função para submeter o envio do formulário à um eventual back-end.
 * - `credentials` (object): Objeto contendo as credenciais do usuário (email e senha).
 * - `handleChange` (function): Função para atualizar o estado dos campos do formulário.
 */
export const useAuthForm = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const [credentials, setCredentials] = React.useState({
    email: "sergio.projeto@escavador.com.br",
    senha: "**********",
  });

  console.log(credentials);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    router.push("/painel-inicial");
  }

  return {
    isLoading,
    onSubmit,
    credentials,
    handleChange,
  };
};
