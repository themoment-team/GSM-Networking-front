'use client';

import * as S from './style';

import type { CardInfo } from '@/types';
import NoticeCard from '.';

interface Props {
  initialData: CardInfo[];
}

const NoticeCardList: React.FC<Props> = ({ initialData }) => {
  return (
    <S.NoticeCardList>
      {initialData.map((data) => (
        <NoticeCard {...data} />
      ))}
    </S.NoticeCardList>
  );
};

export default NoticeCardList;
