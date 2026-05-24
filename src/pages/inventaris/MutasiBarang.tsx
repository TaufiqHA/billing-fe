import React from 'react';
import { ArrowLeftRight, Download, Filter } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';

const mutasi = [
  { tgl: '24 Mei 2026', jenis: 'Keluar', barang: 'Huawei EG8141A5', qty: 1, teknisi: 'Andi Pratama', ket: 'Instalasi Budi Santoso' },
  { tgl: '23 Mei 2026', jenis: 'Keluar', barang: 'Drop Core 1 Core (100m)', qty: 2, teknisi: 'Riko Setiawan', ket: 'Tarikan kabel jalur baru' },
  { tgl: '21 Mei 2026', jenis: 'Masuk', barang: 'ZTE F609', qty: 20, teknisi: '-', ket: 'Restock Gudang' },
];

export default function MutasiBarang() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading">Mutasi Barang</h1>
          <p className="text-text-secondary text-sm">Log aktivitas pengeluaran dan pemasukan stok gudang.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" size="md" className="gap-2 text-danger hover:text-danger hover:bg-danger-dim border-border-default"><ArrowLeftRight className="w-4 h-4"/> Barang Keluar</Button>
          <Button variant="secondary" size="md" className="gap-2 text-success hover:text-success hover:bg-success-dim border-border-default"><ArrowLeftRight className="w-4 h-4"/> Barang Masuk</Button>
        </div>
      </div>

      <Card>
        <div className="p-4 border-b border-border-default flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-surface">
           <h3 className="font-semibold text-sm">Riwayat Mutasi</h3>
           <div className="flex flex-wrap gap-2">
              <Button variant="ghost" size="sm" className="gap-1 border border-border-default bg-surface hover:bg-overlay"><Filter className="w-3 h-3"/> Bulan Ini</Button>
              <Button variant="ghost" size="sm" className="gap-1 border border-border-default bg-surface hover:bg-overlay"><Download className="w-3 h-3"/> Export</Button>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
             <thead className="bg-base/50 text-xs uppercase text-text-muted border-b border-border-default">
                <tr>
                   <th className="px-4 py-3">Tanggal</th>
                   <th className="px-4 py-3">Jenis</th>
                   <th className="px-4 py-3">Barang (SKU)</th>
                   <th className="px-4 py-3 text-right">Qty</th>
                   <th className="px-4 py-3">Pic / Teknisi</th>
                   <th className="px-4 py-3">Keterangan</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-border-default">
                {mutasi.map((m, i) => (
                  <tr key={i} className="hover:bg-overlay/50 transition-colors">
                     <td className="px-4 py-3 text-text-secondary whitespace-nowrap">{m.tgl}</td>
                     <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium border ${m.jenis === 'Masuk' ? 'bg-success-dim text-success border-success/20' : 'bg-danger-dim text-danger border-danger/20'}`}>
                           {m.jenis}
                        </span>
                     </td>
                     <td className="px-4 py-3 font-medium whitespace-nowrap">{m.barang}</td>
                     <td className="px-4 py-3 text-right font-mono font-medium">{m.jenis === 'Masuk' ? '+' : '-'}{m.qty}</td>
                     <td className="px-4 py-3 text-text-secondary whitespace-nowrap">{m.teknisi}</td>
                     <td className="px-4 py-3 text-text-secondary">{m.ket}</td>
                  </tr>
                ))}
             </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
