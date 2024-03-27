'use client';

import { useRef, useState, useEffect } from 'react';

import * as S from './style';

import type { CardInfo } from '@/types';
import NoticeCard from '.';

interface Props {
  initialData: CardInfo[];
}

const NoticeCardList: React.FC<Props> = ({ initialData }) => {
  const [cardList, setCardList] = useState<CardInfo[]>(initialData);

  return (
    <>
      {cardList.length ? (
        <S.NoticeCardList>
          {cardList.map((card) => (
            <NoticeCard initialData={cardList} />
          ))}
        </S.NoticeCardList>
      ) : (
        <></>
      )}
    </>
  );
};

export default NoticeCardList;
