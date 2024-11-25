import AuthenticationPage from "./auth/authentication-page";
import { Page } from "./painel-inicial/page";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <AuthenticationPage />
      {/* <Page/> */}
    </div>
  );
}
