import { useRouter } from "next/navigation";
import React from "react";

export const useAuthForm = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const [credentials, setCredentials] = React.useState({
    email: 'sergio.projeto@escavador.com.br',
    senha: '**********',
  });

  console.log(credentials)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/painel-inicial");
    }, 800);
  }

  return {
    isLoading,
    onSubmit,
    credentials,
    handleChange
  };
}