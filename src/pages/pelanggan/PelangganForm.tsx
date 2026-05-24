import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Map, Save, Send } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/Input';
import { Card } from '@/src/components/ui/Card';

export default function PelangganForm() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200 pb-24 relative min-h-screen">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate('/pelanggan')}
          className="w-10 h-10 rounded-full hover:bg-surface flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors border border-transparent hover:border-border-default"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold font-heading">Tambah Pelanggan Baru</h1>
          <p className="text-text-secondary text-sm">Masukkan data pribadi, lokasi, dan layanan untuk aktivasi akun baru.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Kolom Kiri */}
        <div className="space-y-6">
          <Card className="p-6 space-y-4">
            <h2 className="text-lg font-semibold border-b border-border-default pb-2">1. Data Pribadi</h2>
            
            <div className="grid grid-cols-1 gap-4">
              <Input label="Nama Lengkap *" placeholder="Contoh: Budi Santoso" required />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Nomor Handphone *" placeholder="Contoh: 08123456789" type="tel" required />
                <Input label="NIK / KTP" placeholder="16 digit NIK" />
              </div>
              <Input label="Email" placeholder="Contoh: budi@example.com" type="email" />
              
              <div className="pt-2">
                <label className="text-xs font-medium text-text-secondary mb-1 block">Alamat Lengkap</label>
                <textarea 
                  className="w-full h-24 rounded-md border border-border-default bg-surface px-3 py-2 text-sm focus-visible:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary placeholder:text-text-muted resize-none"
                  placeholder="Nama jalan, nomor rumah, detail lainnya..."
                />
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1"><Input label="RT" placeholder="01" /></div>
                <div className="col-span-1"><Input label="RW" placeholder="02" /></div>
                <div className="col-span-2"><Input label="Kelurahan" placeholder="Nama kelurahan" /></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input label="Kecamatan" placeholder="Nama kecamatan" />
                <Input label="Kota / Kabupaten" placeholder="Nama kota" />
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-border-default pb-2">
              <h2 className="text-lg font-semibold">2. Koordinat Lokasi</h2>
              <Button size="sm" variant="secondary" className="gap-2 h-7 text-xs"><Map className="w-3 h-3"/> Pilih di Peta</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input label="Latitude" placeholder="-7.98124" />
              <Input label="Longitude" placeholder="112.63245" />
            </div>
          </Card>
        </div>

        {/* Kolom Kanan */}
        <div className="space-y-6">
          <Card className="p-6 space-y-4">
            <h2 className="text-lg font-semibold border-b border-border-default pb-2">3. Data Layanan</h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-text-secondary mb-1 block">Paket Layanan *</label>
                <select className="w-full rounded-md border border-border-default bg-surface px-3 h-10 text-sm focus-visible:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary">
                  <option value="">-- Pilih Paket --</option>
                  <option value="1">Fiber 20 Mbps - Rp 120.000</option>
                  <option value="2">Fiber 50 Mbps - Rp 180.000</option>
                  <option value="3">Fiber 100 Mbps - Rp 280.000</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input label="Tanggal Aktivasi" type="date" defaultValue="2026-05-24" />
                <div>
                  <label className="text-xs font-medium text-text-secondary mb-1 block">IP Assignment</label>
                  <select className="w-full rounded-md border border-border-default bg-surface px-3 h-10 text-sm focus-visible:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary">
                    <option value="dhcp">DHCP (Otomatis)</option>
                    <option value="static">Static IP</option>
                  </select>
                </div>
              </div>

              <Input label="VLAN ID" placeholder="Contoh: 101" />
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-text-secondary mb-1 block">ODP / Titik</label>
                  <select className="w-full rounded-md border border-border-default bg-surface px-3 h-10 text-sm focus-visible:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary">
                    <option value="">-- Pilih ODP --</option>
                    <option value="odp1">ODP-A-01 (Tersedia: 2)</option>
                    <option value="odp2">ODP-A-02 (Tersedia: 4)</option>
                  </select>
                </div>
                <Input label="Port OLT" placeholder="Contoh: 1/1/1" />
              </div>
              
              <Input label="ONU Serial Number" placeholder="Contoh: HWTC1234ABCD" className="font-mono uppercase" />
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <h2 className="text-lg font-semibold border-b border-border-default pb-2">4. Penanganan</h2>
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1 block">Teknisi Bertugas</label>
              <select className="w-full rounded-md border border-border-default bg-surface px-3 h-10 text-sm focus-visible:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary">
                <option value="">-- Pilih Teknisi --</option>
                <option value="1">Andi Pratama</option>
                <option value="2">Riko Setiawan</option>
              </select>
            </div>
          </Card>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 lg:left-60 right-0 p-4 bg-surface border-t border-border-default flex justify-end gap-3 z-30 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] transition-all auto-collapse">
        <Button variant="ghost" onClick={() => navigate('/pelanggan')}>Batal</Button>
        <Button variant="secondary" className="gap-2"><Save className="w-4 h-4"/> Simpan sebagai Draft</Button>
        <Button className="gap-2"><Send className="w-4 h-4"/> Simpan & Aktifkan</Button>
      </div>
    </div>
  );
}
