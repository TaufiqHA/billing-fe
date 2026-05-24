import React from 'react';
import { Activity, CreditCard, Gauge, Wifi, Download, CheckCircle2 } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';

export default function CustomerPortal() {
  return (
    <div className="min-h-screen bg-base text-text-primary selection:bg-primary/30">
       <nav className="h-16 border-b border-border-default bg-surface flex items-center px-6 md:px-12 justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-glow">
               <Activity className="w-5 h-5" />
            </div>
            <span className="font-heading font-bold text-xl hidden sm:block">TSB Portal</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm hidden sm:block">Halo, <span className="font-semibold">Budi Santoso</span></div>
            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center">
              B
            </div>
          </div>
       </nav>

       <main className="max-w-4xl mx-auto p-6 lg:py-12 space-y-6 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
             <div>
                <h1 className="text-2xl font-bold font-heading mb-1">Beranda Layanan</h1>
                <p className="text-text-secondary text-sm">Kelola tagihan dan pantau koneksi internet Anda.</p>
             </div>
             <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-success-dim text-success border border-success/20">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" /> Layanan Aktif
             </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <Card className="p-6 bg-gradient-to-br from-surface to-elevated flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-text-secondary mb-4">
                    <CreditCard className="w-5 h-5 text-text-muted" /> Tagihan Bulan Ini
                  </div>
                  <div className="text-4xl font-bold font-heading text-text-primary mb-2">Rp 180.000</div>
                  <div className="text-sm font-medium text-warning mb-6">Jatuh Tempo: 25 Jan 2025</div>
                </div>
                <Button className="w-full gap-2" size="lg"><CreditCard className="w-4 h-4"/> Bayar Sekarang</Button>
             </Card>

             <Card className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-text-secondary mb-4">
                    <Wifi className="w-5 h-5 text-text-muted" /> Info Paket
                  </div>
                  <div className="text-2xl font-bold font-heading text-text-primary mb-1">Fiber 50 Mbps</div>
                  <div className="text-sm text-text-secondary mb-6">Kecepatan optimal untuk streaming dan gaming keluarga.</div>
                </div>
                <div className="bg-surface border border-border-default rounded-lg p-4 flex gap-4 mt-auto">
                    <div className="flex-1">
                       <div className="text-xs text-text-secondary mb-1">IP Address</div>
                       <div className="font-mono text-sm">10.0.0.45</div>
                    </div>
                    <div className="w-px bg-border-default self-stretch" />
                    <div className="flex-1">
                       <div className="text-xs text-text-secondary mb-1">Status Perangkat</div>
                       <div className="text-sm font-medium text-success flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5"/> Normal</div>
                    </div>
                </div>
             </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <Card className="p-6 md:col-span-2 space-y-4">
                <div className="flex justify-between items-center border-b border-border-default pb-3">
                   <h2 className="font-semibold flex items-center gap-2"><Gauge className="w-4 h-4 text-primary"/> Speedtest</h2>
                </div>
                <div className="flex flex-col items-center justify-center py-6">
                   <div className="w-32 h-32 rounded-full border-4 border-border-default flex flex-col items-center justify-center mb-6 relative">
                      <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent -rotate-45" />
                      <div className="text-2xl font-bold font-mono">48.2</div>
                      <div className="text-xs text-text-muted">Mbps</div>
                   </div>
                   <div className="flex gap-8 text-center text-sm">
                      <div>
                        <div className="text-text-secondary mb-1">Download</div>
                        <div className="font-bold font-mono text-success">48.2 Mbps</div>
                      </div>
                      <div>
                        <div className="text-text-secondary mb-1">Upload</div>
                        <div className="font-bold font-mono text-info">12.1 Mbps</div>
                      </div>
                      <div>
                        <div className="text-text-secondary mb-1">Ping</div>
                        <div className="font-bold font-mono text-warning">14 ms</div>
                      </div>
                   </div>
                </div>
                <Button variant="secondary" className="w-full">Jalankan Ulang Test</Button>
             </Card>

             <Card className="p-6 flex flex-col">
                <div className="flex justify-between items-center border-b border-border-default pb-3 mb-4">
                   <h2 className="font-semibold">Riwayat</h2>
                </div>
                <div className="flex-1 space-y-4">
                   <div className="border border-border-default p-3 rounded-lg flex justify-between items-center hover:bg-overlay cursor-pointer transition-colors">
                      <div>
                         <div className="font-medium text-sm">Des 2024</div>
                         <div className="text-xs text-success font-medium">Lunas</div>
                      </div>
                      <div className="text-text-secondary"><Download className="w-4 h-4 hover:text-primary"/></div>
                   </div>
                   <div className="border border-border-default p-3 rounded-lg flex justify-between items-center hover:bg-overlay cursor-pointer transition-colors">
                      <div>
                         <div className="font-medium text-sm">Nov 2024</div>
                         <div className="text-xs text-success font-medium">Lunas</div>
                      </div>
                      <div className="text-text-secondary"><Download className="w-4 h-4 hover:text-primary"/></div>
                   </div>
                   <div className="border border-border-default p-3 rounded-lg flex justify-between items-center hover:bg-overlay cursor-pointer transition-colors">
                      <div>
                         <div className="font-medium text-sm">Okt 2024</div>
                         <div className="text-xs text-success font-medium">Lunas</div>
                      </div>
                      <div className="text-text-secondary"><Download className="w-4 h-4 hover:text-primary"/></div>
                   </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-4 text-xs text-text-muted hover:text-text-primary">Lihat Semua Tagihan</Button>
             </Card>
          </div>
       </main>
    </div>
  );
}
