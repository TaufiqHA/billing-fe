import React from 'react';
import { Server, Activity, RefreshCw } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/Input';

const mockONUs = [
  { id: 'HWTC1234ABCD', name: 'Budi Santoso', port: '1/1/1', rx: -18.5, status: 'Online' },
  { id: 'ZTEGC9876543', name: 'PT Maju Jaya', port: '1/1/2', rx: -22.1, status: 'Online' },
  { id: 'HWTC77889900', name: 'Ruko Sentosa', port: '1/1/2', rx: -28.4, status: 'Critical' },
  { id: 'ZTEGC1122334', name: 'Siti Aminah', port: '1/1/3', rx: 0, status: 'Offline' },
];

export default function OltMonitor() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold font-heading flex items-center gap-2">
            OLT / ONU Monitor
          </h1>
          <p className="text-text-secondary text-sm">Status agregator fiber dan Rx Power ONU pelanggan.</p>
        </div>
        <Button className="gap-2" size="md">
          <RefreshCw className="w-4 h-4" /> Refresh All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card className="p-4 flex items-center justify-between border-l-4 border-l-success">
          <div>
            <div className="text-sm text-text-secondary mb-1">OLT Status</div>
            <div className="font-bold text-lg">2 / 2 Online</div>
          </div>
          <Server className="w-8 h-8 text-success/20" />
        </Card>
        <Card className="p-4 flex items-center justify-between border-l-4 border-l-info">
          <div>
            <div className="text-sm text-text-secondary mb-1">Total ONU</div>
            <div className="font-bold text-lg">356 Terprovisi</div>
          </div>
          <Activity className="w-8 h-8 text-info/20" />
        </Card>
        <Card className="p-4 flex items-center justify-between border-l-4 border-l-warning">
          <div>
            <div className="text-sm text-text-secondary mb-1">Warning (Rx -25 s/d -27)</div>
            <div className="font-bold text-lg text-warning">12 ONU</div>
          </div>
        </Card>
        <Card className="p-4 flex items-center justify-between border-l-4 border-l-danger">
          <div>
            <div className="text-sm text-text-secondary mb-1">Critical (Rx &lt; -27)</div>
            <div className="font-bold text-lg text-danger">4 ONU</div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="p-4 border-b border-border-default flex flex-col sm:flex-row justify-between sm:items-center gap-3">
           <div className="font-semibold">Daftar Koneksi ONU</div>
           <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Cari SN / Nama..." 
                className="bg-base border border-border-default rounded-md h-9 px-3 text-sm focus:outline-none focus:border-primary text-text-primary"
              />
              <select className="bg-base border border-border-default rounded-md h-9 px-3 text-sm focus:outline-none focus:border-primary">
                <option>Semua Status</option>
                <option>Online</option>
                <option>Offline</option>
                <option>Critical Rx</option>
              </select>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-base/50 text-xs uppercase text-text-muted border-b border-border-default">
              <tr>
                <th className="px-4 py-3">SN ONU</th>
                <th className="px-4 py-3">Nama Pelanggan</th>
                <th className="px-4 py-3">PON Port</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Rx Power</th>
                <th className="px-4 py-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-default">
               {mockONUs.map((onu, i) => (
                 <tr key={i} className="hover:bg-overlay/50">
                    <td className="px-4 py-3 font-mono text-text-secondary">{onu.id}</td>
                    <td className="px-4 py-3 font-medium">{onu.name}</td>
                    <td className="px-4 py-3">{onu.port}</td>
                    <td className="px-4 py-3">
                      {onu.status === 'Online' && <span className="text-success flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success"></span> Online</span>}
                      {onu.status === 'Critical' && <span className="text-warning flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-warning"></span> Online</span>}
                      {onu.status === 'Offline' && <span className="text-danger flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-danger"></span> Offline</span>}
                    </td>
                    <td className="px-4 py-3">
                       <span className={`px-2 py-0.5 rounded font-mono text-xs ${
                         onu.rx > -25 && onu.rx < 0 ? 'bg-success-dim text-success' :
                         onu.rx <= -25 && onu.rx > -27 ? 'bg-warning-dim text-warning' :
                         onu.rx <= -27 ? 'bg-danger-dim text-danger' : 'bg-overlay text-text-muted'
                       }`}>
                          {onu.rx === 0 ? '- dBm' : `${onu.rx} dBm`}
                       </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                       <Button variant="ghost" size="sm" className="h-7 text-xs border border-border-default">Detail</Button>
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
