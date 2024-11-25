"use client";

import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChartProcessos_X_StatusData } from "./data/types";
import { aguardando_decisao_status_color, em_andamento_status_color, encerrado_status_color } from "./data/contants";

interface IChartProcessos_X_StatusProps {
  chartData: ChartProcessos_X_StatusData[]
}

/**
 * @description
 * O componente é responsável por renderizar um gráfico que mostra a distribuição dos processos por status.
 * Ele permite visualizar diferentes estados dos processos em forma de pizza, com um contador exibindo o total dos processos pelo status selecionado.
 *
 * @example
 * import { ChartProcessos_X_Status } from "@/components/chart-processos-x-status";
 *
 * const data = [
 *   { status: "Em andamento", processo: 186, fill: "#fa7d08" },
 *   { status: "Encerrado", processo: 305, fill: "#fcba04" },
 *   { status: "Aguardando Decisão", processo: 237, fill: "#ffec3e" },
 * ];
 *
 * function App() {
 *   return (
 *     <div>
 *       <ChartProcessos_X_Status chartData={data} />
 *     </div>
 *   );
 * }
 *
 * @param {ChartProcessos_X_StatusData[]} props.chartData - Um array de objetos que contém os dados dos processos por status.
 */
export function ChartProcessos_X_Status({chartData}: IChartProcessos_X_StatusProps) {

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  processo: {
    label: "Processos",
  },
  "Em andamento": {
    label: "Em andamento",
    color: em_andamento_status_color,
  },
  "Encerrado": {
    label: "Encerrado",
    color: encerrado_status_color,
  },
  "Aguardando Decisão": {
    label: "Aguardando Decisão",
    color: aguardando_decisao_status_color,
  },
} satisfies ChartConfig;

  const id = "pie-interactive";
  const [activeStatus, setActiveStatus] = React.useState(chartData[0].status);

  const activeIndex = React.useMemo(
    () => chartData.findIndex((item) => item.status === activeStatus),
    [activeStatus]
  );
  const status = React.useMemo(() => chartData.map((item) => item.status), []);

  return (
    <Card data-chart={id} className="flex flex-col col-span-6 xl:col-span-2">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Processos X Status</CardTitle>
          <CardDescription>
            Visualização dos processos por status
          </CardDescription>
        </div>
        <Select value={activeStatus} onValueChange={setActiveStatus}>
          <SelectTrigger
            className="ml-auto h-7 w-[180px] rounded-lg pl-2.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {status.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig];

              if (!config) {
                return null;
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: config.color, 
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer id={id} config={chartConfig} className="mx-auto w-full">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="processo"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {chartData[activeIndex].processo.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Processos
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
