import styled from '@emotion/styled';

import { keyframes } from '@emotion/react';

/*점 애니메이션*/
const blink = keyframes`
  0%{
      transform: translate(200%, 200%) scale(0.5);
      opacity: 0.8;
  }
  80%{
      transform: translate(200%, 200%) scale(1);
      opacity: 1;
  }
  100%{
      transform: translate(200%, 200%) scale(1.1);
      opacity: 0;
  }
`;

export const Button = styled.button<{ isActive: boolean; border: boolean }>`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.skyBlue[400] : theme.color.grey[150]};
  border: 0.0625rem solid
    ${({ theme, isActive, border }) =>
      border
        ? isActive
          ? theme.color.skyBlue[400]
          : theme.color.grey[150]
        : 'none'};

  border-radius: 0.3125rem;
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const Count = styled.span`
  ${({ theme }) => theme.typo.body1};
`;

export const Like = styled.button<{ isClicked?: boolean; isDetail: boolean }>`
  color: ${({ theme, isClicked }) =>
    isClicked ? theme.color.skyBlue[400] : theme.color.grey[300]};
  border: 0.0625rem solid
    ${({ theme, isClicked, isDetail }) =>
      isDetail
        ? isClicked
          ? theme.color.skyBlue[400]
          : theme.color.grey[150]
        : 'none'};
  padding: ${({ isDetail }) => (isDetail ? '0.25rem 0.75rem' : '0rem')};
  border-radius: 0.3125rem;
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const Dots = styled.div<{ isClicked?: boolean }>`
  animation: ${({ isClicked }) => (isClicked ? blink : '')} 0.5s ease-in-out
    forwards;
  display: block;
  width: 0.25rem;
  height: 0.25rem;
  background-color: transparent;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%) scale(0);
  box-shadow:
    0 -2.5rem 0 #148eff,
    0 2.5rem 0 #148eff,
    -2.5rem 0 0 #148eff,
    2.5rem 0 0 #148eff,
    -1.875rem -1.875rem 0 #148eff,
    1.875rem -1.875rem 0 #148eff,
    1.875rem 1.875rem 0 #148eff,
    -1.875rem 1.875rem 0 #148eff;
`;
