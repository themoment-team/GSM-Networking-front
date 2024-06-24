'use client';

import { useState, useEffect } from 'react';

import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';

import CustomOverlay from './CustomOverlay';

import type { MarkerType } from '@/types';

interface Props {
  markerList: MarkerType[];
  selectedMarker: MarkerType | null;
  onMarkerClick: (marker: MarkerType | null) => void;
}

const imageSrc = '/images/GNMarker.png' as const;
const initialLat = 37.56100278 as const;
const initialLng = 126.9996417 as const;
const initialLevel = 7 as const;

const MapComponent: React.FC<Props> = ({
  markerList,
  selectedMarker,
  onMarkerClick,
}) => {
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>({
    lat: initialLat,
    lng: initialLng,
  });
  const [mapLevel, setMapLevel] = useState<number>(initialLevel);

  useEffect(() => {
    if (selectedMarker) {
      setMapCenter({
        lat: selectedMarker.company.lat,
        lng: selectedMarker.company.lon,
      });
      setMapLevel(4);
      return;
    }

    setMapLevel(initialLevel);
  }, [selectedMarker]);

  return (
    <Map
      center={mapCenter}
      level={mapLevel}
      style={{
        width: '37.5rem',
        height: '25rem',
        borderRadius: '0.75rem',
        marginBottom: '1rem',
      }}
      onCenterChanged={(map) =>
        setMapCenter({
          lat: map.getCenter().getLat(),
          lng: map.getCenter().getLng(),
        })
      }
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
          onClick={() => onMarkerClick(marker)}
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
            onClose={() => onMarkerClick(null)}
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
