import styled from '@emotion/styled';

export const WorkerCardContainer = styled.div`
  max-width: 11.75rem;
`;

export const WorkerInfoHead = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  margin-top: 1.3rem;
`;

export const WorkerNameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const WorkerName = styled.p``;
export const WorkerGeneration = styled.p``;

export const WorkerPosition = styled.p`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

export const WorkerInfoBody = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1.75rem;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  color: #a5a6a9;
  overflow: hidden;
`;

export const ButtonBox = styled.div`
  height: 1.25rem;
  gap: 0.75rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MailTo = styled.a`
  &:hover {
    .first {
      fill: ${({ theme }) => theme.color.skyBlue[100]};
    }
    .second {
      fill: ${({ theme }) => theme.color.skyBlue[400]};
    }
  }

  & > svg {
    display: block;
  }
`;

export const SNSLink = styled.a`
  &:hover {
    .first {
      fill: ${({ theme }) => theme.color.skyBlue[100]};
    }
    .second {
      fill: ${({ theme }) => theme.color.skyBlue[400]};
    }
  }

  & > svg {
    display: block;
  }
`;

export const CompanyLink = styled.a<{ isCompanyURLExist: boolean }>`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;

  cursor: ${({ isCompanyURLExist }) =>
    isCompanyURLExist ? 'pointer' : 'default'};
`;

export const WorkerImgBox = styled.div`
  background-color: #f5f6f8;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  height: 6.8125rem;
`;
