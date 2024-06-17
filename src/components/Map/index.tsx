'use client';

import { useState } from 'react';

import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';

import CustomOverlay from './CustomOverlay';

interface Props {}

const MapComponent: React.FC<Props> = () => {
  const imageSrc = '/images/GNMarker.png' as const;
  const latitude = 37.56100278 as const;
  const longitude = 126.9996417 as const;
  const [isCustomOverlayVisible, setIsCustomOverlayVisible] =
    useState<boolean>(true);
  const handleOnClick = () => {
    setIsCustomOverlayVisible((prev) => !prev);
  };
  const handleOnClose = () => {
    setIsCustomOverlayVisible((prev) => !prev);
  };

  return (
    <Map
      center={{
        lat: latitude,
        lng: longitude,
      }}
      level={8}
      style={{ width: '600px', height: '400px', borderRadius: '12px' }}
    >
      <MapMarker
        position={{ lat: 37.56100278, lng: 126.9996417 }}
        image={{
          src: imageSrc,
          size: { width: 60, height: 60 },
        }}
      />
      <div onClick={handleOnClick}>djdld</div>
      {isCustomOverlayVisible && (
        <CustomOverlayMap position={{ lat: latitude, lng: longitude }}>
          <CustomOverlay
            onClose={handleOnClose}
            latitude={latitude}
            longitude={longitude}
          />
        </CustomOverlayMap>
      )}
    </Map>
  );
};

export default MapComponent;
