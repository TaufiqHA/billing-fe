import React from 'react';
import { Settings, Zap, Send, Ban } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/Input';

export default function Automasi() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200 min-h-screen pb-12">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold font-heading">Automasi Sistem</h1>
          <p className="text-text-secondary text-sm">Pengaturan trigger notifikasi dan tindakan sistem otomatis.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 space-y-6">
           <div className="flex items-center justify-between border-b border-border-default pb-2">
             <h2 className="text-lg font-semibold flex items-center gap-2"><Send className="w-5 h-5 text-primary"/> Auto Tagihan (Invoice)</h2>
             <label className="relative inline-flex items-center cursor-pointer">
               <input type="checkbox" className="sr-only peer" defaultChecked />
               <div className="w-11 h-6 bg-overlay rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success"></div>
             </label>
           </div>
           
           <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-text-secondary mb-1 block">Generate & Kirim Invoice H-</label>
                <select className="w-full rounded-md border border-border-default bg-surface px-3 h-10 text-sm focus-visible:outline-none focus:border-primary">
                  <option>7 Hari sebelum jatuh tempo</option>
                  <option>5 Hari sebelum jatuh tempo</option>
                  <option>1 Hari sebelum jatuh tempo</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-text-secondary mb-1 block">Waktu Pengiriman Pesan</label>
                <Input type="time" defaultValue="08:00" />
              </div>

              <div>
                <label className="text-xs font-medium text-text-secondary mb-1 block flex justify-between">
                   Template Kirim Invoice 
                   <span className="text-primary hover:underline cursor-pointer">Variabel tersedia {`{nama}, {tagihan}, dll`}</span>
                </label>
                <textarea 
                  className="w-full rounded-md border border-border-default bg-surface px-3 py-2 text-sm focus-visible:outline-none focus:border-primary text-text-primary resize-none h-32"
                  defaultValue={`Halo *{nama}*,
                  
Tagihan layanan internet Anda untuk bulan ini sebesar *Rp {tagihan}* dengan jatuh tempo tanggal *{jatuhtempo}*.

Silahkan melakukan pembayaran pada link berikut:
{link_pay}

Abaikan pesan ini jika sudah melakukan pembayaran.`}
                />
              </div>
           </div>
        </Card>

        <Card className="p-6 space-y-6">
           <div className="flex items-center justify-between border-b border-border-default pb-2">
             <h2 className="text-lg font-semibold flex items-center gap-2"><Ban className="w-5 h-5 text-danger"/> Auto Isolir (Suspend)</h2>
             <label className="relative inline-flex items-center cursor-pointer">
               <input type="checkbox" className="sr-only peer" defaultChecked />
               <div className="w-11 h-6 bg-overlay rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-danger"></div>
             </label>
           </div>
           
           <div className="bg-warning-dim/50 border border-warning/20 p-3 rounded-lg text-sm text-warning font-medium">
             Tindakan ini akan secara otomatis mendisable PPPoE Secret pelanggan di MikroTik jika tagihan melewati batas toleransi.
           </div>

           <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-text-secondary mb-1 block">Toleransi Keterlambatan</label>
                <select className="w-full rounded-md border border-border-default bg-surface px-3 h-10 text-sm focus-visible:outline-none focus:border-primary">
                  <option>H+1 dari jatuh tempo</option>
                  <option>H+3 dari jatuh tempo</option>
                  <option>H+7 dari jatuh tempo</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-text-secondary mb-1 block">Waktu Eksekusi Isolir</label>
                <Input type="time" defaultValue="00:00" />
              </div>

              <div>
                <label className="text-xs font-medium text-text-secondary mb-1 block">Kirim WA Notifikasi Isolir</label>
                <textarea 
                  className="w-full rounded-md border border-border-default bg-surface px-3 py-2 text-sm focus-visible:outline-none focus:border-primary text-text-primary resize-none h-24"
                  defaultValue={`Mohon maaf *{nama}*, layanan internet Anda saat ini dinonaktifkan sementara karena melewati batas waktu pembayaran.
                  
Layanan akan otomatis aktif 5 menit setelah tagihan dibayar.`}
                />
              </div>
           </div>
        </Card>
      </div>

      <div className="flex justify-end pt-4">
        <Button className="gap-2 px-8"><Zap className="w-4 h-4"/> Simpan Pengaturan Automasi</Button>
      </div>
    </div>
  );
}
