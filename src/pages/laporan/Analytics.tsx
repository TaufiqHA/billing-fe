import React from 'react';
import { Download, TrendingUp, Users, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const kpiData = [
  { month: 'Jul', target: 80, actual: 75, subs: 1100 },
  { month: 'Aug', target: 85, actual: 82, subs: 1120 },
  { month: 'Sep', target: 88, actual: 90, subs: 1150 },
  { month: 'Oct', target: 92, actual: 88, subs: 1180 },
  { month: 'Nov', target: 95, actual: 96, subs: 1210 },
  { month: 'Dec', target: 98, actual: 99, subs: 1247 },
];

export default function Analytics() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading">Laporan Eksekutif</h1>
          <p className="text-text-secondary text-sm">Ringkasan analitik bisnis dan pencapaian target bulanan.</p>
        </div>
        <div className="flex gap-2">
           <select className="bg-surface border border-border-default rounded-md h-9 px-3 text-sm focus:outline-none focus:border-primary text-text-primary">
              <option>Semua Area</option>
              <option>Kec. Blimbing</option>
              <option>Kec. Lowokwaru</option>
           </select>
           <Button size="md" className="gap-2" variant="secondary"><Download className="w-4 h-4"/> Export CSV</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-5 border-l-4 border-l-primary">
          <div className="text-sm font-medium text-text-secondary mb-1">MRR (Monthly Recurring Rev)</div>
          <div className="text-2xl font-bold font-heading mb-2">Rp 48.7 Juta</div>
          <div className="text-xs font-medium text-success flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +7.2% MoM
          </div>
        </Card>
        <Card className="p-5 border-l-4 border-l-success">
          <div className="text-sm font-medium text-text-secondary mb-1">Pertumbuhan Pelanggan</div>
          <div className="text-2xl font-bold font-heading mb-2">+37 Net</div>
          <div className="text-xs font-medium text-success flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +3% MoM
          </div>
        </Card>
        <Card className="p-5 border-l-4 border-l-warning">
          <div className="text-sm font-medium text-text-secondary mb-1">Churn Rate</div>
          <div className="text-2xl font-bold font-heading mb-2">1.2%</div>
          <div className="text-xs font-medium text-success flex items-center gap-1">
            (Batas Sehat &lt; 2%)
          </div>
        </Card>
        <Card className="p-5 border-l-4 border-l-info">
          <div className="text-sm font-medium text-text-secondary mb-1">Rata-rata Tagihan (ARPU)</div>
          <div className="text-2xl font-bold font-heading mb-2">Rp 178k</div>
          <div className="text-xs font-medium text-text-muted flex items-center gap-1">
            Stabil
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <Card className="p-6">
            <h3 className="font-semibold mb-6 flex items-center gap-2">Trend Pertumbuhan Pelanggan <span className="text-xs font-normal text-text-muted">(Net Aktif)</span></h3>
            <div className="h-[280px]">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={kpiData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                     <defs>
                        <linearGradient id="colorSubs" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                           <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                     <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} dy={10} />
                     <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} />
                     <Tooltip 
                       contentStyle={{ backgroundColor: '#1A2235', borderColor: '#1E293B', borderRadius: '8px', color: '#F1F5F9' }}
                       formatter={(value: any) => [`${value} Pelanggan`, 'Aktif']}
                     />
                     <Area type="monotone" dataKey="subs" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorSubs)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </Card>

         <Card className="p-6">
            <h3 className="font-semibold mb-6 flex items-center gap-2">Pencapaian Kolekting Pembayaran <span className="text-xs font-normal text-text-muted">(%, vs Target)</span></h3>
            <div className="h-[280px]">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={kpiData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                     <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} dy={10} />
                     <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} tickFormatter={(val) => `${val}%`} domain={[0, 100]}/>
                     <Tooltip 
                       cursor={{ fill: '#1E293B', opacity: 0.4 }}
                       contentStyle={{ backgroundColor: '#1A2235', borderColor: '#1E293B', borderRadius: '8px', color: '#F1F5F9' }}
                     />
                     <Bar dataKey="actual" name="Pencapaian" fill="#0EA5E9" radius={[4, 4, 0, 0]} barSize={32} />
                     <Bar dataKey="target" name="Target" fill="#1E2D42" radius={[4, 4, 0, 0]} barSize={16} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </Card>
      </div>

      <Card>
         <div className="p-4 border-b border-border-default flex justify-between items-center text-sm font-semibold">
           Status Kesehatan Bisnis (Bulan Ini)
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border-default">
            <div className="p-4 flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-success" />
               </div>
               <div>
                  <div className="text-sm font-medium">Uptime Layanan</div>
                  <div className="text-xs text-text-secondary">SLA tercapai (99.8%) bulan ini.</div>
               </div>
            </div>
            <div className="p-4 flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-warning" />
               </div>
               <div>
                  <div className="text-sm font-medium">Piutang Berjalan</div>
                  <div className="text-xs text-text-secondary">Terdapat kenaikan 5% telat bayar.</div>
               </div>
            </div>
            <div className="p-4 flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-success" />
               </div>
               <div>
                  <div className="text-sm font-medium">Penggunaan Inventaris</div>
                  <div className="text-xs text-text-secondary">Efisiensi alat terukur optimal.</div>
               </div>
            </div>
         </div>
      </Card>
    </div>
  );
}
