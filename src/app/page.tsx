import AuthenticationPage from "./auth/authentication-page";
import { PainelInicial } from "./painel-inicial/painel-inicial";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <AuthenticationPage />
      {/* <PainelInicial/> */}
    </div>
  );
}
