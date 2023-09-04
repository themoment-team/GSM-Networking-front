'use client';

import React from 'react';

import * as S from './style';

import { EmailIcon, SNSIcon } from '@/assets';
import type { WorkerType } from '@/types/worker';

interface Props {
  worker: WorkerType;
}

const WorkerListItem: React.FC<Props> = ({ worker }) => (
  <S.WorkerListItem>
    <S.Generation>{worker.generation}기</S.Generation>
    <S.Name>{worker.name}</S.Name>
    <S.Position>{worker.position}</S.Position>
    <S.CompanyLink href={worker.company.URL ?? ''}>
      🏢 {worker.company.name}
    </S.CompanyLink>
    <S.MailTo href={`mailto:${worker.email}`}>
      <EmailIcon />
    </S.MailTo>
    <S.SNSLink>
      <SNSIcon />
    </S.SNSLink>
  </S.WorkerListItem>
);

export default WorkerListItem;
