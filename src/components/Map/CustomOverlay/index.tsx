import React from 'react';

import * as S from './style';

import * as I from '@/assets';

interface CustomOverlayProps {
  onClose: () => void;
  latitude: number;
  longitude: number;
  name: string;
  company: string;
  position: string;
}

const CustomOverlay: React.FC<CustomOverlayProps> = ({
  onClose,
  latitude,
  longitude,
  name,
  company,
  position,
}) => (
  <S.CustomOverlay>
    <S.Topbox>
      <S.Name>{name}</S.Name>
      <div onClick={() => onClose()}>
        <I.SmallXIcon />
      </div>
    </S.Topbox>
    <S.Middlebox>
      <S.Positon>{position}</S.Positon>
      <S.Company>{company}</S.Company>
    </S.Middlebox>
    <S.Bottombox>
      <a
        href={`https://map.kakao.com/link/to/${company},${latitude},${longitude}`}
        target='_blank'
      >
        <S.LocationBtn>길 찾기</S.LocationBtn>
      </a>
    </S.Bottombox>
    <S.Triangle />
  </S.CustomOverlay>
);

export default CustomOverlay;
