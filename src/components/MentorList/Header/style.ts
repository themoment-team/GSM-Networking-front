import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.grey[500]};
`;
