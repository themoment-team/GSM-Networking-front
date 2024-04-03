'use client';


import * as S from './style';

import { CloseIcon } from '@/assets';

const CATEGORYLIST = ['전체','선생님','공지','QnA', '잡담', '자료공유', '스터디','숙박','모임','스포츠'] as const;

interface Props {
  setIsShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;

}


const BoardFilterModal: React.FC<Props> = ({
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
        <S.CategoryWrapper>
          {CATEGORYLIST.map((category) => (
            <S.CategoryButton
              key={category}
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
