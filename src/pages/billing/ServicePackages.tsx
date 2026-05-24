import { Plus, Edit2, Box, Trash2 } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Card } from '@/src/components/ui/Card';

const mockPackages = [
  { id: 1, name: 'Fiber 20 Mbps', price: 120000, desc: 'Cocok untuk rumah tangga kecil 1-3 perangkat.', profile: 'ISP20M', burst: '30 Mbps', subs: 234, active: true },
  { id: 2, name: 'Fiber 50 Mbps', price: 180000, desc: 'Ideal untuk streaming dan gaming keluarga.', profile: 'ISP50M', burst: '75 Mbps', subs: 567, active: true },
  { id: 3, name: 'Fiber 100 Mbps', price: 280000, desc: 'Performa maksimal untuk kreator dan heavy user.', profile: 'ISP100M', burst: '120 Mbps', subs: 312, active: true },
  { id: 4, name: 'Promo New Year 30 Mbps', price: 150000, desc: 'Paket promosi khusus pelanggan baru.', profile: 'ISP30M_PRM', burst: '40 Mbps', subs: 45, active: false },
];

export default function ServicePackages() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading">Paket Layanan</h1>
          <p className="text-text-secondary text-sm">Kelola daftar layanan, harga, dan profile MikroTik.</p>
        </div>
        <Button size="md" className="gap-2">
          <Plus className="w-4 h-4" /> Tambah Paket Baru
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPackages.map((pkg) => (
          <Card key={pkg.id} className={`p-6 flex flex-col justify-between ${!pkg.active ? 'opacity-70 grayscale-[30%]' : ''}`}>
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Box className="w-5 h-5" />
                </div>
                <span className={`text-xs font-medium px-2 py-0.5 rounded border ${pkg.active ? 'bg-success-dim text-success border-success/20' : 'bg-overlay text-text-secondary border-border-default'}`}>
                  {pkg.active ? 'Aktif' : 'Nonaktif'}
                </span>
              </div>
              <h3 className="text-xl font-bold font-heading mb-1">{pkg.name}</h3>
              <div className="text-primary font-semibold mb-3">Rp {pkg.price.toLocaleString('id-ID')} / bln</div>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">{pkg.desc}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Pelanggan Aktif</span>
                  <span className="font-medium text-text-primary">{pkg.subs}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Profile MikroTik</span>
                  <span className="font-mono bg-base px-1.5 py-0.5 rounded text-xs border border-border-default">{pkg.profile}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Burst Speed</span>
                  <span className="font-medium text-text-primary">{pkg.burst}</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 pt-4 border-t border-border-default mt-auto">
              <Button variant="secondary" size="sm" className="w-full gap-2 text-xs h-8"><Edit2 className="w-3 h-3"/> Edit</Button>
              <Button variant="secondary" size="sm" className="w-full gap-2 text-xs h-8 text-danger hover:text-danger hover:bg-danger-dim border-border-default"><Trash2 className="w-3 h-3"/> {pkg.active ? 'Nonaktifkan' : 'Aktifkan'}</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
