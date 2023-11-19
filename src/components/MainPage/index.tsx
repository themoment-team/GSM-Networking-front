'use client';
import { useState } from 'react';

import { Container } from './style';

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

  useGetMyInfo({
    initialData: defaultMyInfo,
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
    </>
  );
};

export default MainPage;
