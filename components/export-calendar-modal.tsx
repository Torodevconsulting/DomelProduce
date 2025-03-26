
import * as React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';

export function ExportCalendarModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground mb-4">Calendario de Exportación</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Calendar />
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