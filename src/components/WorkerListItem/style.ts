import Link from 'next/link';
import styled from 'styled-components';

export const WorkerListItem = styled.div`
  ${({ theme }) => theme.typo.body1};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.625rem;
`;

export const Generation = styled.p`
  font-feature-settings: 'tnum';
`;

export const Name = styled.p`
  width: 3.5rem;
`;

export const Position = styled.p`
  width: 9rem;
  overflow: hidden;
  white-space: nowrap;
`;

export const CompanyLink = styled(Link)`
  width: 10rem;
  overflow: hidden;
  white-space: nowrap;
`;

export const MailTo = styled.a`
  & > svg {
    display: block;
  }

  &:hover {
    .first {
      fill: ${({ theme }) => theme.color.skyBlue[100]};
    }
    .second {
      fill: ${({ theme }) => theme.color.skyBlue[200]};
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
      fill: ${({ theme }) => theme.color.skyBlue[200]};
    }
  }
`;
