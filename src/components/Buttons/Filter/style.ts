import styled from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => theme.typo.body1}
  padding: 0.375rem 1rem;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  color: ${({ theme }) => theme.color.skyBlue[400]};
  background: ${({ theme }) => theme.color.grey[50]};
  border-radius: 1.25rem;
`;
