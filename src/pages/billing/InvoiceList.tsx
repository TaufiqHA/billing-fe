import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Download, MessageCircle, FileText, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Card } from '@/src/components/ui/Card';

const mockInvoices = [
  { id: 'INV-2025-0124', name: 'Budi Santoso', package: 'Fiber 50 Mbps', bill: 180000, dueDate: '25 Jan 2025', status: 'Pending' },
  { id: 'INV-2025-0123', name: 'PT Maju Jaya', package: 'Fiber 100 Mbps', bill: 350000, dueDate: '20 Jan 2025', status: 'Overdue' },
  { id: 'INV-2025-0122', name: 'CV Sentosa', package: 'Fiber 50 Mbps', bill: 180000, dueDate: '05 Jan 2025', status: 'Overdue' },
  { id: 'INV-2025-0121', name: 'Siti Aminah', package: 'Fiber 20 Mbps', bill: 120000, dueDate: '10 Jan 2025', status: 'Lunas' },
];

export default function InvoiceList() {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSelect = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const toggleAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setSelectedItems(mockInvoices.map(i => i.id));
    else setSelectedItems([]);
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200">
      <div>
        <h1 className="text-2xl font-bold font-heading">Invoice Management</h1>
        <p className="text-text-secondary text-sm">Kelola tagihan pelanggan dan pantau status pembayaran.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4 border-l-4 border-l-warning">
          <div className="flex items-center gap-2 text-text-muted mb-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Belum Dibayar</span>
          </div>
          <div className="text-2xl font-bold font-heading mb-1 text-text-primary">Rp 14.2 Juta</div>
          <div className="text-xs text-text-secondary">89 invoice</div>
        </Card>
        <Card className="p-4 border-l-4 border-l-danger bg-danger-dim/20">
          <div className="flex items-center gap-2 text-danger mb-2">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">Jatuh Tempo Hari Ini/Lewat</span>
          </div>
          <div className="text-2xl font-bold font-heading mb-1 text-text-primary">47 invoice</div>
          <button className="text-xs font-medium text-danger hover:underline">Kirim Reminder WA →</button>
        </Card>
        <Card className="p-4 border-l-4 border-l-success">
          <div className="flex items-center gap-2 text-text-muted mb-2">
            <CheckCircle className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-text-secondary">Lunas Bulan Ini</span>
          </div>
          <div className="text-2xl font-bold font-heading mb-1 text-text-primary">Rp 48.7 Juta</div>
          <div className="text-xs text-text-secondary">1,158 invoice</div>
        </Card>
      </div>

      <div className="bg-surface border border-border-default rounded-xl">
        <div className="p-4 border-b border-border-default flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2 items-center flex-1">
            <div className="relative w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input 
                type="text" 
                placeholder="Cari invoice atau pelanggan..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-base border border-border-default rounded-md h-9 pl-9 pr-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary placeholder:text-text-muted"
              />
            </div>
            <select className="bg-surface border border-border-default rounded-md h-9 px-3 text-sm text-text-secondary focus:outline-none focus:border-primary">
              <option>Periode: Semua</option>
              <option>Januari 2025</option>
            </select>
            <select className="bg-surface border border-border-default rounded-md h-9 px-3 text-sm text-text-secondary focus:outline-none focus:border-primary">
              <option>Status: Semua</option>
              <option>Pending</option>
              <option>Overdue</option>
              <option>Lunas</option>
            </select>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="gap-2"><FileText className="w-4 h-4"/> Generate Massal</Button>
            <Button variant="secondary" size="sm" className="gap-2"><Download className="w-4 h-4"/> Export</Button>
          </div>
        </div>

        {selectedItems.length > 0 && (
          <div className="bg-primary-glow border-b border-border-default px-4 py-2 flex items-center justify-between">
            <span className="text-sm font-medium text-primary">{selectedItems.length} terpilih</span>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary" className="border-primary/30 text-primary h-7 text-xs">Kirim WA Reminder</Button>
              <Button size="sm" variant="secondary" className="border-success/30 text-success h-7 text-xs">Tandai Lunas</Button>
              <Button size="sm" variant="ghost" className="h-7 text-xs text-danger hover:bg-danger-dim">Hapus</Button>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-text-muted uppercase bg-base/50 border-b border-border-default">
              <tr>
                <th className="px-4 py-3 w-10">
                  <input type="checkbox" className="rounded border-border-default bg-base accent-primary" 
                    onChange={toggleAll}
                    checked={mockInvoices.length > 0 && selectedItems.length === mockInvoices.length}
                  />
                </th>
                <th className="px-4 py-3 font-semibold">No Invoice</th>
                <th className="px-4 py-3 font-semibold">Pelanggan</th>
                <th className="px-4 py-3 font-semibold">Paket</th>
                <th className="px-4 py-3 font-semibold text-right">Nominal</th>
                <th className="px-4 py-3 font-semibold">Jatuh Tempo</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-default">
              {mockInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-overlay/50 transition-colors">
                  <td className="px-4 py-3">
                    <input type="checkbox" className="rounded border-border-default bg-base accent-primary"
                      checked={selectedItems.includes(inv.id)}
                      onChange={() => toggleSelect(inv.id)}
                    />
                  </td>
                  <td className="px-4 py-3 text-text-secondary whitespace-nowrap">{inv.id}</td>
                  <td className="px-4 py-3 font-medium text-text-primary whitespace-nowrap">{inv.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{inv.package}</td>
                  <td className="px-4 py-3 text-right whitespace-nowrap">Rp {inv.bill.toLocaleString('id-ID')}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-text-secondary">{inv.dueDate}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border ${
                      inv.status === 'Lunas' ? 'bg-success-dim text-success border-success/20' :
                      inv.status === 'Overdue' ? 'bg-danger-dim text-danger border-danger/20' :
                      'bg-warning-dim text-warning border-warning/20'
                    }`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 text-text-secondary hover:text-primary rounded-md flex-shrink-0" title="Kirim WA"><MessageCircle className="w-4 h-4"/></button>
                      <button className="p-1.5 text-text-secondary hover:text-primary rounded-md flex-shrink-0" title="Cetak"><FileText className="w-4 h-4"/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
