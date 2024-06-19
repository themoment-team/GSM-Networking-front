import styled from '@emotion/styled';

export const MapMentorCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  width: 35.5rem;
  height: 3.75rem;
`;

export const WorkerImgBox = styled.div`
  background-color: ${({ theme }) => theme.color.grey[50]};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.75rem;
  height: 3.75rem;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.grey[100]};

  & > img {
    object-fit: cover;
  }

  & svg {
    width: 3.4375rem;
    height: 3.375rem;
    position: relative;
    top: 0.625rem;
    left: 0.13rem;
  }
`;

export const WorkerNameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  ${({ theme }) => theme.typo.body1};
`;

export const Worker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Marker = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
export const MentorHead = styled.div`
  display: flex;
  width: 14.875rem;
  height: 3.75rem;
  gap: 1rem;
`;

export const WorkerName = styled.p``;

export const WorkerGeneration = styled.p``;

export const WorkerInfoBody = styled.div`
  ${({ theme }) => theme.typo.body2};
  display: flex;
  width: 100%;
  color: ${({ theme }) => theme.color.grey[400]};
`;
export const CompanyLink = styled.a<{ isCompanyURLExist: boolean }>`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;

  cursor: ${({ isCompanyURLExist }) =>
    isCompanyURLExist ? 'pointer' : 'default'};
`;

export const WorkerPosition = styled.p`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

export const WorkerInfoHead = styled.div`
  ${({ theme }) => theme.typo.subtitle};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 9.125rem;
  height: 1.6875rem;
`;

export const ButtonBox = styled.div`
  height: 1.25rem;
  gap: 0.75rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 3.75rem;
`;

export const MailTo = styled.a`
  &:hover {
    .first {
      fill: ${({ theme }) => theme.color.skyBlue[400]};
    }
    .second {
      fill: ${({ theme }) => theme.color.skyBlue[100]};
    }
  }
  & > svg {
    display: block;
  }
`;

export const SNSLink = styled.a`
  &:hover {
    .first {
      fill: ${({ theme }) => theme.color.skyBlue[400]};
    }
    .second {
      fill: ${({ theme }) => theme.color.skyBlue[100]};
    }
  }

  & > svg {
    display: block;
  }
`;
