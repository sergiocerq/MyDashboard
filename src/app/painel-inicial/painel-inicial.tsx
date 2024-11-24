import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "../sidebar/app-sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PainelInicial = () => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-20 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb className="top-0 stroke-lime-50">
                <BreadcrumbList>
                  <BreadcrumbItem className="md:block text-md md:text-lg">
                    {/* <BreadcrumbLink
                      className="flex items-center justify-center gap-3 "
                    >
                    </BreadcrumbLink> */}
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="md:block" />
                  <BreadcrumbItem className="md:block text-md md:text-lg">
                    <BreadcrumbLink className="flex items-center justify-center gap-3 ">
                      Painel Inicial
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <div className="flex items-center space-x-2">
                {/* <CalendarDateRangePicker /> */}
              </div>
            </div>
            <Tabs defaultValue="geral" className="space-y-4">
              <TabsList>
                <TabsTrigger value="geral">Geral</TabsTrigger>
                <TabsTrigger value="trabalhista" disabled>
                  Tempo
                </TabsTrigger>
                <TabsTrigger value="penal" disabled>
                  Geográfico
                </TabsTrigger>
                <TabsTrigger value="civil" disabled>
                  Partes Envolvidas
                </TabsTrigger>
              </TabsList>
              <TabsContent value="geral" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Processos
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+ 12.000</div>
                      <p className="text-xs text-muted-foreground">
                        +26.8% são processos ativos
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Movimentações Recentes
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+3.200</div>
                      <p className="text-xs text-muted-foreground">
                        +17.1% em comparação ao mês passado
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Tempo Médio Resolução
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <path d="M2 10h20" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+ 180 dias</div>
                      <p className="text-xs text-muted-foreground">
                        Aproximadamente 6 meses
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Valor das Causas
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">R$ 25.289.357,96</div>
                      <p className="text-xs text-muted-foreground">
                        + R$ 2.083,33 por processo
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Evolução Número de Processos</CardTitle>
                      <CardDescription>
                        Visualização da evolução do número de processos ao longo
                        do tempo
                      </CardDescription>
                    </CardHeader>
                    <CardContent></CardContent>
                  </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Processos X Status</CardTitle>
                      <CardDescription>
                        Visualização dos processos por status
                      </CardDescription>
                    </CardHeader>
                    <CardContent></CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};
