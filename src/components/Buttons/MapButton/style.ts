import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  width: 18.75rem;
  height: 2.75rem;
  padding: 1.5rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.skyBlue[400]};

  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.button}
`;
