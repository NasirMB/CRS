'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { DistrictMarker } from './BalochistanMap';

const districtMarkers: DistrictMarker[] = [
  { id: 411, name: 'Quetta', division: 'Quetta', code: 411, lat: 30.1798, lng: 66.975 },
  { id: 412, name: 'Pishin', division: 'Quetta', code: 412, lat: 30.5833, lng: 67.0 },
  { id: 413, name: 'Killa Abdullah', division: 'Quetta', code: 413, lat: 30.7281, lng: 66.7178 },
  { id: 421, name: 'Loralai', division: 'Zhob', code: 421, lat: 30.37, lng: 68.5972 },
  { id: 422, name: 'Barkhan', division: 'Zhob', code: 422, lat: 29.9, lng: 69.5256 },
  { id: 423, name: 'Musakhel', division: 'Zhob', code: 423, lat: 30.86, lng: 69.82 },
  { id: 424, name: 'Killa Saifullah', division: 'Zhob', code: 424, lat: 30.7, lng: 68.35 },
  { id: 425, name: 'Zhob', division: 'Zhob', code: 425, lat: 31.34, lng: 69.45 },
  { id: 426, name: 'Sherani', division: 'Zhob', code: 426, lat: 32.05, lng: 69.65 },
  { id: 427, name: 'Duki', division: 'Zhob', code: 427, lat: 30.15, lng: 68.57 },
  { id: 431, name: 'Sibi', division: 'Sibi', code: 431, lat: 29.5434, lng: 67.8773 },
  { id: 432, name: 'Harnai', division: 'Sibi', code: 432, lat: 30.1, lng: 67.93 },
  { id: 433, name: 'Ziarat', division: 'Sibi', code: 433, lat: 30.3824, lng: 67.7256 },
  { id: 434, name: 'Kohlu', division: 'Sibi', code: 434, lat: 29.8976, lng: 69.2537 },
  { id: 435, name: 'Dera Bugti', division: 'Sibi', code: 435, lat: 29.0372, lng: 69.1508 },
  { id: 441, name: 'Kachhi / Bolan', division: 'Nasirabad', code: 441, lat: 29.0878, lng: 67.8442 },
  { id: 442, name: 'Jaffarabad', division: 'Nasirabad', code: 442, lat: 28.281, lng: 68.4375 },
  { id: 443, name: 'Nasirabad', division: 'Nasirabad', code: 443, lat: 28.5, lng: 68.4 },
  { id: 444, name: 'Jhal Magsi', division: 'Nasirabad', code: 444, lat: 28.45, lng: 67.82 },
  { id: 445, name: 'Sohbatpur', division: 'Nasirabad', code: 445, lat: 28.52, lng: 68.54 },
  { id: 451, name: 'Kalat', division: 'Kalat', code: 451, lat: 29.0272, lng: 66.5936 },
  { id: 452, name: 'Mastung', division: 'Kalat', code: 452, lat: 29.8, lng: 66.85 },
  { id: 453, name: 'Khuzdar', division: 'Kalat', code: 453, lat: 27.8123, lng: 66.6103 },
  { id: 454, name: 'Awaran', division: 'Kalat', code: 454, lat: 26.4556, lng: 65.2311 },
  { id: 455, name: 'Lasbela', division: 'Kalat', code: 455, lat: 25.8289, lng: 66.2647 },
  { id: 456, name: 'Shaheed Sikandar Abad', division: 'Kalat', code: 456, lat: 28.05, lng: 66.85 },
  { id: 461, name: 'Kech / Turbat', division: 'Mekran', code: 461, lat: 26.0011, lng: 63.0485 },
  { id: 462, name: 'Gwadar', division: 'Mekran', code: 462, lat: 25.1264, lng: 62.3225 },
  { id: 463, name: 'Panjgur', division: 'Mekran', code: 463, lat: 26.9683, lng: 64.0941 },
  { id: 471, name: 'Chagai', division: 'Rakhshan', code: 471, lat: 28.9876, lng: 63.5955 },
  { id: 472, name: 'Kharan', division: 'Rakhshan', code: 472, lat: 28.58, lng: 65.42 },
  { id: 473, name: 'Nushki', division: 'Rakhshan', code: 473, lat: 29.5562, lng: 66.0215 },
  { id: 474, name: 'Washuk', division: 'Rakhshan', code: 474, lat: 27.7, lng: 65.15 },
];

const normalIcon = L.divIcon({
  className: 'leaflet-custom-marker-wrap',
  html: '<span class="leaflet-custom-marker"></span>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

function MapResizeHandler() {
  const map = useMap();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let timeoutId: number | null = null;

    const triggerResize = () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        map.invalidateSize();
      }, 120);
    };

    triggerResize();
    window.addEventListener('resize', triggerResize);
    window.addEventListener('orientationchange', triggerResize);

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      window.removeEventListener('resize', triggerResize);
      window.removeEventListener('orientationchange', triggerResize);
    };
  }, [map]);

  return null;
}

export default function BalochistanMapLeaflet({
  onMarkerClick,
}: {
  onMarkerClick?: (marker: DistrictMarker) => void;
}) {
  if (typeof window === 'undefined') {
    return <div className="bg-white rounded-lg overflow-hidden h-[320px] sm:h-[380px] md:h-[460px] min-h-[320px] relative border-2 border-gray-200" />;
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden h-[320px] sm:h-[380px] md:h-[460px] min-h-[320px] relative border-2 border-gray-200">
      <MapContainer
        center={[28.2, 66.7]}
        zoom={6}
        minZoom={5}
        className="h-full w-full"
        scrollWheelZoom
      >
        <MapResizeHandler />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {districtMarkers.map((marker) => (
          <Marker
            key={marker.id}
            position={[marker.lat, marker.lng]}
            icon={normalIcon}
            eventHandlers={{
              click: () => onMarkerClick?.(marker),
            }}
          >
            <Popup>
              <div style={{ minWidth: 170 }}>
                <div style={{ fontWeight: 700, color: '#0B2E1A', marginBottom: 4 }}>{marker.name}</div>
                <div style={{ fontSize: 12, color: '#4b5563', marginBottom: 6 }}>{marker.division} Division</div>
                <div style={{ fontSize: 12, color: '#374151', marginBottom: 6 }}>Code: {marker.code}</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
