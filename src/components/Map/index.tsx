'use client';

import { Map } from 'react-kakao-maps-sdk';

interface Props {}

const MapComponent: React.FC<Props> = () => (
  <Map
    center={{
      lat: 36.658563176254795,
      lng: 127.86119616960151,
    }}
    style={{ width: '100%', height: '100%' }}
  />
);

export default MapComponent;
