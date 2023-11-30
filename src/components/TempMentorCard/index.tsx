'use client';

import React from 'react';

import * as S from './style';

import type { WorkerType } from '@/types/worker';

interface Props {
  worker: WorkerType;
  selectMentorId: string | null;
  setSelectMentorId: React.Dispatch<React.SetStateAction<string | null>>;
}

const TempMentorCard: React.FC<Props> = ({
  worker,
  selectMentorId,
  setSelectMentorId,
}) => (
  <S.WorkerListItem>
    <S.Generation>{worker.generation}기</S.Generation>
    <S.Name>{worker.name}</S.Name>
    <S.Position>🧰️ {worker.position}</S.Position>
    <S.Company>🏢 {worker.company.name}</S.Company>
    <S.SelectButton
      onClick={() => setSelectMentorId(worker.id)}
      isSelect={selectMentorId === worker.id}
    >
      선택
    </S.SelectButton>
  </S.WorkerListItem>
);
export default TempMentorCard;
