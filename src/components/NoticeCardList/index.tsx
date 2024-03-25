'use client';

import * as S from './style';

import type { CardInfo } from '@/types';
import NoticeCard from '.';

const NoticeCardList: React.FC<CardInfo> = ({}) => {
  const Dummy: CardInfo[] = [
    {
      name: '김형록',
      date: '2005-02-12T00:00:00.000Z',
      content:
        '커뮤니티는사람들이모여서서로의관심사를공유하고소통하는공간으로, 다양한경험과지식을교환하며서로를돕고',
      tag: '#스터디',
    },
    {
      name: '김형록',
      date: '2005-02-12T00:00:00.000Z',
      content:
        '커뮤니티는사람들이모여서서로의관심사를공유하고소통하는공간으로, 다양한경험과지식을교환하며서로를돕고',
      tag: '#스터디',
    },
    {
      name: '김형록',
      date: '2005-02-12T00:00:00.000Z',
      content:
        '커뮤니티는사람들이모여서서로의관심사를공유하고소통하는공간으로, 다양한경험과지식을교환하며서로를돕고',
      tag: '#스터디',
    },
    {
      name: '김형록',
      date: '2005-02-12T00:00:00.000Z',
      content:
        '커뮤니티는사람들이모여서서로의관심사를공유하고소통하는공간으로, 다양한경험과지식을교환하며서로를돕고',
      tag: '#스터디',
    },
  ];

  return (
    <S.NoticeCardList>
      {Dummy.map((data) => (
        <NoticeCard {...data} />
      ))}
    </S.NoticeCardList>
  );
};

export default NoticeCardList;
