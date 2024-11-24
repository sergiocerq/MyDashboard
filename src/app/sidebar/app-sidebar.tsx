"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import {
  Blocks,
  BookOpen,
  CircleHelp,
  FileText,
  Gavel,
  MousePointerClick,
  Settings2,
} from "lucide-react";
import imageAvatar from "../favicon.ico";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { NavPainelInicial } from "./nav-painel-inicial";

const email = "projeto.sergio@escavador.com.br";
const nome = "Sérgio Cerqueira";
const iniciais = "SC";

const data = {
  user: {
    name: nome,
    email,
    avatar: imageAvatar,
    iniciais,
  },
  painelPrincipal: [
    {
      title: "Painel Inicial",
      url: "/painel-inicial",
      icon: Blocks,
      isActive: false,
    },
  ],
  navMain: [
    {
      title: "Processos Jurídicos",
      url: "#",
      icon: Gavel,
      isActive: false,
    },
    {
      title: "Resultados e sentenças",
      url: "#",
      icon: FileText,
      isActive: true,
      items: [
        {
          title: "Liminares",
          url: "#",
        },
        {
          title: "Sentenças",
          url: "#",
        },
        {
          title: "Despachos",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Centro do Conhecimento",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "FAQ",
          url: "#",
          icon: CircleHelp,
        },
        {
          title: "Outras Soluções",
          url: "#",
          icon: MousePointerClick,
        },
      ],
    },
    {
      name: "Configurações",
      url: "#",
      icon: Settings2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavPainelInicial items={data.painelPrincipal} />
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
