import styled from '@emotion/styled';

export const ToolTipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const ToolTilpContent = styled.div`
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

export const IconWrapper = styled.div`
  display: flex;
  margin-left: 1.4375rem;
`;
