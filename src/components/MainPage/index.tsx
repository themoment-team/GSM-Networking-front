'use client';
import { useState } from 'react';

import { Header, WorkerList } from '..';

import { Container } from './style';

import type { WorkerType, GenerationType, PositionType } from '@/types';

interface Props {
  initWorkerList: WorkerType[];
}

const MainPage: React.FC<Props> = ({ initWorkerList }) => {
  const [selectedGeneration, setSelectedGeneration] =
    useState<GenerationType>(null);
  const [selectedPosition, setSelectedPosition] = useState<PositionType | null>(
    null
  );
  const [keyword, setKeyword] = useState<string>('');

  const clearList = () => {
    setSelectedGeneration(null);
    setKeyword('');
    setSelectedPosition(null);
  };

  return (
    <>
      <Header clearList={clearList} />
      <Container>
        <WorkerList
          initWorkerList={initWorkerList}
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
