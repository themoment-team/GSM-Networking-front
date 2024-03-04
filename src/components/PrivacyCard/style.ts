import styled from '@emotion/styled';

export const PrivacyCardContainer = styled.div`
  max-width: 18.25rem;
  padding: 1rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[100]};
  border-radius: 0.625rem;
`;

export const PrivacyInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const PrivacyKey = styled.p`
  ${({ theme }) => theme.typo.caption};
  color: ${({ theme }) => theme.color.grey[900]};
`;

export const PrivacyValue = styled.p`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.black};
`;

export const PrivacyPeriod = styled.p<{ isWorking: boolean }>`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme, isWorking }) =>
    isWorking ? theme.color.skyBlue[400] : theme.color.grey[500]};
`;
