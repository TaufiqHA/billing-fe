import React from 'react';
import { AlertTriangle, ServerCrash, ArrowLeft } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-base flex flex-col items-center justify-center p-6 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-surface via-base to-base">
      <div className="text-center max-w-sm">
        <div className="w-20 h-20 bg-warning-dim rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-base shadow-glow">
           <AlertTriangle className="w-10 h-10 text-warning" />
        </div>
        <h1 className="text-6xl font-bold font-mono text-text-primary mb-2">404</h1>
        <h2 className="text-xl font-semibold mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-sm text-text-secondary mb-8">Maaf, kami tidak dapat menemukan halaman yang Anda cari. Periksa kembali URL atau kembali ke halaman utama.</p>
        
        <Button size="lg" className="w-full gap-2" onClick={() => navigate('/')}>
          <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
        </Button>
      </div>
    </div>
  );
}
