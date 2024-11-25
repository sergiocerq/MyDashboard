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
import { DateRangePicker } from "./date-range-picker";
import { Clock, DollarSign, FileText, Layers3 } from "lucide-react";
import { ChartProcessos_X_Status } from "./chart-processos-x-status";
import { ChartEvolucaoProcessos } from "./chart-evolucao-processos";
import { useChartData } from "./data/useChartData";

/**
 * @description O componente é responsável por renderizar o painel inicial.
 * Ele inclui Cards KDE com contadores gerais sobre informações dos processos e gráficos que mostram a evolução dos processos ao longo do tempo e a distribuição deles por status.
 *
 * @example
 * import Page from "@/components/page";
 *
 * function App() {
 *   return (
 *     <div>
 *       <Page />
 *     </div>
 *   );
 * }
 *
 * @returns {JSX.Element} Retorna a página principal do painel inicial com gráficos de evolução e distribuição dos processos.
 */
export default function Page() {
  const { getDataToEvolucaoProcessos, getDataToChartProcessos_X_Status } =
    useChartData();

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
              <h2 className="text-3xl font-bold tracking-tight">
                Painel Inicial
              </h2>
              <div className="flex items-center space-x-2">
                <DateRangePicker />
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
                      <FileText className="h-4 w-4 text-muted-foreground" />
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
                      <Layers3 className="h-4 w-4 text-muted-foreground" />
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
                      <Clock className="h-4 w-4 text-muted-foreground" />
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
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">R$ 25.289.357,96</div>
                      <p className="text-xs text-muted-foreground">
                        + R$ 2.083,33 por processo
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
                  <ChartEvolucaoProcessos
                    chartData={getDataToEvolucaoProcessos()}
                  />
                  <ChartProcessos_X_Status
                    chartData={getDataToChartProcessos_X_Status()}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};
