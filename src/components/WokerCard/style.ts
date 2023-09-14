import styled from 'styled-components';

export const WorkerCardContainer = styled.div`
  max-width: 11.75rem;
  height: 14.0625rem;
  background-color: red;
`;

export const WorkerImgBox = styled.div``;

export const WorkerInfoBox = styled.div``;

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
