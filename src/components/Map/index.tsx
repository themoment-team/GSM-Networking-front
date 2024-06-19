'use client';

import { useState } from 'react';

import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';

import CustomOverlay from './CustomOverlay';

import type { MarkerType } from '@/types';

interface Props {
  markerList: MarkerType[];
}

const MapComponent: React.FC<Props> = ({ markerList }) => {
  const imageSrc = '/images/GNMarker.png' as const;
  const latitude = 37.56100278 as const;
  const longitude = 126.9996417 as const;

  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);

  const handleMarkerClick = (marker: MarkerType) => {
    setSelectedMarker(marker);
  };

  const handleOverlayClose = () => {
    setSelectedMarker(null);
  };

  return (
    <Map
      center={{
        lat: latitude,
        lng: longitude,
      }}
      level={7}
      style={{
        width: '600px',
        height: '400px',
        borderRadius: '12px',
        marginBottom: '16px',
      }}
    >
      {markerList.map((marker, index) => (
        <MapMarker
          key={index}
          position={{ lat: marker.company.lat, lng: marker.company.lon }}
          image={{
            src: imageSrc,
            size: { width: 36, height: 36 },
          }}
          title={marker.name}
          onClick={() => handleMarkerClick(marker)}
        />
      ))}
      {selectedMarker && (
        <CustomOverlayMap
          position={{
            lat: selectedMarker.company.lat,
            lng: selectedMarker.company.lon,
          }}
        >
          <CustomOverlay
            onClose={handleOverlayClose}
            latitude={selectedMarker.company.lat}
            longitude={selectedMarker.company.lon}
            name={selectedMarker.name}
            company={selectedMarker.company.name}
            position={selectedMarker.company.position}
          />
        </CustomOverlayMap>
      )}
    </Map>
  );
};

export default MapComponent;
