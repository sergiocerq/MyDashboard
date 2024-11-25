"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartEvolucaoProcessos } from "./data/types";

const chartConfig = {
  views: {
    label: "Processos",
  },
  em_andamento: {
    label: "Em andamento",
    color: "hsl(var(--chart-1))",
  },
  encerrados: {
    label: "Encerrados",
    color: "hsl(var(--chart-2))",
  },
  aguardando_decisao: {
    label: "Aguardando Decisão",
    color: "hsl(var(--chart-3))",
  },
  total: {
    label: "Total",
    color: "#000",
  },
} satisfies ChartConfig;

interface IChartEvolucaoProcessosProps {
  chartData: ChartEvolucaoProcessos[]
}

export function ChartEvolucaoProcessos({chartData}: IChartEvolucaoProcessosProps) {
  const [activeChart, SetActiveChart] =
    React.useState<keyof typeof chartConfig>("total");

  const total = React.useMemo(
    () => ({
      em_andamento: chartData.reduce((acc, curr) => acc + curr.em_andamento, 0),
      encerrados: chartData.reduce((acc, curr) => acc + curr.encerrados, 0),
      aguardando_decisao: chartData.reduce(
        (acc, curr) => acc + curr.aguardando_decisao,
        0
      ),
      total: chartData.reduce(
        (acc, curr) =>
          acc + curr.aguardando_decisao + curr.encerrados + curr.em_andamento,
        0
      ),
    }),
    []
  );

  return (
    <Card className="col-span-6">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Evolução Temporal dos Processos</CardTitle>
          <CardDescription>
            Visualização da evolução do número de processos ao longo do tempo
          </CardDescription>
        </div>
        <div className="flex">
          {["total", "em_andamento", "encerrados", "aguardando_decisao"].map(
            (key) => {
              const chart = key as keyof typeof chartConfig;

              return (
                <button
                  key={chart}
                  data-active={activeChart === chart}
                  className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                  onClick={() => SetActiveChart(chart)}
                >
                  <span className="text-xs text-muted-foreground">
                    {chartConfig[chart].label}
                  </span>
                  <span className="text-lg font-bold leading-none sm:text-3xl">
                    {total[key as keyof typeof total].toLocaleString()}
                  </span>
                </button>
              );
            }
          )}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        {activeChart === "total" ? (
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[350px] w-full"
          >
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                className="first-letter:uppercase"
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => value}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px] first-letter:uppercase"
                    nameKey="views"
                    labelFormatter={(value) => value}
                  />
                }
              />
              <Bar
                dataKey={"em_andamento"}
                fill={`hsl(var(--chart-1))`}
                radius={[0, 0, 4, 4]}
                stackId="a"
              />
              <Bar
                dataKey={"encerrados"}
                fill={`hsl(var(--chart-2))`}
                radius={[0, 0, 0, 0]}
                stackId="a"
              />
              <Bar
                dataKey={"aguardando_decisao"}
                fill={`hsl(var(--chart-3))`}
                radius={[4, 4, 0, 0]}
                stackId="a"
              />
              <ChartLegend content={<ChartLegendContent />} />
            </BarChart>
          </ChartContainer>
        ) : (
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[350px] w-full"
          >
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                className="first-letter:uppercase"
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => value}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px] first-letter:uppercase"
                    nameKey="views"
                    labelFormatter={(value) => value}
                  />
                }
              />
              <Bar
                dataKey={activeChart}
                fill={`var(--color-${activeChart}, #000)`}
                radius={[4, 4, 4, 4]}
              />
              <ChartLegend content={<ChartLegendContent />} />
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}
