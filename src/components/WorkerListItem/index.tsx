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
    <S.CompanyLink
      href={worker.company.URL ?? ''}
      target='_blank'
      rel='noopener noreferrer'
      onClick={(e) => worker.company.URL ?? e.preventDefault()}
    >
      🏢 {worker.company.name}
    </S.CompanyLink>
    <S.MailTo
      href={`mailto:${worker.email}`}
      onClick={(e) => worker.email ?? e.preventDefault()}
    >
      <EmailIcon />
    </S.MailTo>
    <S.SNSLink
      href={worker.SNS ?? ''}
      target='_blank'
      rel='noopener noreferrer'
      onClick={(e) => worker.SNS ?? e.preventDefault()}
    >
      <SNSIcon />
    </S.SNSLink>
  </S.WorkerListItem>
);

export default WorkerListItem;
