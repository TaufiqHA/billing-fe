import React from 'react';
import { MessageCircle, Info, RefreshCw, Power } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';

export default function WaGateway() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold font-heading">WhatsApp Gateway</h1>
          <p className="text-text-secondary text-sm">Konfigurasi koneksi WhatsApp backend untuk notifikasi.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <Card className="p-6 space-y-6">
            <h2 className="text-lg font-semibold border-b border-border-default pb-2">Status Koneksi</h2>
            
            <div className="flex items-center gap-4 bg-success-dim/30 border border-success/20 p-4 rounded-xl">
               <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-success" />
               </div>
               <div className="flex-1">
                 <div className="font-bold text-lg text-success flex items-center gap-2">
                    Terhubung <span className="w-2 h-2 rounded-full bg-success animate-pulse inline-block" />
                 </div>
                 <div className="text-text-secondary text-sm">Nomor: +62 812-3456-7890 (Admin Billing)</div>
               </div>
               <Button variant="secondary" size="md" className="gap-2 text-danger hover:text-danger hover:bg-danger-dim border-border-default"><Power className="w-4 h-4"/> Disconnect</Button>
            </div>

            <div className="space-y-4">
               <div className="flex justify-between items-center text-sm p-3 bg-surface border border-border-default rounded-lg">
                  <span className="text-text-secondary">Engine</span>
                  <span className="font-medium">Baileys MD</span>
               </div>
               <div className="flex justify-between items-center text-sm p-3 bg-surface border border-border-default rounded-lg">
                  <span className="text-text-secondary">Pesan Terkirim (Hari Ini)</span>
                  <span className="font-medium">124 Pesan</span>
               </div>
               <div className="flex justify-between items-center text-sm p-3 bg-surface border border-border-default rounded-lg">
                  <span className="text-text-secondary">Status Baterai HP</span>
                  <span className="font-medium text-success">86%</span>
               </div>
            </div>
         </Card>
      
         <Card className="p-6 space-y-6 flex flex-col justify-between">
             <div>
                <h2 className="text-lg font-semibold border-b border-border-default pb-2">Tautkan Perangkat (Scan QR)</h2>
                <div className="bg-info-dim text-info p-3 rounded-lg text-sm flex gap-3 mt-4 items-start">
                   <Info className="w-5 h-5 shrink-0" />
                   <div>
                     Scan QR code menggunakan aplikasi WhatsApp di HP Anda (Menu <strong>Perangkat Taut</strong>). Gateway ini menggunakan multi-device sehingga HP tidak perlu selalu online.
                   </div>
                </div>
             </div>

             <div className="flex justify-center items-center flex-1 py-8">
                <div className="w-48 h-48 bg-white p-2 rounded-xl relative opacity-50 grayscale flex items-center justify-center border-4 border-border-default filter blur-[2px]">
                   <span className="bg-base px-2 py-1 rounded text-sm text-center font-medium absolute z-10 text-white backdrop-blur-md border border-white/10 shadow-xl">Sudah terhubung</span>
                   <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example_qr_code_wa" alt="QR Code" className="w-full h-full opacity-50" />
                </div>
             </div>

             <Button variant="secondary" className="w-full gap-2"><RefreshCw className="w-4 h-4" /> Generate QR Ulang</Button>
         </Card>
      </div>
    </div>
  );
}
