import styled from '@emotion/styled';

export const DateText = styled.span`
  ${({ theme }) => theme.typo.caption};
  color: ${({ theme }) => theme.color.grey[500]};
`;
