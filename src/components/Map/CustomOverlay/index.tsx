import React from 'react';

import * as S from './style';

import * as I from '@/assets';

interface CustomOverlayProps {
  onClose: () => void;
  latitude: number;
  longitude: number;
}

const CustomOverlay: React.FC<CustomOverlayProps> = ({
  onClose,
  latitude,
  longitude,
}) => {
  const CloseButtonClick = () => {
    onClose();
  };

  return (
    <S.CustomOverlay>
      <S.Topbox>
        <S.Name>6기 박준호</S.Name>
        <div onClick={CloseButtonClick}>
          <I.CloseIcon />
        </div>
      </S.Topbox>
      <S.Middlebox>
        <S.Positon>데브옵스</S.Positon>
        <S.Company>삼성전자</S.Company>
      </S.Middlebox>
      <S.Bottombox>
        <a
          href={`https://map.kakao.com/link/to/광주소프트웨어마이스터고등학교,${latitude},${longitude}`}
          target='_blank'
        >
          <S.LocationBtn>길 찾기</S.LocationBtn>
        </a>
      </S.Bottombox>
      <S.Triangle />
    </S.CustomOverlay>
  );
};

export default CustomOverlay;
