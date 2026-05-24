import React from 'react';
import { Plus, Search, Filter, Box } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';

const stok = [
  { sku: 'ONU-HW-01', nama: 'Huawei EG8141A5', kategori: 'ONU/Modem', jumlah: 45, status: 'Aman' },
  { sku: 'ONU-ZT-02', nama: 'ZTE F609', kategori: 'ONU/Modem', jumlah: 12, status: 'Warning' },
  { sku: 'KBL-DC-01', nama: 'Drop Core 1 Core (1000m)', kategori: 'Kabel', jumlah: 2, status: 'Kritis' },
  { sku: 'RTR-MK-01', nama: 'MikroTik hAP Lite', kategori: 'Router', jumlah: 28, status: 'Aman' }
];

export default function StokPerangkat() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading">Stok Perangkat</h1>
          <p className="text-text-secondary text-sm">Manajemen inventaris barang dan perlengkapan instalasi.</p>
        </div>
        <Button size="md" className="gap-2"><Plus className="w-4 h-4"/> Tambah Barang</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 border-l-4 border-l-primary flex items-center justify-between">
           <div>
             <div className="text-sm text-text-secondary">Total Value Stok</div>
             <div className="text-2xl font-bold font-heading text-primary">Rp 42.5 Juta</div>
           </div>
           <Box className="w-8 h-8 text-primary/20" />
        </Card>
        <Card className="p-4 border-l-4 border-l-warning flex items-center justify-between">
           <div>
             <div className="text-sm text-text-secondary">Stok Menipis (Warning)</div>
             <div className="text-2xl font-bold font-heading text-warning">12 Item</div>
           </div>
        </Card>
        <Card className="p-4 border-l-4 border-l-danger flex items-center justify-between bg-danger-dim/30">
           <div>
             <div className="text-sm text-text-secondary">Stok Kosong / Kritis</div>
             <div className="text-2xl font-bold font-heading text-danger">3 Item</div>
           </div>
        </Card>
      </div>

      <Card>
        <div className="p-4 border-b border-border-default flex flex-wrap gap-3 items-center justify-between">
          <div className="relative w-full max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input 
              type="text" 
              placeholder="Cari SKU atau Nama Barang..." 
              className="w-full bg-base border border-border-default rounded-md h-9 pl-9 pr-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary placeholder:text-text-muted"
            />
          </div>
          <Button variant="ghost" size="sm" className="gap-1 border border-border-default bg-surface hover:bg-overlay"><Filter className="w-3 h-3"/> Kategori: Semua</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-base/50 text-xs uppercase text-text-muted border-b border-border-default">
              <tr>
                <th className="px-4 py-3">SKU</th>
                <th className="px-4 py-3">Nama Barang</th>
                <th className="px-4 py-3">Kategori</th>
                <th className="px-4 py-3">Jumlah (Unit)</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-default">
               {stok.map((item, i) => (
                 <tr key={i} className="hover:bg-overlay/50 transition-colors">
                    <td className="px-4 py-3 font-mono text-text-secondary">{item.sku}</td>
                    <td className="px-4 py-3 font-medium">{item.nama}</td>
                    <td className="px-4 py-3 text-text-secondary">{item.kategori}</td>
                    <td className="px-4 py-3 font-medium">{item.jumlah}</td>
                    <td className="px-4 py-3">
                       <span className={`px-2 py-0.5 rounded text-xs font-medium border ${
                         item.status === 'Aman' ? 'bg-success-dim text-success border-success/20' :
                         item.status === 'Warning' ? 'bg-warning-dim text-warning border-warning/20' :
                         'bg-danger-dim text-danger border-danger/20'
                       }`}>
                         {item.status}
                       </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                       <Button variant="ghost" size="sm" className="h-7 text-xs border border-border-default">Edit</Button>
                    </td>
                 </tr>
               ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
