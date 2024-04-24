'use client';

import React, { useState } from 'react';

import { toast } from 'react-toastify';

import * as S from './style';

import * as I from '@/assets';
import { usePatchProfileNumber } from '@/hooks';
import type { PatchProfileNumberType } from '@/types';

const options = [
  <I.PersonImg0 key={0} />,
  <I.PersonImg1 key={1} />,
  <I.PersonImg2 key={2} />,
  <I.PersonImg3 key={3} />,
  <I.PersonImg4 key={4} />,
  <I.PersonImg5 key={5} />,
] as const;

interface Props {
  closeModal: () => void;
}

const DefaultProfileSelect = ({ closeModal }: Props) => {
  const [selectedProfile, setSelectedProfile] = useState<number>();
  const { mutate: mutateProfileNumber, isPending } = usePatchProfileNumber();

  const handleButtonClick = () => {
    if (selectedProfile) {
      const data: PatchProfileNumberType = {
        profileNumber: selectedProfile,
      };

      mutateProfileNumber(data, {
        onSuccess: () => {
          toast.success('기본 프로필로 변경되었습니다');
          closeModal();
        },
        onError: () => toast.error('기본 프로필 변경에 실패했습니다.'),
      });
    } else toast.error('기본 프로필을 선택해주세요.');
  };

  return (
    <>
      <S.DescriptionWrapper>
        <S.Description>5mb 이하의 파일</S.Description>
      </S.DescriptionWrapper>
      <S.OptionsContainer>
        {options.map((option, idx) => (
          <S.OptionWrapper
            onClick={() => setSelectedProfile(idx)}
            key={idx}
            isSelected={selectedProfile === idx}
          >
            {option}
          </S.OptionWrapper>
        ))}
      </S.OptionsContainer>
      <S.Button disabled={isPending} onClick={handleButtonClick}>
        확인
      </S.Button>
    </>
  );
};

export default DefaultProfileSelect;
