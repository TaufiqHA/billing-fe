import React from 'react';
import { Save, Building, CreditCard, Code } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/Input';

export default function PengaturanUmum() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200 min-h-screen pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading">Pengaturan Umum</h1>
          <p className="text-text-secondary text-sm">Kelola profil usaha, pajak, dan integrasi eksternal.</p>
        </div>
        <Button className="gap-2 shrink-0"><Save className="w-4 h-4" /> Simpan Perubahan</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 space-y-6">
          <div className="flex items-center gap-2 border-b border-border-default pb-2">
            <Building className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">Profil ISP</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1 block">Nama Perusahaan / ISP</label>
              <Input defaultValue="PT Maju Jaringan Nusantara" />
            </div>
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1 block">Alamat Kantor</label>
              <textarea 
                className="w-full rounded-md border border-border-default bg-surface px-3 py-2 text-sm focus-visible:outline-none focus:border-primary text-text-primary resize-none h-20"
                defaultValue="Jl. Teknologi No. 45, Jakarta Selatan"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-text-secondary mb-1 block">No. Telepon Bantuan</label>
                <Input defaultValue="021-1234567" />
              </div>
              <div>
                <label className="text-xs font-medium text-text-secondary mb-1 block">Email Admin</label>
                <Input defaultValue="admin@majujaringan.co.id" />
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 space-y-6">
          <div className="flex items-center gap-2 border-b border-border-default pb-2">
            <CreditCard className="w-5 h-5 text-success" />
            <h2 className="text-lg font-semibold">Konfigurasi Billing</h2>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-text-secondary mb-1 block">Mata Uang</label>
                <select className="w-full rounded-md border border-border-default bg-surface px-3 h-10 text-sm focus-visible:outline-none focus:border-primary">
                  <option>IDR - Rupiah</option>
                  <option>USD - US Dollar</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-text-secondary mb-1 block">Pajak PPN (%)</label>
                <Input type="number" defaultValue="11" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1 block">Rekening Bank Pembayaran</label>
              <Input defaultValue="BCA 1234567890 a.n PT Maju Jaringan" />
            </div>
            <div className="flex items-center gap-2 mt-2">
               <input type="checkbox" id="auto-suspend" className="rounded bg-surface border-border-default text-primary" defaultChecked />
               <label htmlFor="auto-suspend" className="text-sm font-medium">Terapkan isolir jika belum lunas lewati batas jatuh tempo</label>
            </div>
          </div>
        </Card>

        <Card className="p-6 space-y-6 lg:col-span-2">
          <div className="flex items-center gap-2 border-b border-border-default pb-2">
            <Code className="w-5 h-5 text-info" />
            <h2 className="text-lg font-semibold">Integrasi API (Payment Gateway / Lainnya)</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-text-secondary">Midtrans (Virtual Account)</h3>
              <div>
                <label className="text-xs font-medium text-text-secondary mb-1 block">Server Key</label>
                <Input type="password" defaultValue="VT-server-1234567890" />
              </div>
              <div>
                <label className="text-xs font-medium text-text-secondary mb-1 block">Client Key</label>
                <Input type="password" defaultValue="VT-client-1234567890" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-text-secondary">MikroTik API</h3>
              <div>
                <label className="text-xs font-medium text-text-secondary mb-1 block">API Port</label>
                <Input defaultValue="8728" />
              </div>
              <div className="flex items-center gap-2 mt-2">
                 <input type="checkbox" id="api-ssl" className="rounded bg-surface border-border-default text-primary" />
                 <label htmlFor="api-ssl" className="text-sm font-medium">Gunakan API-SSL (Port 8729)</label>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
