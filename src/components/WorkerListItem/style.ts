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
  width: 8rem;
  overflow: hidden;
  white-space: nowrap;
`;

export const CompanyLink = styled.a<{ isCompanyURLExist: boolean }>`
  width: 11rem;
  overflow: hidden;
  white-space: nowrap;

  cursor: ${({ isCompanyURLExist }) =>
    isCompanyURLExist ? 'pointer' : 'default'};
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
