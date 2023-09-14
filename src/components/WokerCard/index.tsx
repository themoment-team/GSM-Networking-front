'use client';

import React from 'react';

import { toast } from 'react-toastify';

import * as S from './style';

import * as I from '@/assets';
import { PersonImg_0 } from '@/assets';
import type { WorkerType } from '@/types/worker';

interface Props {
  worker: WorkerType;
}

const WorkerCard: React.FC<Props> = ({ worker }) => {
  const isCompanyURLExist = !!worker.company.URL;
  const isEmailExist = !!worker.email;
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
    <S.WorkerCardContainer>
      <S.WorkerImgBox>
        <PersonImg_0 />
      </S.WorkerImgBox>
      <S.WorkerInfoBox>
        <S.WorkerInfoHead>
          <S.WorkerGeneration>{worker.generation}기</S.WorkerGeneration>
          <S.WorkerName>{worker.name}</S.WorkerName>
          <S.ButtonBox>
            {isEmailExist ? (
              <S.MailTo href={`mailto:${worker.email}`}>
                <I.EmailIcon />
              </S.MailTo>
            ) : (
              <I.NotExistEmailIcon />
            )}
            {isSNSExist ? (
              <S.SNSLink
                href={worker.SNS}
                target='_blank'
                rel='noopener noreferrer'
                onClick={handleSNSClick}
              >
                <I.SNSIcon />
              </S.SNSLink>
            ) : (
              <I.NotExistSNSIcon />
            )}
          </S.ButtonBox>
        </S.WorkerInfoHead>
        <S.WorkerInfoBody>
          <S.CompanyLink
            href={worker.company.URL ?? ''}
            target='_blank'
            rel='noopener noreferrer'
            onClick={(e) => !isCompanyURLExist && e.preventDefault()}
            isCompanyURLExist={isCompanyURLExist}
          >
            <S.WorkerCompany>{worker.company.name} 🏢 </S.WorkerCompany>
          </S.CompanyLink>
          <S.WorkerJob>{worker.position} 💻</S.WorkerJob>
        </S.WorkerInfoBody>
      </S.WorkerInfoBox>
    </S.WorkerCardContainer>
  );
};

export default WorkerCard;
