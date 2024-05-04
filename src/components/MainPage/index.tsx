'use client';
import { useState } from 'react';

import { Container } from './style';

import { PopupList } from '@/components';
import { Header, MentorList } from '@/components';
import { useGetMyInfo, useGetMyMenteeInfo } from '@/hooks';
import type {
  WorkerType,
  GenerationType,
  PositionType,
  MentorInfoType,
  MenteeType,
} from '@/types';

interface Props {
  initMentorList: WorkerType[];
  defaultMyInfo?: MentorInfoType | null;
  defaultMyMenteeInfo?: MenteeType | null;
}

const MainPage: React.FC<Props> = ({
  initMentorList,
  defaultMyInfo,
  defaultMyMenteeInfo,
}) => {
  const [selectedGeneration, setSelectedGeneration] =
    useState<GenerationType>(null);
  const [selectedPosition, setSelectedPosition] = useState<PositionType | null>(
    null
  );
  const [keyword, setKeyword] = useState<string>('');

  useGetMyInfo({
    initialData: defaultMyInfo,
  });

  useGetMyMenteeInfo({
    initialData: defaultMyMenteeInfo,
  });

  const clearList = () => {
    setSelectedGeneration(null);
    setKeyword('');
    setSelectedPosition(null);
  };

  return (
    <>
      <Header clearList={clearList} />
      <Container>
        <MentorList
          initWorkerList={initMentorList}
          keyword={keyword}
          selectedGeneration={selectedGeneration}
          selectedPosition={selectedPosition}
          setKeyword={setKeyword}
          setSelectedGeneration={setSelectedGeneration}
          setSelectedPosition={setSelectedPosition}
        />
      </Container>
      <PopupList />
    </>
  );
};

export default MainPage;
