import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.grey[500]};
`;
