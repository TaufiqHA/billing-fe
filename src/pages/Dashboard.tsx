import { Users, Wifi, AlertTriangle, DollarSign, ArrowUpRight, ArrowDownRight, CheckCircle2, Ticket, Clock, Router, ArrowRight } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { useNavigate } from 'react-router-dom';

const bandwidthData = [
  { time: '14:00', upload: 25, download: 80 },
  { time: '14:05', upload: 30, download: 95 },
  { time: '14:10', upload: 28, download: 105 },
  { time: '14:15', upload: 35, download: 110 },
  { time: '14:20', upload: 42, download: 128 },
  { time: '14:25', upload: 38, download: 115 },
  { time: '14:30', upload: 40, download: 120 },
];

const revenueData = [
  { month: 'Jul', value: 35 },
  { month: 'Aug', value: 38 },
  { month: 'Sep', value: 41 },
  { month: 'Oct', value: 42.5 },
  { month: 'Nov', value: 45 },
  { month: 'Dec', value: 48.7 },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200">
      <div>
        <h1 className="text-2xl font-bold font-heading">Dashboard Utama</h1>
        <p className="text-text-secondary text-sm">Ringkasan performa bisnis dan status operasional real-time.</p>
      </div>

      {/* 4.1 Stat Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5 flex flex-col justify-between border-l-4 border-l-info">
          <div className="flex justify-between items-start mb-2">
            <div className="text-sm font-medium text-text-secondary">Total Pelanggan</div>
            <Users className="w-5 h-5 text-text-muted" />
          </div>
          <div className="text-3xl font-bold font-heading mb-1">1,247</div>
          <div className="text-xs font-medium text-success flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" /> 12 baru <span className="text-text-muted font-normal">bulan ini</span>
          </div>
        </Card>

        <Card className="p-5 flex flex-col justify-between border-l-4 border-l-success">
          <div className="flex justify-between items-start mb-2">
            <div className="text-sm font-medium text-text-secondary">Pelanggan Online</div>
            <Wifi className="w-5 h-5 text-text-muted" />
          </div>
          <div className="text-3xl font-bold font-heading mb-1">1,183</div>
          <div className="text-xs font-medium text-text-muted flex items-center gap-1">
            94.9% uptime
          </div>
        </Card>

        <Card className="p-5 flex flex-col justify-between border-l-4 border-l-warning">
          <div className="flex justify-between items-start mb-2">
            <div className="text-sm font-medium text-text-secondary">Jatuh Tempo</div>
            <AlertTriangle className="w-5 h-5 text-text-muted" />
          </div>
          <div className="text-3xl font-bold font-heading mb-1">64</div>
          <div className="text-xs font-medium text-success flex items-center gap-1">
            <ArrowDownRight className="w-3 h-3" /> 8 dari <span className="text-text-muted font-normal">kemarin</span>
          </div>
        </Card>

        <Card className="p-5 flex flex-col justify-between border-l-4 border-l-primary">
          <div className="flex justify-between items-start mb-2">
            <div className="text-sm font-medium text-text-secondary">Pendapatan Bln Ini</div>
            <DollarSign className="w-5 h-5 text-text-muted" />
          </div>
          <div className="text-3xl font-bold font-heading mb-1">Rp 48.7Jt</div>
          <div className="text-xs font-medium text-success flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" /> 7.2% <span className="text-text-muted font-normal">vs bln lalu</span>
          </div>
        </Card>
      </div>

      {/* 4.2 Live Network Status */}
      <Card className="overflow-hidden">
        <div className="p-4 border-b border-border-default flex justify-between items-center bg-overlay/30">
          <h2 className="font-semibold flex items-center gap-2">
            Status Jaringan Realtime 
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-bold bg-danger-dim text-danger border border-danger/20 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-danger animate-pulse" /> LIVE
            </span>
          </h2>
          <Button variant="ghost" size="sm" className="hidden sm:flex" onClick={() => navigate('/jaringan')}>Lihat Detail &rarr;</Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border-default">
          <div className="lg:col-span-3 p-4 h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={bandwidthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUpload" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorDownload" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} tickFormatter={(val) => `${val}M`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A2235', borderColor: '#1E293B', borderRadius: '8px', color: '#F1F5F9' }}
                  itemStyle={{ fontWeight: 500 }}
                />
                <Area type="monotone" dataKey="download" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorDownload)" name="Download (Mbps)" />
                <Area type="monotone" dataKey="upload" stroke="#0EA5E9" strokeWidth={2} fillOpacity={1} fill="url(#colorUpload)" name="Upload (Mbps)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="p-5 flex flex-col justify-center space-y-6 bg-surface/50">
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-medium text-text-secondary text-primary">Upload</span>
                <span className="text-xl font-bold font-mono">42 <span className="text-xs text-text-muted">Mbps</span></span>
              </div>
              <div className="h-1.5 w-full bg-base rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-medium text-text-secondary text-success">Download</span>
                <span className="text-xl font-bold font-mono">128 <span className="text-xs text-text-muted">Mbps</span></span>
              </div>
              <div className="h-1.5 w-full bg-base rounded-full overflow-hidden">
                <div className="h-full bg-success rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="pt-2 border-t border-border-default space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-text-secondary flex items-center gap-1.5"><Router className="w-3.5 h-3.5"/> MikroTik</span>
                <span className="font-medium flex items-center gap-1 text-success">3/3 <CheckCircle2 className="w-3 h-3"/></span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-text-secondary flex items-center gap-1.5"><Router className="w-3.5 h-3.5"/> OLT</span>
                <span className="font-medium flex items-center gap-1 text-success">2/2 <CheckCircle2 className="w-3 h-3"/></span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* 4.3 Row Kedua */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="flex flex-col">
          <div className="p-4 border-b border-border-default flex justify-between items-center">
            <h2 className="font-semibold flex items-center gap-2">
              Tiket Aktif 
              <span className="bg-info-dim text-info text-xs px-2 py-0.5 rounded-full font-medium">12</span>
            </h2>
            <Button variant="ghost" size="sm" onClick={() => navigate('/tiket')}>Lihat Semua &rarr;</Button>
          </div>
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-text-muted bg-base/50">
                <tr>
                  <th className="px-4 py-2 font-medium">ID</th>
                  <th className="px-4 py-2 font-medium">Pelanggan</th>
                  <th className="px-4 py-2 font-medium">Masalah</th>
                  <th className="px-4 py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-default">
                <tr className="hover:bg-overlay/50 cursor-pointer">
                  <td className="px-4 py-3 text-text-secondary">#1042</td>
                  <td className="px-4 py-3 font-medium">Budi Santoso</td>
                  <td className="px-4 py-3">No Signal</td>
                  <td className="px-4 py-3"><span className="text-danger flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-danger"></span> Open</span></td>
                </tr>
                <tr className="hover:bg-overlay/50 cursor-pointer">
                  <td className="px-4 py-3 text-text-secondary">#1041</td>
                  <td className="px-4 py-3 font-medium">CV Maju Jaya</td>
                  <td className="px-4 py-3">Speed Lambat</td>
                  <td className="px-4 py-3"><span className="text-warning flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-warning"></span> Proses</span></td>
                </tr>
                <tr className="hover:bg-overlay/50 cursor-pointer">
                  <td className="px-4 py-3 text-text-secondary">#1040</td>
                  <td className="px-4 py-3 font-medium">Siti Aminah</td>
                  <td className="px-4 py-3">Router Mati</td>
                  <td className="px-4 py-3"><span className="text-warning flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-warning"></span> Proses</span></td>
                </tr>
                <tr className="hover:bg-overlay/50 cursor-pointer">
                  <td className="px-4 py-3 text-text-secondary">#1038</td>
                  <td className="px-4 py-3 font-medium">Ahmad Dahlan</td>
                  <td className="px-4 py-3">Ganti Password</td>
                  <td className="px-4 py-3"><span className="text-info flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-info"></span> Menunggu</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-4 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold">Pendapatan 6 Bulan Terakhir</h2>
            <Button variant="ghost" size="sm" onClick={() => navigate('/billing/laporan')}>Laporan &rarr;</Button>
          </div>
          <div className="flex-1 min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} tickFormatter={(val) => `${val}J`} />
                <Tooltip 
                  cursor={{ fill: '#1E293B', opacity: 0.4 }}
                  contentStyle={{ backgroundColor: '#1A2235', borderColor: '#1E293B', borderRadius: '8px', color: '#F1F5F9' }}
                  formatter={(value: any) => [`Rp ${value} Juta`, 'Pendapatan']}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === revenueData.length - 1 ? '#0EA5E9' : '#1E2D42'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* 4.4 Row Ketiga */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="flex flex-col max-h-[360px]">
          <div className="p-4 border-b border-border-default flex justify-between items-center">
            <h2 className="font-semibold flex items-center gap-2">Jatuh Tempo Hari Ini</h2>
            <Button variant="ghost" size="sm" className="text-primary">Bayar Massal</Button>
          </div>
          <div className="overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-border-default">
            <div className="space-y-1">
              {[
                { name: 'Diana Susanti', package: 'Fiber 20 Mbps', bill: 120000 },
                { name: 'Toko Elektronik Makmur', package: 'Fiber 100 Mbps', bill: 350000 },
                { name: 'Keluarga Bapak RT', package: 'Fiber 50 Mbps', bill: 180000 },
                { name: 'Bambang Pamungkas', package: 'Fiber 20 Mbps', bill: 120000 },
                { name: 'Nita Thalia', package: 'Fiber 50 Mbps', bill: 180000 },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-overlay transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface border border-border-default flex items-center justify-center font-medium text-xs text-text-secondary">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-sm text-text-primary">{item.name}</div>
                      <div className="text-xs text-text-muted">{item.package}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="font-semibold text-sm">Rp {item.bill.toLocaleString('id-ID')}</div>
                    <Button variant="secondary" size="sm" className="h-7 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:flex">Kirim WA</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="flex flex-col">
          <div className="p-4 border-b border-border-default flex justify-between items-center">
            <h2 className="font-semibold">Aktivitas Teknisi</h2>
            <Button variant="ghost" size="sm" onClick={() => navigate('/teknisi')}>Peta &rarr;</Button>
          </div>
          <div className="p-4 flex-1">
             <div className="relative h-full flex flex-col gap-4">
                {[
                  { name: 'Andi Pratama', status: 'On-site', detail: 'Perbaikan tiket #1042', color: 'bg-warning' },
                  { name: 'Riko Setiawan', status: 'Dalam Perjalanan', detail: 'Instalasi pelanggan baru', color: 'bg-primary' },
                  { name: 'Deni Sumargo', status: 'Selesai', detail: 'Kembali ke basecamp', color: 'bg-text-muted' },
                ].map((tech, i) => (
                  <div key={i} className="flex gap-4 items-start relative pb-4 last:pb-0">
                    {/* Timeline line */}
                    {i !== 2 && <div className="absolute left-4 top-8 bottom-0 w-px bg-border-default"></div>}
                    
                    <div className="relative z-10 w-8 h-8 rounded-full bg-surface border-2 border-border-default flex items-center justify-center shrink-0 mt-0.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${tech.color}`}></div>
                    </div>
                    <div className="bg-surface border border-border-default p-3 flex-1 rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-sm text-text-primary">{tech.name}</span>
                        <span className="text-xs text-text-secondary font-medium">{tech.status}</span>
                      </div>
                      <div className="text-xs text-text-muted">{tech.detail}</div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </Card>
      </div>

    </div>
  );
}

