import styled from '@emotion/styled';

export const Button = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  ${({ theme }) => theme.typo.subtitle}
  color: ${({ theme }) => theme.color.grey['300']};
`;

export const Divide = styled.div`
  width: 0.0625rem;
  height: 1.4375rem;
  background: ${({ theme }) => theme.color.grey['150']};
`;
