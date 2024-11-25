export type ChartEvolucaoProcessos = {
  month: string;
  em_andamento: number;
  encerrados: number;
  aguardando_decisao: number;
};

export type ChartProcessos_X_StatusData = {
  status: string;
  processo: number;
  fill: string;
};
