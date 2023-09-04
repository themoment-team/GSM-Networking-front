import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 0;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.h3};
`;

export const Description = styled.p`
  ${({ theme }) => theme.typo.subtitle};
  color: ${({ theme }) => theme.color.grey[400]};
`;
