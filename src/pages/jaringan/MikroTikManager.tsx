import React from 'react';
import { Router, Activity, Cpu, HardDrive } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';

export default function MikroTikManager() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold font-heading">MikroTik Manager</h1>
          <p className="text-text-secondary text-sm">Status core router dan utilisasi resource.</p>
        </div>
        <Button variant="secondary" size="md">Test Koneksi</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6 flex flex-col">
           <div className="flex justify-between items-start mb-6">
             <div className="flex items-center gap-3">
               <div className="p-3 bg-primary-glow rounded-lg">
                 <Router className="w-6 h-6 text-primary" />
               </div>
               <div>
                  <h2 className="text-lg font-bold">MK-Gateway-01</h2>
                  <div className="text-sm text-text-secondary flex items-center gap-2">
                    <span>192.168.1.1</span> <span className="w-1 h-1 bg-border-default rounded-full" /> <span>CCR2216-1G-12XS-2XQ</span>
                  </div>
               </div>
             </div>
             <span className="bg-success-dim text-success border border-success/20 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
               <span className="w-2 h-2 rounded-full bg-success animate-pulse" /> ONLINE
             </span>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-surface border border-border-default p-4 rounded-xl">
                 <div className="flex items-center gap-2 text-text-secondary mb-2 text-sm">
                   <Cpu className="w-4 h-4" /> CPU Load
                 </div>
                 <div className="text-2xl font-bold font-mono">14%</div>
                 <div className="w-full bg-base h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-primary h-full w-[14%] rounded-full" />
                 </div>
              </div>
              <div className="bg-surface border border-border-default p-4 rounded-xl">
                 <div className="flex items-center gap-2 text-text-secondary mb-2 text-sm">
                   <HardDrive className="w-4 h-4" /> Memory (RAM)
                 </div>
                 <div className="text-2xl font-bold font-mono">3.2 <span className="text-sm text-text-muted">/ 16 GB</span></div>
                 <div className="w-full bg-base h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-success h-full w-[20%] rounded-full" />
                 </div>
              </div>
              <div className="bg-surface border border-border-default p-4 rounded-xl">
                 <div className="flex items-center gap-2 text-text-secondary mb-2 text-sm">
                   <Activity className="w-4 h-4" /> Uptime
                 </div>
                 <div className="text-2xl font-bold font-mono text-text-primary">47<span className="text-sm text-text-muted">d</span> 12<span className="text-sm text-text-muted">h</span></div>
                 <div className="text-xs text-text-muted mt-2">Sejak: 06 Apr 2026</div>
              </div>
           </div>

           <div className="flex gap-2">
             <Button className="flex-1">Terminal</Button>
             <Button variant="secondary" className="flex-1">Interfaces (14)</Button>
             <Button variant="secondary" className="flex-1">PPPoE (1.1k)</Button>
           </div>
        </Card>

        <Card className="p-6">
           <h3 className="font-semibold mb-4 text-sm flex items-center gap-2 border-b border-border-default pb-3">
              Log System Terakhir
           </h3>
           <div className="space-y-3 font-mono text-xs text-text-muted">
              <div className="flex gap-2 items-start hover:text-text-primary transition-colors">
                 <span className="shrink-0 text-text-secondary">14:23:10</span>
                 <span>pppoe-budi logged in, 10.0.0.45</span>
              </div>
              <div className="flex gap-2 items-start hover:text-text-primary transition-colors text-danger">
                 <span className="shrink-0 text-text-secondary">14:21:05</span>
                 <span>pppoe-siti disconnected, peer is not responding</span>
              </div>
              <div className="flex gap-2 items-start hover:text-text-primary transition-colors">
                 <span className="shrink-0 text-text-secondary">14:15:30</span>
                 <span>pppoe-cv maju jaya logged in, 10.0.0.82</span>
              </div>
              <div className="flex gap-2 items-start hover:text-text-primary transition-colors">
                 <span className="shrink-0 text-text-secondary">14:10:12</span>
                 <span>admin logged in from 192.168.1.5 via api</span>
              </div>
           </div>
        </Card>
      </div>
    </div>
  );
}
