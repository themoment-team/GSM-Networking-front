import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.37rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Index = styled.p`
  ${({ theme }) => theme.typo.body2}
  color: ${({ theme }) => theme.color.black};
`;

export const DateBox = styled.div`
  ${({ theme }) => theme.typo.caption}
  color: ${({ theme }) => theme.color.grey[500]};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Date = styled.p``;

export const Time = styled.time``;

export const Content = styled.pre`
  width: 100%;
  white-space: break-spaces;
  ${({ theme }) => theme.typo.body1}
  color: #000000;
`;
