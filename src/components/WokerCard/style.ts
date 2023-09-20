import styled from '@emotion/styled';

export const WorkerCardContainer = styled.div`
  max-width: 11.75rem;
  height: 14.0625rem;
`;

export const WorkerInfoHead = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  height: 1.25rem;
  margin: 1.3rem 0 0 0;
`;

export const WorkerBoder = styled.div`
  border-right: 0.0625rem solid #cbccce;
`;

export const WorkerNameBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export const WorkerName = styled.p``;
export const WorkerGeneration = styled.p``;
export const WorkerPosition = styled.p``;

export const WorkerInfoBody = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1.75rem;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  color: #a5a6a9;
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
`;

export const CompanyLink = styled.a<{ isCompanyURLExist: boolean }>`
  width: 11rem;
  overflow: hidden;
  white-space: nowrap;

  cursor: ${({ isCompanyURLExist }) =>
    isCompanyURLExist ? 'pointer' : 'default'};
`;

export const WorkerImgBox = styled.div`
  background-color: #f5f6f8;
  border-radius: 10px;
  display: flex;
  padding: 1.6875rem 2.5rem 0rem 2.6875rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
