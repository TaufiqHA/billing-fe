import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Filter, Download, MoreHorizontal, Eye, Edit2, MessageSquare, Lock } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/Input';

const mockPelanggan = [
  { id: 'PLG-00124', name: 'Budi Santoso', phone: '0812-3456-7890', package: 'Fiber 50 Mbps', status: 'Online', dueDate: '2025-01-25', bill: 180000, activeDaysLeft: 2 },
  { id: 'PLG-00125', name: 'PT Maju Jaya', phone: '0811-2233-4455', package: 'Fiber 100 Mbps', status: 'Online', dueDate: '2025-01-20', bill: 350000, activeDaysLeft: -3 },
  { id: 'PLG-00126', name: 'Siti Aminah', phone: '0857-9988-7766', package: 'Fiber 20 Mbps', status: 'Suspend', dueDate: '2025-01-10', bill: 120000, activeDaysLeft: -13 },
  { id: 'PLG-00127', name: 'Ruko Sentosa', phone: '0813-1122-3344', package: 'Fiber 50 Mbps', status: 'Isolir', dueDate: '2025-01-05', bill: 180000, activeDaysLeft: -18 },
  { id: 'PLG-00128', name: 'Ahmad Dahlan', phone: '0896-5544-3322', package: 'Fiber 20 Mbps', status: 'Online', dueDate: '2025-02-15', bill: 120000, activeDaysLeft: 23 },
];

export default function PelangganList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading">Data Pelanggan</h1>
          <p className="text-text-secondary text-sm">Kelola informasi dan status layanan pelanggan.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="md" className="gap-2">
            <Download className="w-4 h-4" /> Export
          </Button>
          <Button size="md" className="gap-2" onClick={() => navigate('/pelanggan/tambah')}>
            <Plus className="w-4 h-4" /> Tambah Pelanggan
          </Button>
        </div>
      </div>

      <div className="bg-surface border border-border-default rounded-xl">
        <div className="p-4 border-b border-border-default flex flex-wrap gap-3 items-center">
          <div className="relative w-full max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input 
              type="text" 
              placeholder="Cari nama, ID, no HP..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-base border border-border-default rounded-md h-9 pl-9 pr-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary placeholder:text-text-muted"
            />
          </div>
          <Button variant="ghost" size="sm" className="gap-1 border border-border-default bg-surface hover:bg-overlay"><Filter className="w-3 h-3"/> Status: Semua</Button>
          <Button variant="ghost" size="sm" className="gap-1 border border-border-default bg-surface hover:bg-overlay"><Filter className="w-3 h-3"/> Paket: Semua</Button>
          <Button variant="ghost" size="sm" className="gap-1 border border-border-default bg-surface hover:bg-overlay"><Filter className="w-3 h-3"/> Area: Semua</Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-text-muted uppercase bg-base/50 border-b border-border-default">
              <tr>
                <th className="px-4 py-3 w-10"><input type="checkbox" className="rounded border-border-default bg-base accent-primary" /></th>
                <th className="px-4 py-3 font-semibold">Pelanggan</th>
                <th className="px-4 py-3 font-semibold">ID Pel</th>
                <th className="px-4 py-3 font-semibold">No HP</th>
                <th className="px-4 py-3 font-semibold">Paket</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Jatuh Tempo</th>
                <th className="px-4 py-3 font-semibold text-right">Tagihan</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-default">
              {mockPelanggan.map((pel) => (
                <tr 
                  key={pel.id} 
                  className="hover:bg-overlay/50 transition-colors group cursor-pointer"
                  onClick={() => navigate(`/pelanggan/${pel.id}`)}
                >
                  <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}><input type="checkbox" className="rounded border-border-default bg-base accent-primary" /></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0">
                        {pel.name.charAt(0)}
                      </div>
                      <span className="font-medium text-text-primary whitespace-nowrap">{pel.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-text-secondary whitespace-nowrap">{pel.id}</td>
                  <td className="px-4 py-3 text-text-secondary whitespace-nowrap">{pel.phone}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{pel.package}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border ${
                      pel.status === 'Online' ? 'bg-success-dim text-success border-success/20' :
                      pel.status === 'Suspend' ? 'bg-warning-dim text-warning border-warning/20' :
                      pel.status === 'Isolir' ? 'bg-danger-dim text-danger border-danger/20' :
                      'bg-info-dim text-info border-info/20'
                    }`}>
                      {pel.status === 'Online' && <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />}
                      {pel.status !== 'Online' && <span className={`w-1.5 h-1.5 rounded-full ${pel.status==='Suspend'?'bg-warning':'bg-danger'}`} />}
                      {pel.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`${pel.activeDaysLeft <= 3 && pel.activeDaysLeft > 0 ? 'text-warning' : pel.activeDaysLeft <= 0 ? 'text-danger font-medium' : 'text-text-secondary'}`}>
                      {pel.dueDate}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right whitespace-nowrap">Rp {pel.bill.toLocaleString('id-ID')}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="opacity-0 group-hover:opacity-100 flex items-center justify-end gap-1 transition-opacity" onClick={(e) => e.stopPropagation()}>
                      <button className="p-1.5 text-text-secondary hover:text-primary rounded-md hover:bg-base" title="Lihat"><Eye className="w-4 h-4"/></button>
                      <button className="p-1.5 text-text-secondary hover:text-primary rounded-md hover:bg-base" title="Edit"><Edit2 className="w-4 h-4"/></button>
                      <button className="p-1.5 text-text-secondary hover:text-success rounded-md hover:bg-base" title="Kirim WA"><MessageSquare className="w-4 h-4"/></button>
                      <button className="p-1.5 text-text-secondary hover:text-danger rounded-md hover:bg-base" title="Suspend"><Lock className="w-4 h-4"/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
          <div className="text-center sm:text-left">Menampilkan 1–5 dari 1,247 pelanggan</div>
          <div className="flex gap-1 overflow-x-auto w-full sm:w-auto justify-center pb-2 sm:pb-0">
            <Button variant="ghost" size="sm" disabled>Sebelumnya</Button>
            <Button variant="ghost" size="sm" className="bg-overlay text-text-primary">1</Button>
            <Button variant="ghost" size="sm">2</Button>
            <Button variant="ghost" size="sm">3</Button>
            <Button variant="ghost" size="sm">Selanjutnya</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
