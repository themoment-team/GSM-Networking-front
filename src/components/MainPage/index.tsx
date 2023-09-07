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

  const clearSeleted = () => setSelectedGeneration(null);

  return (
    <>
      <Header clearSeleted={clearSeleted} />
      <Container>
        <WorkerList
          initWorkerList={initWorkerList}
          selectedGeneration={selectedGeneration}
          setSelectedGeneration={setSelectedGeneration}
        />
      </Container>
    </>
  );
};

export default MainPage;
