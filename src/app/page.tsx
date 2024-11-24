import { TowerControl } from "lucide-react";
import Image from "next/image";
import AuthenticationPage from "./auth/authentication-page";

export default function Home() {
  return (
    <div className="h-screen w-full">
      
      <AuthenticationPage />
    </div>
  );
}
