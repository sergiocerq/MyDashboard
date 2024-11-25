import { ChartEvolucaoProcessos } from "../chart-evolucao-processos";
import { aguardando_decisao_status_color, em_andamento_status_color, encerrado_status_color } from "./contants";

export const useChartData = () => {
  const chartData = [
    {
      month: "Nov 2024",
      em_andamento: 446,
      encerrados: 400,
      aguardando_decisao: 120,
    },
    {
      month: "Out 2024",
      em_andamento: 103,
      encerrados: 160,
      aguardando_decisao: 50,
    },
    {
      month: "Set 2024",
      em_andamento: 149,
      encerrados: 200,
      aguardando_decisao: 75,
    },
    {
      month: "Ago 2024",
      em_andamento: 448,
      encerrados: 490,
      aguardando_decisao: 140,
    },
    {
      month: "Jul 2024",
      em_andamento: 434,
      encerrados: 380,
      aguardando_decisao: 130,
    },
    {
      month: "Jun 2024",
      em_andamento: 141,
      encerrados: 190,
      aguardando_decisao: 60,
    },
    {
      month: "Mai 2024",
      em_andamento: 480,
      encerrados: 530,
      aguardando_decisao: 150,
    },
    {
      month: "Abr 2024",
      em_andamento: 317,
      encerrados: 270,
      aguardando_decisao: 100,
    },
    {
      month: "Mar 2024",
      em_andamento: 169,
      encerrados: 210,
      aguardando_decisao: 80,
    },
    {
      month: "Fev 2024",
      em_andamento: 408,
      encerrados: 450,
      aguardando_decisao: 110,
    },
    {
      month: "Jan 2024",
      em_andamento: 341,
      encerrados: 290,
      aguardando_decisao: 90,
    },
    {
      month: "Dez 2023",
      em_andamento: 107,
      encerrados: 170,
      aguardando_decisao: 40,
    },
    {
      month: "Nov 2023",
      em_andamento: 475,
      encerrados: 520,
      aguardando_decisao: 135,
    },
    {
      month: "Out 2023",
      em_andamento: 371,
      encerrados: 310,
      aguardando_decisao: 95,
    },
    {
      month: "Set 2023",
      em_andamento: 307,
      encerrados: 350,
      aguardando_decisao: 85,
    },
    {
      month: "Ago 2023",
      em_andamento: 426,
      encerrados: 380,
      aguardando_decisao: 120,
    },
    {
      month: "Jul 2023",
      em_andamento: 81,
      encerrados: 130,
      aguardando_decisao: 30,
    },
    {
      month: "Jun 2023",
      em_andamento: 492,
      encerrados: 420,
      aguardando_decisao: 140,
    },
    {
      month: "Mai 2023",
      em_andamento: 92,
      encerrados: 150,
      aguardando_decisao: 35,
    },
    {
      month: "Abr 2023",
      em_andamento: 155,
      encerrados: 200,
      aguardando_decisao: 60,
    },
    {
      month: "Mar 2023",
      em_andamento: 438,
      encerrados: 480,
      aguardando_decisao: 125,
    },
    {
      month: "Fev 2023",
      em_andamento: 385,
      encerrados: 320,
      aguardando_decisao: 100,
    },
    {
      month: "Jan 2023",
      em_andamento: 323,
      encerrados: 370,
      aguardando_decisao: 90,
    },
    {
      month: "Dez 2022",
      em_andamento: 294,
      encerrados: 250,
      aguardando_decisao: 70,
    },
    {
      month: "Nov 2022",
      em_andamento: 88,
      encerrados: 140,
      aguardando_decisao: 35,
    },
    {
      month: "Out 2022",
      em_andamento: 439,
      encerrados: 380,
      aguardando_decisao: 115,
    },
    {
      month: "Set 2022",
      em_andamento: 103,
      encerrados: 160,
      aguardando_decisao: 50,
    },
    {
      month: "Ago 2022",
      em_andamento: 470,
      encerrados: 410,
      aguardando_decisao: 130,
    },
    {
      month: "Jul 2022",
      em_andamento: 178,
      encerrados: 200,
      aguardando_decisao: 65,
    },
    {
      month: "Jun 2022",
      em_andamento: 178,
      encerrados: 230,
      aguardando_decisao: 55,
    },
    {
      month: "Mai 2022",
      em_andamento: 340,
      encerrados: 280,
      aguardando_decisao: 90,
    },
    {
      month: "Abr 2022",
      em_andamento: 78,
      encerrados: 130,
      aguardando_decisao: 25,
    },
    {
      month: "Mar 2022",
      em_andamento: 233,
      encerrados: 190,
      aguardando_decisao: 80,
    },
    {
      month: "Fev 2022",
      em_andamento: 420,
      encerrados: 460,
      aguardando_decisao: 110,
    },
    {
      month: "Jan 2022",
      em_andamento: 213,
      encerrados: 170,
      aguardando_decisao: 65,
    },
    {
      month: "Dez 2021",
      em_andamento: 201,
      encerrados: 250,
      aguardando_decisao: 60,
    },
    {
      month: "Nov 2021",
      em_andamento: 294,
      encerrados: 220,
      aguardando_decisao: 85,
    },
    {
      month: "Out 2021",
      em_andamento: 252,
      encerrados: 290,
      aguardando_decisao: 75,
    },
    {
      month: "Set 2021",
      em_andamento: 81,
      encerrados: 120,
      aguardando_decisao: 35,
    },
    {
      month: "Ago 2021",
      em_andamento: 82,
      encerrados: 140,
      aguardando_decisao: 30,
    },
    {
      month: "Jul 2021",
      em_andamento: 177,
      encerrados: 230,
      aguardando_decisao: 55,
    },
    {
      month: "Jun 2021",
      em_andamento: 235,
      encerrados: 180,
      aguardando_decisao: 70,
    },
    {
      month: "Mai 2021",
      em_andamento: 315,
      encerrados: 350,
      aguardando_decisao: 95,
    },
    {
      month: "Abr 2021",
      em_andamento: 499,
      encerrados: 420,
      aguardando_decisao: 140,
    },
    {
      month: "Mar 2021",
      em_andamento: 338,
      encerrados: 400,
      aguardando_decisao: 110,
    },
    {
      month: "Fev 2021",
      em_andamento: 473,
      encerrados: 380,
      aguardando_decisao: 130,
    },
    {
      month: "Jan 2021",
      em_andamento: 448,
      encerrados: 490,
      aguardando_decisao: 120,
    },
    {
      month: "Dez 2020",
      em_andamento: 197,
      encerrados: 160,
      aguardando_decisao: 50,
    },
    {
      month: "Nov 2020",
      em_andamento: 197,
      encerrados: 240,
      aguardando_decisao: 55,
    },
    {
      month: "Out 2020",
      em_andamento: 335,
      encerrados: 270,
      aguardando_decisao: 85,
    },
    {
      month: "Set 2020",
      em_andamento: 293,
      encerrados: 330,
      aguardando_decisao: 90,
    },
    {
      month: "Ago 2020",
      em_andamento: 227,
      encerrados: 180,
      aguardando_decisao: 70,
    },
    {
      month: "Jul 2020",
      em_andamento: 149,
      encerrados: 210,
      aguardando_decisao: 50,
    },
    {
      month: "Jun 2020",
      em_andamento: 388,
      encerrados: 300,
      aguardando_decisao: 100,
    },
    {
      month: "Mai 2020",
      em_andamento: 498,
      encerrados: 520,
      aguardando_decisao: 145,
    },
    {
      month: "Abr 2020",
      em_andamento: 481,
      encerrados: 390,
      aguardando_decisao: 130,
    },
    {
      month: "Mar 2020",
      em_andamento: 385,
      encerrados: 420,
      aguardando_decisao: 105,
    },
    {
      month: "Fev 2020",
      em_andamento: 247,
      encerrados: 190,
      aguardando_decisao: 60,
    },
    {
      month: "Jan 2020",
      em_andamento: 293,
      encerrados: 310,
      aguardando_decisao: 80,
    },
    {
      month: "Dez 2019",
      em_andamento: 165,
      encerrados: 220,
      aguardando_decisao: 45,
    },
  ];

  const getDataToEvolucaoProcessos = (): ChartEvolucaoProcessos[] => chartData;

  const getDataToChartProcessos_X_Status = () => [
    {
      status: "Em andamento",
      processo: chartData[0].em_andamento,
      fill: em_andamento_status_color,
    },
    {
      status: "Encerrado",
      processo: chartData[0].encerrados,
      fill: encerrado_status_color,
    },
    {
      status: "Aguardando Decisão",
      processo: chartData[0].aguardando_decisao,
      fill: aguardando_decisao_status_color,
    },
  ];
  

  return {
    getDataToEvolucaoProcessos,
    getDataToChartProcessos_X_Status
  };
};
