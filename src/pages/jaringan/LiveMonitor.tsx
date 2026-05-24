import React from 'react';
import { Activity, Wifi, Server, AlertTriangle, CheckCircle2, Zap } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const bandwidthData = Array.from({ length: 20 }, (_, i) => ({
  time: `${i}s`,
  value: Math.floor(Math.random() * 50) + 100, // 100-150 Mbps
}));

const cpuData = Array.from({ length: 20 }, (_, i) => ({
  time: `${i}s`,
  value: Math.floor(Math.random() * 20) + 10, // 10-30%
}));

export default function LiveMonitor() {
  return (
    <div className="animate-in fade-in duration-300 min-h-[calc(100vh-5rem)] bg-base text-text-primary flex flex-col pt-2 border-t-4 border-t-primary">
      {/* Header NOC style */}
      <div className="flex justify-between items-center mb-6 px-2">
         <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-danger rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
            <h1 className="text-xl font-bold font-mono tracking-wider">NOC &bull; SYSTEM DASHBOARD</h1>
         </div>
         <div className="font-mono text-sm font-medium opacity-80 current-time tracking-widest text-primary">
            {new Date().toLocaleTimeString('id-ID', { hour12: false })} UTC+7
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 mb-4">
         {/* Trafffic Monitor */}
         <Card className="lg:col-span-2 p-5 bg-surface/80 border-border-default flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
               <h2 className="text-sm font-semibold flex items-center gap-2"><Activity className="w-4 h-4 text-success"/> WAN TRAFFIC (GigabitEthernet-1)</h2>
               <div className="font-mono text-2xl font-bold text-success">142.8 <span className="text-sm text-text-muted">Mbps</span></div>
            </div>
            <div className="flex-1 min-h-[150px]">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={bandwidthData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorG" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" opacity={0.3} />
                    <Area type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} fill="url(#colorG)" isAnimationActive={false} />
                 </AreaChart>
               </ResponsiveContainer>
            </div>
         </Card>

         {/* CPU Router */}
         <Card className="p-5 bg-surface/80 border-border-default flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
               <h2 className="text-sm font-semibold flex items-center gap-2"><Server className="w-4 h-4 text-primary"/> CORE CPU</h2>
               <div className="font-mono text-2xl font-bold text-primary">18.4%</div>
            </div>
            <div className="flex-1 min-h-[100px]">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={cpuData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorC" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" opacity={0.3} />
                    <Area type="step" dataKey="value" stroke="#0EA5E9" strokeWidth={2} fill="url(#colorC)" isAnimationActive={false} />
                 </AreaChart>
               </ResponsiveContainer>
            </div>
         </Card>

         {/* Global Stats */}
         <div className="grid grid-rows-2 gap-4">
            <Card className="p-4 bg-surface/80 border-border-default flex items-center justify-between">
               <div>
                  <h3 className="text-xs text-text-secondary uppercase tracking-widest mb-1">Active PPPoE</h3>
                  <div className="text-3xl font-mono text-text-primary font-bold">1,183</div>
               </div>
               <Wifi className="w-8 h-8 text-primary/30" />
            </Card>
            <Card className="p-4 bg-surface/80 border-border-default flex items-center justify-between">
               <div>
                  <h3 className="text-xs text-text-secondary uppercase tracking-widest mb-1">Open Tickets</h3>
                  <div className="text-3xl font-mono text-danger font-bold">12</div>
               </div>
               <AlertTriangle className="w-8 h-8 text-danger/30" />
            </Card>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <Card className="p-4 bg-surface/80 border-border-default">
            <h3 className="text-xs text-text-secondary uppercase tracking-widest mb-3 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-success" /> Infrastructure Status</h3>
            <div className="space-y-3 font-mono text-sm">
               <div className="flex justify-between items-center"><span className="text-text-secondary">Radius Server</span> <span className="text-success">OK</span></div>
               <div className="flex justify-between items-center"><span className="text-text-secondary">Billing System</span> <span className="text-success">OK</span></div>
               <div className="flex justify-between items-center"><span className="text-text-secondary">OLT Cluster-A</span> <span className="text-success">OK</span></div>
               <div className="flex justify-between items-center"><span className="text-text-secondary">WA Gateway</span> <span className="text-success">OK</span></div>
            </div>
         </Card>

         <Card className="md:col-span-2 p-4 bg-surface/80 border-border-default">
            <h3 className="text-xs text-text-secondary uppercase tracking-widest mb-3 flex items-center gap-2"><Zap className="w-4 h-4 text-warning" /> System Alerts</h3>
            <div className="space-y-2 font-mono text-xs">
               <div className="flex gap-3 text-warning bg-warning-dim/30 p-2 rounded border border-warning/10">
                  <span className="shrink-0 opacity-70">10:45:12</span>
                  <span>[OLT-A-PON-1] Rx power critical for 4 ONUs</span>
               </div>
               <div className="flex gap-3 text-text-secondary p-2">
                  <span className="shrink-0 opacity-70">10:42:05</span>
                  <span>[API] Configuration backup completed successfully</span>
               </div>
               <div className="flex gap-3 text-text-secondary p-2">
                  <span className="shrink-0 opacity-70">10:30:00</span>
                  <span>[BILLING] Auto invoice generated for 142 users</span>
               </div>
            </div>
         </Card>
      </div>

    </div>
  );
}
