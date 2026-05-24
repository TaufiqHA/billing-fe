import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Card } from '@/src/components/ui/Card';

// Fix typical leafet icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const odpData = [
  { id: 'ODP-A-01', lat: -7.982, lng: 112.634, kapasitas: 8, terpakai: 6 },
  { id: 'ODP-A-02', lat: -7.985, lng: 112.631, kapasitas: 16, terpakai: 15 },
  { id: 'ODP-B-01', lat: -7.981, lng: 112.638, kapasitas: 8, terpakai: 2 },
];

export default function FiberMap() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-2 fade-in duration-200 h-[calc(100vh-6rem)] flex flex-col">
      <div>
        <h1 className="text-2xl font-bold font-heading">Fiber Map (ODP/ODC)</h1>
        <p className="text-text-secondary text-sm">Peta persebaran titik ODP dan kapasitas jaringan.</p>
      </div>

      <Card className="flex-1 overflow-hidden relative z-0">
        <MapContainer center={[-7.982, 112.634]} zoom={15} className="w-full h-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          {odpData.map((odp, idx) => {
            const isFull = odp.terpakai >= odp.kapasitas;
            const isWarning = odp.terpakai >= odp.kapasitas - 2;
            const color = isFull ? '#EF4444' : isWarning ? '#F59E0B' : '#10B981';
            
            return (
              <React.Fragment key={idx}>
                <Circle 
                  center={[odp.lat, odp.lng]} 
                  pathOptions={{ fillColor: color, color: color, fillOpacity: 0.4 }} 
                  radius={40} 
                />
                <Marker position={[odp.lat, odp.lng]}>
                  <Popup>
                    <div className="font-sans">
                      <div className="font-bold text-sm mb-1">{odp.id}</div>
                      <div className="text-xs text-text-secondary">Terpakai: {odp.terpakai} / {odp.kapasitas} Port</div>
                    </div>
                  </Popup>
                </Marker>
              </React.Fragment>
            );
          })}
        </MapContainer>
        
        {/* Legend */}
        <div className="absolute bottom-6 left-6 z-[1000] bg-surface p-3 rounded-lg border border-border-default shadow-md text-xs space-y-2">
          <div className="font-semibold mb-1">Status ODP</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-success"></div> <span className="text-text-primary">Tersedia (&gt;2 Port)</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-warning"></div> <span className="text-text-primary">Hampir Penuh</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-danger"></div> <span className="text-text-primary">Penuh</span></div>
        </div>
      </Card>
    </div>
  );
}
