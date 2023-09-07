'use client';
import { Header, WorkerList } from '..';

import { Container } from './style';

import type { WorkerType } from '@/types';

interface Props {
  initWorkerList: WorkerType[];
}

const MainPage: React.FC<Props> = ({ initWorkerList }) => (
  <>
    <Header />
    <Container>
      <WorkerList initWorkerList={initWorkerList} />
    </Container>
  </>
);

export default MainPage;
