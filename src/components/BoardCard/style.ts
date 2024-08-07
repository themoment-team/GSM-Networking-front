import styled from '@emotion/styled';
import { Link } from 'next-view-transitions';

export const BoardCard = styled(Link)`
  display: flex;
  padding: 3.0625rem 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[100]};
  border-radius: 0.75rem;
  max-width: 37.5rem;
  width: 100%;
  cursor: pointer;
`;

export const ContentBox = styled.div`
  position: relative;
`;

export const Comment = styled.div`
  position: relative;
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;

export const BottomBox = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;

  width: 100%;
  height: 1.5rem;
  padding: 0 1.5rem;
  bottom: 3.5rem;

  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.grey['300']};
`;

export const LikeCommentWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const LikeCount = styled.span`
  position: relative;
  top: 0.0625rem;
`;

export const CommentCount = styled.span``;

export const ContentHeader = styled.div`
  display: flex;
  max-width: 34.5rem;
  width: 100%;
  padding-right: 0.5rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 1.25rem;
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
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.black};
  max-width: 34.5rem;
  width: 100%;
  word-break: break-all;
  margin-top: 0.4688rem;
  cursor: pointer;
  position: relative;
  bottom: 1.25rem;
`;
