'use client';


import * as S from './style';

import { CloseIcon } from '@/assets';
import type {  ReverseCategoryType } from '@/types';

const CATEGORYLIST = ['전체','선생님','공지','QnA', '잡담', '자료공유', '스터디','숙박','모임','스포츠'] as const;

interface Props {
  filteredWorkerLength: number;
  keyword: string;
  selectedPosition: ReverseCategoryType | null;
  setSelectedPosition: React.Dispatch<
    React.SetStateAction<ReverseCategoryType | null>
  >;
  setIsShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
}


const FilterModal: React.FC<Props> = ({
  setIsShowFilterModal,
}) => {

  const closeModal = () => {
    setIsShowFilterModal(false);
  };

  return (
    <S.Modal>
      <S.Top>
        <S.Title>카테고리</S.Title>
        <S.CloseButton type='button' onClick={closeModal}>
          <CloseIcon />
        </S.CloseButton>
      </S.Top>
      <S.SectionWrapper>
        <S.SectionTitle>구분</S.SectionTitle>
        <S.GenerationWrapper>
          {CATEGORYLIST.map((category) => (
            <S.GenerationButton
              key={category}
            >
              {category}
            </S.GenerationButton>
          ))}
        </S.GenerationWrapper>
      </S.SectionWrapper>

    </S.Modal>
  );
};

export default FilterModal;
