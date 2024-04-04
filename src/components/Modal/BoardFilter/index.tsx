'use client';

import * as S from './style';

import { CloseIcon } from '@/assets';
import type { CategoryFilterType } from '@/types';
export const CATEGORYLIST = [
  '전체',
  '선생님',
  '공지',
  'QnA',
  '잡담',
  '자료공유',
  '스터디',
  '숙박',
  '모임',
  '스포츠',
] as const;

interface Props {
  selectedCategory: CategoryFilterType | null;
  setIsShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<CategoryFilterType | null>
  >;
}

const BoardFilterModal: React.FC<Props> = ({
  setIsShowFilterModal,
  selectedCategory,
  setSelectedCategory,
}) => {
  const closeModal = () => {
    setIsShowFilterModal(false);
  };

  const handleCategoryClick = (Category: CategoryFilterType) =>
    setSelectedCategory(() =>
      selectedCategory === Category ? null : Category
    );

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
        <S.CategoryWrapper>
          {CATEGORYLIST.map((category) => (
            <S.CategoryButton
              key={category}
              isSelected={selectedCategory === category}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </S.CategoryButton>
          ))}
        </S.CategoryWrapper>
      </S.SectionWrapper>
    </S.Modal>
  );
};

export default BoardFilterModal;
