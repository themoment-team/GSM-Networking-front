import styled from '@emotion/styled';

export const Button = styled.button`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.white};
  width: 4.5625rem;
  height: 2.0625rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.skyBlue[400]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
