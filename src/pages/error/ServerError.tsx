import React from 'react';
import { ServerCrash, RefreshCw } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

export default function ServerError() {
  return (
    <div className="min-h-screen bg-base flex flex-col items-center justify-center p-6 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-surface via-base to-base">
      <div className="text-center max-w-sm">
        <div className="w-20 h-20 bg-danger-dim rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-base shadow-glow">
           <ServerCrash className="w-10 h-10 text-danger" />
        </div>
        <h1 className="text-6xl font-bold font-mono text-text-primary mb-2">500</h1>
        <h2 className="text-xl font-semibold mb-4">Server Error</h2>
        <p className="text-sm text-text-secondary mb-8">Terjadi kesalahan pada server kami. Teknisi sedang berusaha memperbaiki kendala ini.</p>
        
        <Button size="lg" className="w-full gap-2 text-danger hover:text-danger hover:bg-danger-dim border-danger/20" variant="secondary" onClick={() => window.location.reload()}>
          <RefreshCw className="w-4 h-4" /> Segarkan Halaman
        </Button>
      </div>
    </div>
  );
}
