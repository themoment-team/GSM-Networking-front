import styled from '@emotion/styled';

export const WorkerCardContainer = styled.div`
  max-width: 11.75rem;
  height: 14.0625rem;
`;

export const WorkerImgBox = styled.div`
  background-color: #f5f6f8;
  border-radius: 10px;
  padding: 1.5625rem 2.5rem 0 2.6875rem;
  width: 100%;
`;

export const WorkerInfoBox = styled.div``;

export const WorkerInfoHead = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  height: 1.25rem;
  margin: 1rem 0 0.5rem 0;
`;

export const WorkerGeneration = styled.span`
  border-right: 0.0625rem solid #cbccce;
  padding-right: 0.6rem;
`;

export const WorkerName = styled.span`
  text-align: left;
  padding-left: 0.5rem;
  width: 4rem;
`;

export const WorkerInfoBody = styled.div`
  display: flex;
  width: 100%;
  height: 3.8rem;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  color: #a5a6a9;
`;

export const WorkerCompany = styled.p``;

export const WorkerJob = styled.p``;

export const ButtonBox = styled.div`
  width: 5rem;
  height: 1.25rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MailTo = styled.a`
  margin-right: 0.75rem;

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
