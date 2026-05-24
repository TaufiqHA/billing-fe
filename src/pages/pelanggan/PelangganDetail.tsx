import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Edit, Lock, MessageCircle, Printer, CheckCircle, AlertTriangle, AlertCircle, MapPin, Map, RefreshCw, Activity, Terminal } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Card } from '@/src/components/ui/Card';

export default function PelangganDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('info');

  const tabs = [
    { id: 'info', label: 'Informasi' },
    { id: 'billing', label: 'Billing & Tagihan' },
    { id: 'tiket', label: 'Riwayat Tiket' },
    { id: 'perangkat', label: 'Perangkat' },
    { id: 'histori', label: 'Histori Aktivitas' },
  ];

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200 pb-12">
      <button 
        onClick={() => navigate('/pelanggan')}
        className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
      >
        <ChevronLeft className="w-4 h-4" /> Kembali ke Daftar
      </button>

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl flex items-center justify-center shrink-0 border border-primary/20">
            B
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold font-heading">Budi Santoso</h1>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-dim text-success border border-success/20">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" /> Online
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-text-secondary mt-1">
              <span>ID: #{id || 'PLG-00124'}</span>
              <span className="w-1 h-1 rounded-full bg-border-default" />
              <span>Bergabung: 12 Jan 2023</span>
              <span className="w-1 h-1 rounded-full bg-border-default" />
              <span>Teknisi: Andi Pratama</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Button variant="secondary" size="md" className="gap-2"><Edit className="w-4 h-4"/> Edit Data</Button>
          <Button variant="secondary" size="md" className="gap-2 text-danger hover:text-danger border-border-default hover:bg-danger-dim"><Lock className="w-4 h-4"/> Suspend</Button>
          <Button variant="secondary" size="md" className="gap-2 text-success hover:text-success border-border-default hover:bg-success-dim"><MessageCircle className="w-4 h-4"/> Kirim WA</Button>
          <Button variant="secondary" size="md" className="gap-2"><Printer className="w-4 h-4"/> Cetak</Button>
        </div>
      </div>

      <div className="border-b border-border-default">
        <nav className="flex space-x-1 lg:space-x-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-3 px-1 lg:px-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-text-secondary hover:text-text-primary hover:border-border-active'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6">
        {activeTab === 'info' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2 border-b border-border-default pb-2">
                Data Pribadi
              </h3>
              <div className="grid grid-cols-[120px_1fr] gap-y-3 text-sm">
                <div className="text-text-secondary">Nama Lengkap</div>
                <div className="font-medium text-text-primary">Budi Santoso</div>
                <div className="text-text-secondary">No Handphone</div>
                <div className="font-medium text-text-primary">0812-3456-7890</div>
                <div className="text-text-secondary">Email</div>
                <div className="font-medium text-text-primary">budisantoso@example.com</div>
                <div className="text-text-secondary">NIK / KTP</div>
                <div className="font-medium text-text-primary">3501234567890001</div>
                <div className="text-text-secondary">Alamat</div>
                <div className="font-medium text-text-primary">
                  Jl. Merdeka No. 12, RT 02/05<br/>
                  Kel. Sukamaju, Kec. Blimbing<br/>
                  Kota Malang, 65123
                </div>
                <div className="text-text-secondary">Koordinat GPS</div>
                <div className="font-medium text-text-primary flex items-center justify-between">
                  <span>-7.98234, 112.6345</span>
                  <Button variant="ghost" size="sm" className="h-6 px-2 text-xs gap-1 text-primary"><Map className="w-3 h-3"/> Lihat Peta</Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2 border-b border-border-default pb-2">
                Data Layanan
              </h3>
              <div className="grid grid-cols-[120px_1fr] gap-y-3 text-sm">
                <div className="text-text-secondary">Paket Berlangganan</div>
                <div>
                  <span className="font-medium text-text-primary bg-overlay px-2 py-1 rounded">Fiber 50 Mbps</span>
                </div>
                <div className="text-text-secondary">IP Address</div>
                <div className="font-medium text-text-primary">10.0.0.45 <span className="text-text-muted font-normal">(DHCP)</span></div>
                <div className="text-text-secondary">VLAN ID</div>
                <div className="font-medium text-text-primary font-mono bg-base px-1.5 py-0.5 rounded border border-border-default">101</div>
                <div className="text-text-secondary">ODP</div>
                <div className="font-medium text-text-primary text-primary hover:underline cursor-pointer">ODP-A-01</div>
                <div className="text-text-secondary">ONU SN</div>
                <div className="font-medium text-text-primary font-mono">HWTC1234ABCD</div>
                <div className="text-text-secondary">Port OLT</div>
                <div className="font-medium text-text-primary">Slot 1/1</div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'billing' && (
          <div className="space-y-6">
            <Card className="p-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-gradient-to-r from-surface to-elevated">
              <div>
                <div className="text-text-secondary text-sm mb-1">Tagihan Berjalan (Bulan Ini)</div>
                <div className="text-3xl font-bold font-heading text-text-primary">Rp 180.000</div>
                <div className="text-sm mt-1 flex items-center gap-2">
                   <span className="text-warning font-medium">Jatuh Tempo: 25 Jan 2025</span>
                   <span className="px-2 py-0.5 bg-warning-dim text-warning text-xs rounded-full font-medium border border-warning/20">Belum Dibayar</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" className="gap-2"><MessageCircle className="w-4 h-4"/> Kirim Invoice WA</Button>
                <Button className="gap-2">Catat Pembayaran Manual</Button>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="p-4 border-b border-border-default font-semibold text-lg">Histori Invoice</div>
              <table className="w-full text-sm text-left">
                <thead className="bg-base/50 border-b border-border-default text-text-muted text-xs uppercase">
                  <tr>
                    <th className="px-4 py-3">Bulan</th>
                    <th className="px-4 py-3">No Invoice</th>
                    <th className="px-4 py-3 text-right">Nominal</th>
                    <th className="px-4 py-3">Tgl Bayar</th>
                    <th className="px-4 py-3">Metode</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-default">
                  <tr className="hover:bg-overlay/50">
                    <td className="px-4 py-3 font-medium">Jan 2025</td>
                    <td className="px-4 py-3 text-text-secondary">INV-2025-0124</td>
                    <td className="px-4 py-3 text-right font-medium">Rp 180.000</td>
                    <td className="px-4 py-3 text-text-muted">-</td>
                    <td className="px-4 py-3 text-text-muted">-</td>
                    <td className="px-4 py-3"><span className="text-xs font-medium bg-warning-dim text-warning px-2 py-0.5 rounded border border-warning/20">Pending</span></td>
                  </tr>
                  <tr className="hover:bg-overlay/50">
                    <td className="px-4 py-3 font-medium">Des 2024</td>
                    <td className="px-4 py-3 text-text-secondary">INV-2024-1224</td>
                    <td className="px-4 py-3 text-right font-medium">Rp 180.000</td>
                    <td className="px-4 py-3">20 Des 2024</td>
                    <td className="px-4 py-3">Transfer</td>
                    <td className="px-4 py-3"><span className="text-xs font-medium bg-success-dim text-success px-2 py-0.5 rounded border border-success/20">Lunas</span></td>
                  </tr>
                  <tr className="hover:bg-overlay/50">
                    <td className="px-4 py-3 font-medium">Nov 2024</td>
                    <td className="px-4 py-3 text-text-secondary">INV-2024-1124</td>
                    <td className="px-4 py-3 text-right font-medium">Rp 180.000</td>
                    <td className="px-4 py-3">18 Nov 2024</td>
                    <td className="px-4 py-3">Tunai</td>
                    <td className="px-4 py-3"><span className="text-xs font-medium bg-success-dim text-success px-2 py-0.5 rounded border border-success/20">Lunas</span></td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>
        )}

        {/* Minimal placeholders for other tabs to save space */}
        {activeTab === 'tiket' && ( <div className="text-center py-12 text-text-secondary border border-dashed border-border-default rounded-xl">Fitur Riwayat Tiket dalam pengembangan</div> )}
        {activeTab === 'perangkat' && ( <div className="text-center py-12 text-text-secondary border border-dashed border-border-default rounded-xl">Fitur Perangkat dalam pengembangan</div> )}
        {activeTab === 'histori' && ( <div className="text-center py-12 text-text-secondary border border-dashed border-border-default rounded-xl">Fitur Histori Aktivitas dalam pengembangan</div> )}
      </div>
    </div>
  );
}
