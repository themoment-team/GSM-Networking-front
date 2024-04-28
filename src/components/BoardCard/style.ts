import styled from '@emotion/styled';
import { Link } from 'next-view-transitions';

import { keyframes } from '@emotion/react';

/*점 애니메이션*/
const blink = keyframes`
  0%{
      transform: translate(200%, -300%) scale(0.5);
      opacity: 0.8;
  }
  80%{
      transform: translate(200%, -300%) scale(1);
      opacity: 1;
  }
  100%{
      transform: translate(200%, -300%) scale(1.1);
      opacity: 0;
  }
`;

export const BoardCard = styled(Link)`
  display: flex;
  padding: 49px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[100]};
  max-width: 37.5rem;
  width: 100%;
  cursor: pointer;
  margin-bottom: 1.5rem;
`;

export const ContentBox = styled.div`
  position: relative;
`;

export const Comment = styled.div`
  position: relative;
  right: 20px;
  svg {
    position: relative;
    top: 3px;
  }
`;

export const BottomBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 50px;
  right: 24px;
  width: 106px;
  height: 24px;
  justify-content: space-between;
  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.grey['300']};
`;

export const LikeCount = styled.span`
  position: relative;
  right: 15px;
  top: 1px;
`;
export const CommentCount = styled.span`
  position: relative;
  top: 1px;
  left: 7px;
`;

export const Like = styled.button<{ isClicked: boolean }>`
  svg {
    &:active {
      transition: all 0.5;
      transform: scale(0.95);
      transform: rotateX(45deg);
    }
  }
`;

export const Dots = styled.div<{ isClicked: boolean }>`
  animation: ${({ isClicked }) => (isClicked ? blink : '')} 0.5s ease-in-out
    forwards;
  display: block;
  width: 4px;
  height: 4px;
  background-color: transparent;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%) scale(0);
  box-shadow:
    0 -40px 0 #148eff,
    0 40px 0 #148eff,
    -40px 0 0 #148eff,
    40px 0 0 #148eff,
    -30px -30px 0 #148eff,
    30px -30px 0 #148eff,
    30px 30px 0 #148eff,
    -30px 30px 0 #148eff;
`;

export const ContentHeader = styled.div`
  display: flex;
  max-width: 34.5rem;
  width: 100%;
  padding-right: 0.5rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 20px;
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
  position: relative;
  bottom: 20px;
`;
