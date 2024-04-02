import styled from '@emotion/styled';

export const Button = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  ${({ theme }) => theme.typo.subtitle}
  color: ${({ theme }) => theme.color.grey['300']};
`;

export const Devide = styled.div`
  width: 1px;
  height: 23px;
  background: ${({ theme }) => theme.color.grey['150']};
`;
