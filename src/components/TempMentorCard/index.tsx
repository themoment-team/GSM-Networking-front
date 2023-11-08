'use client';

import React from 'react';

import * as S from './style';

import type { WorkerType } from '@/types/worker';

interface Props {
  worker: WorkerType;
  selectUser: string | null;
  setSelectUser: React.Dispatch<React.SetStateAction<string | null>>;
}

const TempMentorCard: React.FC<Props> = ({
  worker,
  selectUser,
  setSelectUser,
}) => (
  <S.WorkerListItem>
    <S.Generation>{worker.generation}기</S.Generation>
    <S.Name>{worker.name}</S.Name>
    <S.Position>🧰️ {worker.position}</S.Position>
    <S.Company>🏢 {worker.company.name}</S.Company>
    <S.SelectButton
      onClick={() => setSelectUser(worker.id)}
      isSelect={selectUser === worker.id}
    >
      선택
    </S.SelectButton>
  </S.WorkerListItem>
);
export default TempMentorCard;
