import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = Array.from({ length: 30 }, (_, i) => ({
  time: `${i}m`,
  upload: Math.floor(Math.random() * 20) + 10,
  download: Math.floor(Math.random() * 50) + 80,
}));

export default function BandwidthMonitor() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200">
      <div>
        <h1 className="text-2xl font-bold font-heading">Bandwidth Monitor</h1>
        <p className="text-text-secondary text-sm">Pemantauan traffic interface utama router.</p>
      </div>

      <Card className="p-6 h-[500px] flex flex-col">
         <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">GigabitEthernet-1 (WAN)</h3>
            <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-success"></div> Download <span className="font-mono font-medium ml-1">128 Mbps</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-primary"></div> Upload <span className="font-mono font-medium ml-1">42 Mbps</span>
                </div>
            </div>
         </div>
         <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorDl" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorUl" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} tickFormatter={(val) => `${val}M`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A2235', borderColor: '#1E293B', borderRadius: '8px', color: '#F1F5F9' }}
                  itemStyle={{ fontWeight: 500 }}
                />
                <Area type="monotone" dataKey="download" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorDl)" name="Download (Mbps)" />
                <Area type="monotone" dataKey="upload" stroke="#0EA5E9" strokeWidth={2} fillOpacity={1} fill="url(#colorUl)" name="Upload (Mbps)" />
              </AreaChart>
            </ResponsiveContainer>
         </div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4 flex flex-col items-center justify-center h-32 border-dashed border-border-default bg-transparent shadow-none hover:border-border-active transition-colors cursor-pointer text-text-secondary hover:text-text-primary">
            + Tambah Grafik Interface
        </Card>
      </div>
    </div>
  );
}
