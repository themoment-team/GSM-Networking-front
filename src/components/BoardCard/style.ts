import styled from '@emotion/styled';
import Link from 'next/link';

export const BoardCard = styled.div`
  display: flex;
  padding: 1.75rem 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border-radius: 0.75rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[100]};
  max-width: 37.5rem;
  width: 100%;
  cursor: pointer;
  margin-bottom: 1.5rem;
`;

export const ContentBox = styled(Link)``;

export const ContentHeader = styled.div`
  display: flex;
  max-width: 34.5rem;
  width: 100%;
  padding-right: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Name = styled.div`
  ${({ theme }) => theme.typo.body2}
  color : ${({ theme }) => theme.color.black};
`;

export const DateAndTime = styled.div`
  ${({ theme }) => theme.typo.caption}
  color: ${({ theme }) => theme.color.grey['500']};
  display: flex;
  gap: 0.25rem;
  justify-content: center;
`;

export const Date = styled.div``;

export const Time = styled.div``;

export const Tag = styled.div`
  ${({ theme }) => theme.typo.caption}
  color: ${({ theme }) => theme.color.grey['700']};
`;

export const Content = styled.div`
  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.black};
  max-width: 34.5rem;
  width: 100%;
  word-break: break-all;
  margin-top: 0.4688rem;
  cursor: pointer;
`;
