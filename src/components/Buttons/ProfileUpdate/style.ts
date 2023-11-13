import styled from '@emotion/styled';

export const Button = styled.button`
  ${({ theme }) => theme.typo.body1}
  padding: 0.75rem 1rem;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  color: ${({ theme }) => theme.color.skyBlue[400]};
  background: ${({ theme }) => theme.color.skyBlue[50]};
  border-radius: 1.25rem;

  &:hover {
    background: ${({ theme }) => theme.color.skyBlue[400]};
    color: ${({ theme }) => theme.color.white};

    .pen-icon {
      fill: ${({ theme }) => theme.color.white};
    }
  }
`;
