import styled from 'styled-components';

export const WorkerCardContainer = styled.div`
  max-width: 11.75rem;
  height: 14.0625rem;
  background-color: red;
`;

export const WorkerImgBox = styled.div``;

export const WorkerInfoBox = styled.div``;

export const WorkerInfoHead = styled.div``;

export const WorkerGeneration = styled.p``;

export const WorkerName = styled.p``;

export const WorkerInfoBody = styled.div``;

export const WorkerCompany = styled.p``;

export const WorkerJob = styled.p``;

export const MailTo = styled.a`
  & > svg {
    display: block;
  }

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
  & > svg {
    display: block;
  }

  &:hover {
    .first {
      fill: ${({ theme }) => theme.color.skyBlue[100]};
    }
    .second {
      fill: ${({ theme }) => theme.color.skyBlue[400]};
    }
  }
`;
