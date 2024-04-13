import styled from '@emotion/styled';
import Link from 'next/link';

export const Button = styled(Link)`
  display: flex;
  width: 3.125rem;
  height: 3.125rem;
  padding: 0.8125rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.color.skyBlue['400']};
  cursor: pointer;
`;
