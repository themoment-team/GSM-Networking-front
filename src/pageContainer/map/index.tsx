'use client';

import { useState, useEffect } from 'react';

import * as S from './style';

import {
  Header,
  MapComponent,
  SubFunctionHeader,
  SearchBar,
} from '@/components';
import { MapMentorCard, SearchNotFound } from '@/components';
import { HeaderPosition } from '@/types';
import type { WorkerType } from '@/types';

interface Props {
  initMentorList: WorkerType[];
}
const isIncludesKeyword = (worker: WorkerType, keyword: string) => {
  const lowerCaseKeyword = keyword.toLowerCase();

  return (
    worker.name.toLowerCase().includes(lowerCaseKeyword) ||
    worker.company.name.toLowerCase().includes(lowerCaseKeyword) ||
    worker.position.toLowerCase().includes(lowerCaseKeyword)
  );
};

const Map: React.FC<Props> = ({ initMentorList }) => {
  const [workerList, setWorkerList] = useState<WorkerType[]>(initMentorList);
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    setWorkerList(
      initMentorList.filter((worker) => isIncludesKeyword(worker, keyword))
    );
  }, [keyword, initMentorList]);

  const PREV_PATH = '/' as const;

  return (
    <>
      <Header position={HeaderPosition.STICKY} />
      <SubFunctionHeader prevPath={PREV_PATH} title='지도' />
      <MapComponent />
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        placeholder='찾고 싶은 사람, 전공, 회사명 등을 검색해보세요.'
      />
      {workerList.length ? (
        <S.MentorListWrapper>
          {workerList.map((worker) => (
            <MapMentorCard key={worker.id} worker={worker} />
          ))}
        </S.MentorListWrapper>
      ) : (
        <S.NotFoundContainer>
          <SearchNotFound
            textArr={[
              '해당 정보를 가진 졸업생을 찾을 수 없어요.',
              '오타, 띄어쓰기 등을 확인 해주세요.',
            ]}
          />
        </S.NotFoundContainer>
      )}
    </>
  );
};

export default Map;
