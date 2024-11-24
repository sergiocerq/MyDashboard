import * as React from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * @description
 * Hook que verifica se a largura da janela é menor que um breakpoint definido, indicando se o dispositivo é móvel(celulares).
 *
 * @example
 * // Exemplo de uso do hook useIsMobile em um componente
 * import { useIsMobile } from "@/hooks/use-mobile";
 *
 * function MyComponent() {
 *   const isMobile = useIsMobile();
 *
 *   return (
 *     <div>
*         {isMobile ? (
*           <div>Este é um celular</div>
*         ) : (
*           <div>Este é um desktop/computador</div>
*         )}
 *     </div>
 *   );
 * }
 *
 * @returns {boolean} Retorna `true` se a largura da janela for menor que o breakpoint definido, indicando um dispositivo móvel. Caso contrário, retorna `false`.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
