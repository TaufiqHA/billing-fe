/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '@/src/pages/Login';
import Dashboard from '@/src/pages/Dashboard';
import ForgotPassword from '@/src/pages/ForgotPassword';
import AppLayout from '@/src/layouts/AppLayout';

import PelangganList from '@/src/pages/pelanggan/PelangganList';
import PelangganForm from '@/src/pages/pelanggan/PelangganForm';
import PelangganDetail from '@/src/pages/pelanggan/PelangganDetail';

import InvoiceList from '@/src/pages/billing/InvoiceList';
import RecordPayment from '@/src/pages/billing/RecordPayment';
import FinanceReport from '@/src/pages/billing/FinanceReport';
import ServicePackages from '@/src/pages/billing/ServicePackages';

import TiketBoard from '@/src/pages/tiket/TiketBoard';
import MikroTikManager from '@/src/pages/jaringan/MikroTikManager';
import OltMonitor from '@/src/pages/jaringan/OltMonitor';
import BandwidthMonitor from '@/src/pages/jaringan/BandwidthMonitor';

import FiberMap from '@/src/pages/gis/FiberMap';
import TechTracking from '@/src/pages/gis/TechTracking';
import StokPerangkat from '@/src/pages/inventaris/StokPerangkat';
import MutasiBarang from '@/src/pages/inventaris/MutasiBarang';
import WaGateway from '@/src/pages/pengaturan/WaGateway';
import Automasi from '@/src/pages/pengaturan/Automasi';
import PengaturanUmum from '@/src/pages/pengaturan/PengaturanUmum';
import UserManagement from '@/src/pages/pengaturan/UserManagement';

import Analytics from '@/src/pages/laporan/Analytics';
import CustomerPortal from '@/src/pages/portal/CustomerPortal';

import NotFound from '@/src/pages/error/NotFound';
import ServerError from '@/src/pages/error/ServerError';

import DispatchTiket from '@/src/pages/teknisi/DispatchTiket';
import LiveMonitor from '@/src/pages/jaringan/LiveMonitor';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/portal" element={<CustomerPortal />} />
        
        {/* Protected Routes */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/live-monitor" element={<LiveMonitor />} />
          
          <Route path="/pelanggan" element={<PelangganList />} />
          <Route path="/pelanggan/tambah" element={<PelangganForm />} />
          <Route path="/pelanggan/:id" element={<PelangganDetail />} />
          
          <Route path="/tiket" element={<TiketBoard />} />
          
          <Route path="/billing" element={<InvoiceList />} />
          <Route path="/billing/pembayaran/catat" element={<RecordPayment />} />
          <Route path="/billing/laporan" element={<FinanceReport />} />
          <Route path="/billing/paket" element={<ServicePackages />} />
          
          <Route path="/jaringan" element={<MikroTikManager />} />
          <Route path="/jaringan/olt" element={<OltMonitor />} />
          <Route path="/jaringan/bandwidth" element={<BandwidthMonitor />} />

          <Route path="/gis/fiber" element={<FiberMap />} />
          <Route path="/gis/teknisi" element={<TechTracking />} />
          
          <Route path="/teknisi" element={<DispatchTiket />} />

          <Route path="/inventaris/stok" element={<StokPerangkat />} />
          <Route path="/inventaris/mutasi" element={<MutasiBarang />} />
          
          <Route path="/laporan" element={<Analytics />} />

          <Route path="/pengaturan/whatsapp" element={<WaGateway />} />
          <Route path="/pengaturan/automasi" element={<Automasi />} />
          <Route path="/pengaturan/umum" element={<PengaturanUmum />} />
          <Route path="/pengaturan/users" element={<UserManagement />} />
          
          <Route path="/500" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
