import { useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Card } from '@/src/components/ui/Card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const revenueData = [
  { name: 'Aug', value: 38 },
  { name: 'Sep', value: 41 },
  { name: 'Oct', value: 42.5 },
  { name: 'Nov', value: 45 },
  { name: 'Dec', value: 46.2 },
  { name: 'Jan', value: 48.7 },
];

const packageDist = [
  { name: 'Fiber 20 Mbps', value: 35 },
  { name: 'Fiber 50 Mbps', value: 45 },
  { name: 'Fiber 100 Mbps', value: 20 },
];
const COLORS = ['#6366F1', '#0EA5E9', '#10B981'];

export default function FinanceReport() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading">Laporan Keuangan</h1>
          <p className="text-text-secondary text-sm">Analisis pendapatan dan metrik penagihan.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select className="bg-surface border border-border-default rounded-md h-9 px-3 text-sm text-text-secondary focus:outline-none focus:border-primary">
            <option>Periode: Bulan Ini</option>
            <option>Bulan Lalu</option>
            <option>3 Bulan Terakhir</option>
          </select>
          <select className="bg-surface border border-border-default rounded-md h-9 px-3 text-sm text-text-secondary focus:outline-none focus:border-primary">
            <option>Bandingkan: Bulan Lalu</option>
            <option>Tahun Lalu</option>
          </select>
          <Button variant="secondary" size="md" className="gap-2"><Download className="w-4 h-4"/> Export PDF</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5 flex flex-col justify-between">
          <div className="text-sm text-text-secondary mb-1">Total Pendapatan</div>
          <div className="text-2xl font-bold font-heading mb-2">Rp 48.7 Juta</div>
          <div className="text-xs font-medium text-success flex items-center gap-1">
            ↑ 7.2% <span className="text-text-muted font-normal">vs bln lalu</span>
          </div>
        </Card>
        <Card className="p-5 flex flex-col justify-between">
          <div className="text-sm text-text-secondary mb-1">Target Bulan Ini</div>
          <div className="text-2xl font-bold font-heading mb-2">Rp 52.0 Juta</div>
          <div className="text-xs font-medium text-text-muted">
            93.7% tercapai
          </div>
        </Card>
        <Card className="p-5 flex flex-col justify-between">
          <div className="text-sm text-text-secondary mb-1">Rata-rata / Pelanggan</div>
          <div className="text-2xl font-bold font-heading mb-2">Rp 178.500</div>
          <div className="text-xs font-medium text-success flex items-center gap-1">
            ↑ 1.1% <span className="text-text-muted font-normal">vs bln lalu</span>
          </div>
        </Card>
        <Card className="p-5 flex flex-col justify-between">
          <div className="text-sm text-text-secondary mb-1">Tingkat Lunas (Collection)</div>
          <div className="text-2xl font-bold font-heading mb-2">93.6%</div>
          <div className="text-xs font-medium text-success flex items-center gap-1">
            ↑ 2.1% <span className="text-text-muted font-normal">vs bln lalu</span>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 lg:col-span-2">
          <h3 className="text-base font-semibold mb-6">Tren Pendapatan (6 Bulan Terakhir)</h3>
          <div className="h-[280px]">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                   <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3}/>
                         <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                      </linearGradient>
                   </defs>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                   <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} dy={10} />
                   <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} tickFormatter={(value) => `${value}J`} />
                   <Tooltip 
                     contentStyle={{ backgroundColor: '#1A2235', borderColor: '#1E293B', borderRadius: '8px', color: '#F1F5F9' }}
                     itemStyle={{ color: '#0EA5E9', fontWeight: 500 }}
                     formatter={(value: any) => [`Rp ${value} Juta`, 'Pendapatan']}
                   />
                   <Area type="monotone" dataKey="value" stroke="#0EA5E9" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
             </ResponsiveContainer>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-base font-semibold mb-6">Distribusi Paket Layanan</h3>
          <div className="h-[280px] flex items-center justify-center">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={packageDist}
                   cx="50%"
                   cy="45%"
                   innerRadius={60}
                   outerRadius={85}
                   paddingAngle={2}
                   dataKey="value"
                   stroke="none"
                 >
                   {packageDist.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                   ))}
                 </Pie>
                 <Tooltip 
                   contentStyle={{ backgroundColor: '#1A2235', borderColor: '#1E293B', borderRadius: '8px', color: '#F1F5F9' }}
                   itemStyle={{ fontWeight: 500 }}
                   formatter={(value: any) => [`${value}%`, 'Distribusi']}
                 />
                 <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px' }}/>
               </PieChart>
             </ResponsiveContainer>
          </div>
        </Card>
      </div>

    </div>
  );
}
