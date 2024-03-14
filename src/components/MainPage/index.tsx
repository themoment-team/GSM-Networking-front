'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import * as S from './style';

import { ChatListShiftIcon } from '@/assets';
import { Header, MentorList } from '@/components';
import { useGetMyInfo } from '@/hooks';
import type {
  WorkerType,
  GenerationType,
  PositionType,
  MentorInfoType,
} from '@/types';

interface Props {
  initMentorList: WorkerType[];
  defaultMyInfo?: MentorInfoType | null;
}

const MainPage: React.FC<Props> = ({ initMentorList, defaultMyInfo }) => {
  const [selectedGeneration, setSelectedGeneration] =
    useState<GenerationType>(null);
  const [selectedPosition, setSelectedPosition] = useState<PositionType | null>(
    null
  );
  const [keyword, setKeyword] = useState<string>('');
  const { push } = useRouter();

  useGetMyInfo({
    initialData: defaultMyInfo,
  });

  const clearList = () => {
    setSelectedGeneration(null);
    setKeyword('');
    setSelectedPosition(null);
  };

  const handleBtnClick = () => push('/chat/list');

  return (
    <>
      <Header clearList={clearList} />
      <S.Container>
        <MentorList
          initWorkerList={initMentorList}
          keyword={keyword}
          selectedGeneration={selectedGeneration}
          selectedPosition={selectedPosition}
          setKeyword={setKeyword}
          setSelectedGeneration={setSelectedGeneration}
          setSelectedPosition={setSelectedPosition}
        />
        <S.ChatListShiftButton onClick={handleBtnClick}>
          <ChatListShiftIcon />
        </S.ChatListShiftButton>
      </S.Container>
    </>
  );
};

export default MainPage;
