import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Search, Loader2 } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/Input';
import { Card } from '@/src/components/ui/Card';

export default function RecordPayment() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedPelanggan, setSelectedPelanggan] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search) return;
    setIsSearching(true);
    setTimeout(() => {
      setSelectedPelanggan({
        name: 'Budi Santoso',
        id: 'PLG-00124',
        package: 'Fiber 50 Mbps',
        totalBill: 180000,
        invoiceList: [
          { id: 'INV-2025-0124', month: 'Janwari 2025', amount: 180000 }
        ]
      });
      setIsSearching(false);
    }, 600);
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200 min-h-screen">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate('/billing')}
          className="w-10 h-10 rounded-full hover:bg-surface flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors border border-transparent hover:border-border-default"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold font-heading">Catat Pembayaran Manual</h1>
          <p className="text-text-secondary text-sm">Proses pembayaran tunai atau transfer secara manual.</p>
        </div>
      </div>

      <div className="max-w-[520px] mx-auto pt-4">
        <Card className="p-6 relative overflow-hidden">
          {/* Abstract glow */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary-glow rounded-full blur-2xl pointer-events-none" />

          {!selectedPelanggan ? (
            <form onSubmit={handleSearch} className="space-y-4">
              <label className="text-sm font-medium text-text-secondary">Cari Pelanggan</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input 
                    type="text" 
                    placeholder="Nama, ID Pelanggan, atau No HP..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-base border border-border-default rounded-md h-10 pl-9 pr-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary placeholder:text-text-muted"
                  />
                </div>
                <Button type="submit" disabled={isSearching || !search}>
                  {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Cari'}
                </Button>
              </div>
              <div className="text-xs text-text-muted text-center pt-8">
                Masukkan kata kunci untuk menemukan tagihan belum dibayar.
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-start border-b border-border-default pb-4">
                <div>
                  <h3 className="font-bold text-lg">{selectedPelanggan.name}</h3>
                  <div className="text-sm text-text-secondary">{selectedPelanggan.id} • {selectedPelanggan.package}</div>
                </div>
                <button 
                  onClick={() => setSelectedPelanggan(null)}
                  className="text-xs text-primary hover:underline"
                >
                  Ganti
                </button>
              </div>

              <div className="bg-overlay/50 rounded-lg p-3 text-sm flex justify-between items-center border border-border-default">
                <span className="text-text-secondary">Total Tagihan (1 Invoice)</span>
                <span className="font-bold text-lg text-text-primary">Rp {selectedPelanggan.totalBill.toLocaleString('id-ID')}</span>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    label="Nominal Bayar *"
                    type="number" 
                    defaultValue={selectedPelanggan.totalBill}
                  />
                  <Input 
                    label="Tanggal Bayar *"
                    type="date"
                    defaultValue="2026-05-24"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-text-secondary mb-1 block">Metode Bayar *</label>
                  <select className="w-full rounded-md border border-border-default bg-surface px-3 h-10 text-sm focus-visible:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary">
                    <option value="tunai">Tunai</option>
                    <option value="transfer">Transfer Bank</option>
                    <option value="qris">QRIS</option>
                  </select>
                </div>

                <Input label="No Referensi" placeholder="Opsional, cth: TRX-12345" />

                <div>
                  <label className="text-xs font-medium text-text-secondary mb-1 block">Keterangan</label>
                  <textarea 
                    className="w-full rounded-md border border-border-default bg-surface px-3 py-2 text-sm focus-visible:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary placeholder:text-text-muted resize-none h-20"
                    placeholder="Opsional..."
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-border-default grid grid-cols-2 gap-3">
                <Button variant="secondary" className="w-full">Simpan & Cetak</Button>
                <Button className="w-full">Simpan & Kirim WA</Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
