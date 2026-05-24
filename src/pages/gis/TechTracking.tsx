import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';

// Fix typical leafet icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const techs = [
  { name: 'Andi Pratama', lat: -7.980, lng: 112.635, status: 'On-site', ticket: '#1042' },
  { name: 'Riko Setiawan', lat: -7.986, lng: 112.630, status: 'Menuju Lokasi', ticket: '#1041' },
];

export default function TechTracking() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200 h-[calc(100vh-6rem)] flex flex-col">
      <div className="flex justify-between items-center shrink-0">
        <div>
          <h1 className="text-2xl font-bold font-heading">Pelacakan Teknisi</h1>
          <p className="text-text-secondary text-sm">Monitor posisi real-time teknisi di lapangan.</p>
        </div>
        <Button variant="secondary" size="md">Segarkan</Button>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-4 overflow-hidden">
        <Card className="lg:col-span-1 p-4 overflow-y-auto space-y-3">
           <h3 className="font-semibold text-sm border-b border-border-default pb-2">Daftar Teknisi</h3>
           {techs.map((t, idx) => (
             <div key={idx} className="bg-surface border border-border-default p-3 rounded-lg hover:border-border-active cursor-pointer">
               <div className="font-medium text-sm mb-1">{t.name}</div>
               <div className="flex justify-between items-center text-xs">
                 <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${t.status === 'On-site' ? 'bg-warning-dim text-warning' : 'bg-info-dim text-info'}`}>{t.status}</span>
                 <span className="text-text-secondary">{t.ticket}</span>
               </div>
             </div>
           ))}
        </Card>

        <Card className="lg:col-span-3 overflow-hidden relative z-0">
          <MapContainer center={[-7.983, 112.632]} zoom={14} className="w-full h-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            {techs.map((t, idx) => (
              <Marker key={idx} position={[t.lat, t.lng]}>
                <Popup>
                  <div className="font-sans">
                    <div className="font-bold text-sm mb-1">{t.name}</div>
                    <div className="text-xs text-text-secondary">Status: {t.status}</div>
                    <div className="text-xs text-text-secondary">Tiket: {t.ticket}</div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </Card>
      </div>
    </div>
  );
}
