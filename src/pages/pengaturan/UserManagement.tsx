import React from 'react';
import { Users, Plus, Shield, Search } from 'lucide-react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';

const users = [
  { nama: 'Admin Taufiq', email: 'admin@majujaringan.id', role: 'Super Admin', status: 'Aktif' },
  { nama: 'Siti Keuangan', email: 'finance@majujaringan.id', role: 'Billing', status: 'Aktif' },
  { nama: 'Andi Teknisi', email: 'andi.tech@majujaringan.id', role: 'Teknisi', status: 'Aktif' },
  { nama: 'Budi CS', email: 'budi.cs@majujaringan.id', role: 'Customer Service', status: 'Non-Aktif' },
];

export default function UserManagement() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading">User & Role Management</h1>
          <p className="text-text-secondary text-sm">Atur pengguna sistem dan matriks izin akses (Role Based Access Control).</p>
        </div>
        <Button size="md" className="gap-2"><Plus className="w-4 h-4"/> Tambah User</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <Card className="md:col-span-2 flex flex-col">
           <div className="p-4 border-b border-border-default flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center bg-surface">
              <h3 className="font-semibold text-sm flex items-center gap-2"><Users className="w-4 h-4" /> Daftar Pengguna</h3>
              <div className="relative w-full sm:w-48">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-text-muted" />
                <input 
                  type="text" 
                  placeholder="Cari user..." 
                  className="w-full bg-base border border-border-default rounded-md h-8 pl-8 pr-3 text-xs focus:outline-none focus:border-primary text-text-primary"
                />
              </div>
           </div>
           <div className="overflow-x-auto flex-1">
             <table className="w-full text-sm text-left">
                <thead className="bg-base/50 text-xs uppercase text-text-muted border-b border-border-default">
                   <tr>
                      <th className="px-4 py-3">Nama</th>
                      <th className="px-4 py-3">Role</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3 text-right">Aksi</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-border-default">
                   {users.map((u, i) => (
                     <tr key={i} className="hover:bg-overlay/50 transition-colors">
                        <td className="px-4 py-3">
                           <div className="font-medium text-text-primary">{u.nama}</div>
                           <div className="text-xs text-text-secondary">{u.email}</div>
                        </td>
                        <td className="px-4 py-3">
                           <span className={`px-2 py-0.5 rounded text-xs font-medium border ${u.role === 'Super Admin' ? 'bg-danger-dim/30 text-danger border-danger/20' : 'bg-surface border-border-default'}`}>
                             {u.role}
                           </span>
                        </td>
                        <td className="px-4 py-3">
                           <span className={`flex items-center gap-1.5 text-xs font-medium ${u.status === 'Aktif' ? 'text-success' : 'text-text-muted'}`}>
                             <span className={`w-1.5 h-1.5 rounded-full ${u.status === 'Aktif' ? 'bg-success' : 'bg-text-muted'}`} /> {u.status}
                           </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                           <Button variant="ghost" size="sm" className="h-7 text-xs border border-border-default">Edit</Button>
                        </td>
                     </tr>
                   ))}
                </tbody>
             </table>
           </div>
         </Card>

         <Card className="flex flex-col">
            <div className="p-4 border-b border-border-default bg-surface">
              <h3 className="font-semibold text-sm flex items-center gap-2"><Shield className="w-4 h-4" /> Role & Izin Akses</h3>
            </div>
            <div className="p-2 flex-1 overflow-y-auto space-y-1">
               <div className="p-3 bg-surface border border-border-active rounded-lg cursor-pointer">
                  <div className="font-medium text-sm mb-1 text-primary">Super Admin</div>
                  <div className="text-xs text-text-secondary">Akses penuh ke semua modul dan pengaturan sistem.</div>
               </div>
               <div className="p-3 hover:bg-overlay rounded-lg cursor-pointer transition-colors border border-transparent">
                  <div className="font-medium text-sm mb-1">Billing</div>
                  <div className="text-xs text-text-secondary">Invoice, Keuangan, Laporan, Pembayaran.</div>
               </div>
               <div className="p-3 hover:bg-overlay rounded-lg cursor-pointer transition-colors border border-transparent">
                  <div className="font-medium text-sm mb-1">Teknisi</div>
                  <div className="text-xs text-text-secondary">Networking, Ticketing, Fiber Map, Stok.</div>
               </div>
               <div className="p-3 hover:bg-overlay rounded-lg cursor-pointer transition-colors border border-transparent">
                  <div className="font-medium text-sm mb-1">Customer Service</div>
                  <div className="text-xs text-text-secondary">Data Pelanggan, Buat Tiket, Status Tagihan.</div>
               </div>
               
               <div className="pt-3 px-1">
                 <Button variant="ghost" className="w-full text-xs text-text-muted border border-dashed border-border-default">+ Buat Role Baru</Button>
               </div>
            </div>
         </Card>
      </div>
    </div>
  );
}
