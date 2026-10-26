'use client';

import dynamic from 'next/dynamic';

export interface DistrictMarker {
  id: number;
  name: string;
  division: string;
  code: number;
  lat: number;
  lng: number;
}

const BalochistanMapLeaflet = dynamic(() => import('./BalochistanMapLeaflet'), {
  ssr: false,
});

export default function BalochistanMap({
  onMarkerClick,
}: {
  onMarkerClick?: (marker: DistrictMarker) => void;
}) {
  return <BalochistanMapLeaflet onMarkerClick={onMarkerClick} />;
}
