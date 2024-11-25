"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

/**
 * @description
 * O componente `DateRangePicker` é responsável por renderizar um range para intervalo de datas.
 * Ele permite que o usuário selecione um intervalo de datas usando um calendário popover.
 *
 * @example
 * // Exemplo de uso do componente DateRangePicker
 * import { DateRangePicker } from "@/components/date-range-picker";
 *
 * function App() {
 *   return (
 *     <div>
 *       <DateRangePicker />
 *     </div>
 *   );
 * }
 */
export function DateRangePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {

  const initialDate = new Date();

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: initialDate,
    to: addDays(initialDate, 21)
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[260px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Selecione uma data</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
