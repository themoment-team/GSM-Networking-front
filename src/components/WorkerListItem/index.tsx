'use client';

import React from 'react';

import { toast } from 'react-toastify';

import * as S from './style';

import { EmailIcon, NotExistSNSIcon, SNSIcon } from '@/assets';
import type { WorkerType } from '@/types/worker';

interface Props {
  worker: WorkerType;
}

const WorkerListItem: React.FC<Props> = ({ worker }) => {
  const isCompanyURLExist = !!worker.company.URL;
  const isSNSExist = !!worker.SNS;

  const handleSNSClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!worker.SNS.includes('http')) {
      e.preventDefault();
      navigator.clipboard.writeText(worker.SNS);
      return toast.success('연락망이 클립보드에 복사되었습니다.');
    }
  };

  return (
    <S.WorkerListItem>
      <S.Generation>{worker.generation}기</S.Generation>
      <S.Name>{worker.name}</S.Name>
      <S.Position>{worker.position}</S.Position>
      <S.CompanyLink
        href={worker.company.URL ?? ''}
        target='_blank'
        rel='noopener noreferrer'
        onClick={(e) => !isCompanyURLExist && e.preventDefault()}
        isCompanyURLExist={isCompanyURLExist}
      >
        🏢 {worker.company.name}
      </S.CompanyLink>
      <S.MailTo
        href={`mailto:${worker.email}`}
        onClick={(e) => worker.email || e.preventDefault()}
      >
        <EmailIcon />
      </S.MailTo>
      {isSNSExist ? (
        <S.SNSLink
          href={worker.SNS ?? ''}
          target='_blank'
          rel='noopener noreferrer'
          onClick={handleSNSClick}
        >
          <SNSIcon />
        </S.SNSLink>
      ) : (
        <NotExistSNSIcon />
      )}
    </S.WorkerListItem>
  );
};

export default WorkerListItem;
