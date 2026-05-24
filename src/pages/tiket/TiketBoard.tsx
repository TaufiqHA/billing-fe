import React from 'react';
import { Plus, MoreHorizontal, MessageSquare, Clock } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

const mockTickets = {
  open: [
    { id: '#1042', title: 'No Signal - Pelanggan Premium', customer: 'Budi Santoso', address: 'Jl. Merdeka 12', time: '1j 15m', tech: 'Andi' },
    { id: '#1043', title: 'Kabel Putus', customer: 'PT Sentosa', address: 'Ruko Indah Blok C', time: '30m', tech: 'Unassigned' }
  ],
  process: [
    { id: '#1041', title: 'Speed Lambat', customer: 'CV Maju Jaya', address: 'Kawasan Industri', time: '2j 10m', tech: 'Riko' }
  ],
  waiting: [
    { id: '#1039', title: 'Need Router Replacement', customer: 'Siti Aminah', address: 'Perum Asri', time: '1d', tech: 'Andi' }
  ],
  done: [
    { id: '#1038', title: 'Ganti Password Wi-Fi', customer: 'Ahmad Dahlan', address: 'Jl. Melati 3', time: 'Resolved', tech: 'Deni' },
    { id: '#1035', title: 'Internet Mati total', customer: 'Klinik Sehat', address: 'Jl. Sudirman', time: 'Resolved', tech: 'Riko' }
  ]
};

const Column = ({ title, count, tickets, colorClass }: { title: string, count: number, tickets: any[], colorClass: string }) => (
  <div className="flex flex-col bg-surface/50 border border-border-default rounded-xl overflow-hidden">
    <div className="p-3 border-b border-border-default flex items-center justify-between bg-surface">
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-sm">{title}</h3>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${colorClass}`}>{count}</span>
      </div>
      <Button variant="ghost" size="sm" className="h-6 w-6 p-0"><MoreHorizontal className="w-4 h-4 text-text-muted" /></Button>
    </div>
    <div className="p-3 flex-1 overflow-y-auto space-y-3">
      {tickets.map((t, i) => (
        <div key={i} className="bg-surface border border-border-default p-3 rounded-lg hover:border-border-active cursor-pointer group shadow-sm transition-colors">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium text-text-secondary">{t.id}</span>
            <div className="flex items-center gap-1 text-xs text-text-muted">
              <Clock className="w-3 h-3" /> {t.time}
            </div>
          </div>
          <h4 className="font-medium text-text-primary text-sm mb-1 leading-snug">{t.title}</h4>
          <div className="text-xs text-text-secondary mb-3">{t.customer} • {t.address}</div>
          <div className="flex items-center justify-between pt-3 border-t border-border-default">
             <div className="flex items-center gap-2">
                 <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold">
                    {t.tech !== 'Unassigned' ? t.tech.charAt(0) : '?'}
                 </div>
                 <span className="text-xs text-text-muted">{t.tech}</span>
             </div>
             <Button variant="ghost" size="sm" className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100"><MessageSquare className="w-3.5 h-3.5 text-text-muted hover:text-primary"/></Button>
          </div>
        </div>
      ))}
      <Button variant="ghost" className="w-full text-xs text-text-muted hover:text-text-primary border border-dashed border-border-default">
        + Tambah Tiket
      </Button>
    </div>
  </div>
);

export default function TiketBoard() {
  return (
    <div className="space-y-6 h-[calc(100vh-6rem)] flex flex-col animate-in slide-in-from-bottom-2 fade-in duration-200">
      <div className="flex justify-between items-center shrink-0">
        <div>
          <h1 className="text-2xl font-bold font-heading">Ticketing System</h1>
          <p className="text-text-secondary text-sm">Manajemen pelaporan gangguan pelanggan.</p>
        </div>
        <Button size="md" className="gap-2"><Plus className="w-4 h-4"/> Buat Tiket</Button>
      </div>
      
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 overflow-hidden">
        <Column title="OPEN" count={mockTickets.open.length} tickets={mockTickets.open} colorClass="bg-danger-dim text-danger" />
        <Column title="PROSES" count={mockTickets.process.length} tickets={mockTickets.process} colorClass="bg-warning-dim text-warning" />
        <Column title="MENUNGGU" count={mockTickets.waiting.length} tickets={mockTickets.waiting} colorClass="bg-info-dim text-info" />
        <Column title="SELESAI" count={mockTickets.done.length} tickets={mockTickets.done} colorClass="bg-success-dim text-success" />
      </div>
    </div>
  );
}
