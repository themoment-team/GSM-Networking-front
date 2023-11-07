import styled from '@emotion/styled';

export const ToolTilWrapper = styled.div`
  display: inline-flex;
  padding: 0.375rem 0.5rem;
  flex-direction: column;
  gap: 0.125rem;
  border-radius: 0.3125rem;
  background-color: ${({ theme }) => theme.color.skyBlue[400]};
`;

export const ToolTipText = styled.p`
  ${({ theme }) => theme.typo.overline}
  color: ${({ theme }) => theme.color.white};
  font-weight: 500;
`;
