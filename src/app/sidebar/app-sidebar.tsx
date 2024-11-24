"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import {
  AudioWaveform,
  Blocks,
  BookOpenCheck,
  BrainCircuit,
  CircleHelp,
  Command,
  GalleryVerticalEnd,
  MousePointerClick,
  Settings2,
  Wrench,
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
      icon: Wrench,
      isActive: true,
      items: [
        {
          title: "Liminares",
          url: "#",
        },
        {
          title: "Histórico",
          url: "#",
        },
      ],
    },
    {
      title: "Resultados e Sentenças",
      url: "#",
      icon: BookOpenCheck,
      isActive: false,
    },
  ],
  projects: [
    {
      name: "Centro do Conhecimento",
      url: "#",
      icon: BrainCircuit,
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
