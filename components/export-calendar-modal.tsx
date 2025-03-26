
import * as React from 'react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';

export function ExportCalendarModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [range, setRange] = useState<DateRange | undefined>();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px] flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground mb-4">Calendario de Exportación</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Calendar 
          mode="range"
          selected={range}
          onSelect={setRange}
          className="w-full p-4"
        />
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-2">Aguacate</h3>
            <p className="text-sm text-foreground/70">Temporada: Enero - Marzo</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-2">Mango</h3>
            <p className="text-sm text-foreground/70">Temporada: Noviembre - Febrero</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-2">Uva</h3>
            <p className="text-sm text-foreground/70">Temporada: Diciembre - Abril</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}