'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';

import { toast } from 'react-toastify';

import { RandomMentorImg } from '..';

import * as S from './style';

import * as I from '@/assets';
import type { WorkerType, MarkerType } from '@/types';

interface Props {
  worker: WorkerType;
  onMarkerClick: (marker: MarkerType | null) => void;
  onWorkerClick: (workerId: string) => void;
  isSelected: boolean;
}

const MapMentorCard: React.FC<Props> = ({
  worker,
  onMarkerClick,
  onWorkerClick,
  isSelected,
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const isEmailExist = !!worker.email;
  const isSNSExist = !!worker.SNS;
  const isCompanyURLExist = !!worker.company.URL;

  const handleSNSClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!worker.SNS.includes('http')) {
      e.preventDefault();
      navigator.clipboard.writeText(worker.SNS);
      return toast.success('연락망이 클립보드에 복사되었습니다.');
    }
  };

  useEffect(() => {
    setIsClicked(isSelected);
  }, [isSelected]);

  const handleMarkerClick = () => {
    if (!isClicked) {
      onMarkerClick({
        id: parseInt(worker.id),
        name: worker.name,
        generation: worker.generation as number,
        company: {
          name: worker.company.name,
          position: worker.position,
          lat: worker.company.lat!,
          lon: worker.company.lon!,
        },
      });
    } else {
      onMarkerClick(null);
    }
    onWorkerClick(worker.id);
  };

  return (
    <S.MapMentorCard>
      <S.MentorHead>
        <S.WorkerImgBox>
          {worker.profileUrl ? (
            <Image
              src={worker.profileUrl}
              alt={worker.name}
              fill
              sizes='60px'
            />
          ) : (
            <RandomMentorImg defaultImgNumber={worker.defaultImgNumber} />
          )}
        </S.WorkerImgBox>
        <S.Worker>
          <S.WorkerInfoHead>
            <S.WorkerNameBox>
              <S.WorkerGeneration>{worker.generation}기</S.WorkerGeneration>
              <S.WorkerName>{worker.name}</S.WorkerName>
            </S.WorkerNameBox>
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
              {worker.company.name}
            </S.CompanyLink>
            <S.WorkerPosition>{worker.position}</S.WorkerPosition>
          </S.WorkerInfoBody>
        </S.Worker>
      </S.MentorHead>
      <S.Marker onClick={handleMarkerClick}>
        <I.MarkerIcon isClicked={isClicked} />
      </S.Marker>
    </S.MapMentorCard>
  );
};

export default MapMentorCard;
