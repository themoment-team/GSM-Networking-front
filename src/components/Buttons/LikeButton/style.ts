import styled from '@emotion/styled';

export const Button = styled.button<{ isActive: boolean }>`
  ${({ theme }) => theme.typo.body1}
  border: 0.0625rem solid ${({ theme, isActive }) =>
    isActive ? theme.color.skyBlue[400] : theme.color.grey[150]};
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.skyBlue[400] : theme.color.grey[150]};
  border-radius: 0.3125rem;
  display: flex;
  padding: 0.25rem 0.75rem;
  align-items: flex-start;
  gap: 0.25rem;

  span {
    position: relative;
    top: 0.0625rem;
  }
`;
