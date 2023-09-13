'use client';
import { useState } from 'react';

import { Header, WorkerList } from '..';

import { Container } from './style';

import type { POSITION_ARRAY } from '@/constants';
import type { WorkerType, GenerationType } from '@/types';

interface Props {
  initWorkerList: WorkerType[];
}

const MainPage: React.FC<Props> = ({ initWorkerList }) => {
  const [selectedGeneration, setSelectedGeneration] =
    useState<GenerationType>(null);
  const [selectedPosition, setSelectedPosition] =
    useState<(typeof POSITION_ARRAY)[number]>('프론트엔드');
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
