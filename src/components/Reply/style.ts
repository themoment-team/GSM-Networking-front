import styled from '@emotion/styled';

export const Mention = styled.span`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.skyBlue[400]};
`;
