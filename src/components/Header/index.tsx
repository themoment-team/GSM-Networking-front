'use client';

import React from 'react';

import { toast } from 'react-toastify';

import * as S from './style';

import * as I from '@/assets';
import { useDeleteMyMentorData } from '@/hooks';

interface Props {
  clearList?: () => void;
}

const Header: React.FC<Props> = ({ clearList }) => {
  const { mutate } = useDeleteMyMentorData({
    onSuccess: () => toast.success('멘토 데이터 삭제 완료'),
    onError: () => toast.error('멘토 데이터 삭제 실패'),
  });

  const handleDeleteButtonClick = () => mutate();

  return (
    <S.Header>
      <S.Inner>
        <S.LogoLink href='/' onClick={clearList}>
          <I.GsmNetworkingIcon />
          GSM Networking
        </S.LogoLink>
        <S.GapBox />
        <S.RedirectBox>
          {/* for test */}
          <S.DeleteButton onClick={handleDeleteButtonClick}>
            멘토 데이터 삭제
          </S.DeleteButton>
          <S.RedirectLink href='/'>멘토 컨택</S.RedirectLink>
          <S.RedirectLink href='/register/mentor'>멘토 등록</S.RedirectLink>
        </S.RedirectBox>
        <S.ProfileBox>
          <I.PersonImg4 />
        </S.ProfileBox>
      </S.Inner>
    </S.Header>
  );
};

export default Header;
