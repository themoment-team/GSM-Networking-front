'use client';
import { useState } from 'react';

import { Header, WorkerList } from '..';

import { Container } from './style';

import type { WorkerType, GenerationType } from '@/types';

interface Props {
  initWorkerList: WorkerType[];
}

const MainPage: React.FC<Props> = ({ initWorkerList }) => {
  const [selectedGeneration, setSelectedGeneration] =
    useState<GenerationType>(null);
  const [keyword, setKeyword] = useState<string>('');

  const clearList = () => {
    setSelectedGeneration(null);
    setKeyword('');
  };

  return (
    <>
      <Header clearList={clearList} />
      <Container>
        <WorkerList
          initWorkerList={initWorkerList}
          selectedGeneration={selectedGeneration}
          setSelectedGeneration={setSelectedGeneration}
          keyword={keyword}
          setKeyword={setKeyword}
        />
      </Container>
    </>
  );
};

export default MainPage;
