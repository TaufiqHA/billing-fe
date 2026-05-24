import React from 'react';
import { Activity, Clock, MapPin, Send, MessageSquare } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';

const tickets = [
  { id: '#1045', title: 'Indikator PON kedap-kedip merah', customer: 'Rini Yulianti', address: 'Jl. Merdeka 45, Blimbing', time: '10 mins ago', status: 'Unassigned', priority: 'High' },
  { id: '#1044', title: 'Speed tidak sesuai paket (lambat)', customer: 'CV Berkah Jaya', address: 'Ruko Suhat Kav. 12', time: '45 mins ago', status: 'Unassigned', priority: 'Medium' },
  { id: '#1043', title: 'Permintaan pindah ODP', customer: 'Bapak Rudi', address: 'Perum Griyashanta Blok A', time: '2 hours ago', status: 'Unassigned', priority: 'Low' },
];

const technicians = [
  { name: 'Andi Pratama', status: 'Tersedia', location: 'Basecamp', color: 'bg-success' },
  { name: 'Riko Setiawan', status: 'On-site', location: 'Jl. Sudirman', color: 'bg-warning' },
  { name: 'Deni Sumargo', status: 'Selesai', location: 'Kembali ke Basecamp', color: 'bg-info' },
];

export default function DispatchTiket() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200 min-h-[calc(100vh-6rem)] flex flex-col">
      <div>
        <h1 className="text-2xl font-bold font-heading">Dispatch Tiket</h1>
        <p className="text-text-secondary text-sm">Alokasi tugas penanganan gangguan kepada teknisi lapangan.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
         {/* Unassigned Tickets */}
         <Card className="lg:col-span-2 p-5 flex flex-col">
            <h2 className="font-semibold mb-4 border-b border-border-default pb-2">Menunggu Alokasi (Unassigned)</h2>
            <div className="space-y-3 flex-1 overflow-y-auto pr-2">
               {tickets.map((t, i) => (
                 <div key={i} className="p-4 border border-border-default rounded-xl bg-surface hover:border-primary/50 transition-colors group">
                    <div className="flex justify-between items-start mb-2">
                       <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-text-secondary">{t.id}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                             t.priority === 'High' ? 'bg-danger-dim text-danger border border-danger/20' :
                             t.priority === 'Medium' ? 'bg-warning-dim text-warning border border-warning/20' :
                             'bg-info-dim text-info border border-info/20'
                          }`}>
                            {t.priority}
                          </span>
                       </div>
                       <div className="text-xs text-text-muted flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {t.time}</div>
                    </div>
                    
                    <h3 className="font-medium text-text-primary text-sm mb-1">{t.title}</h3>
                    <div className="text-sm font-medium text-text-secondary mb-1">{t.customer}</div>
                    <div className="text-xs text-text-muted flex items-center gap-1.5 mb-4">
                       <MapPin className="w-3 h-3"/> {t.address}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-border-default">
                       <Button size="sm" className="gap-2 shrink-0"><Send className="w-3.5 h-3.5" /> Assign Teknisi</Button>
                       <Button variant="ghost" size="sm" className="text-text-secondary hover:text-text-primary gap-1"><MessageSquare className="w-3.5 h-3.5"/> Hubungi CS</Button>
                    </div>
                 </div>
               ))}
               
               {tickets.length === 0 && (
                  <div className="text-center py-12 text-text-muted border-2 border-dashed border-border-default rounded-xl">
                     Tidak ada tiket baru yang perlu dialokasikan.
                  </div>
               )}
            </div>
         </Card>

         {/* Available Technicians */}
         <Card className="p-5 flex flex-col">
            <h2 className="font-semibold mb-4 border-b border-border-default pb-2">Status Teknisi</h2>
            <div className="space-y-3">
               {technicians.map((tech, i) => (
                 <div key={i} className="p-3 border border-border-default rounded-lg bg-surface flex items-center gap-3">
                    <div className="relative">
                       <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                          {tech.name.charAt(0)}
                       </div>
                       <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-surface ${tech.color}`}></span>
                    </div>
                    <div className="flex-1">
                       <div className="font-medium text-sm text-text-primary">{tech.name}</div>
                       <div className="text-xs text-text-secondary">{tech.location}</div>
                    </div>
                    <div className="text-right">
                       <div className="text-xs font-medium text-text-secondary mb-1">{tech.status}</div>
                       <span className="text-[10px] text-text-muted">Jobs: 0</span>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-border-default">
               <h3 className="text-sm font-semibold mb-3">Tugas Terkini</h3>
               <div className="text-sm text-text-muted text-center py-6 border border-dashed border-border-default rounded-lg">
                  Pilih teknisi untuk melihat jadwal
               </div>
            </div>
         </Card>
      </div>
    </div>
  );
}
