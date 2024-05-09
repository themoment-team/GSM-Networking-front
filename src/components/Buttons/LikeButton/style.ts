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
  ${({ theme }) => theme.typo.body1}
  border: 0.0625rem solid ${({ theme, isActive, border }) =>
    border
      ? isActive
        ? theme.color.skyBlue[400]
        : theme.color.grey[150]
      : 'none'};
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.skyBlue[400] : theme.color.grey[150]};
  border-radius: 0.3125rem;
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const Count = styled.span`
  ${({ theme }) => theme.typo.body1}
  position: relative;
  top: 0.0625rem;
`;

export const Like = styled.button<{ isClicked: boolean; border: boolean }>`
  svg {
    &:active {
      transition: all 0.5;
      transform: scale(0.95);
      transform: rotateX(45deg);
    }
  }
  color: ${({ theme, isClicked }) =>
    isClicked ? theme.color.skyBlue[400] : theme.color.grey[150]};
  border: 0.0625rem solid
    ${({ theme, isClicked, border }) =>
      border
        ? isClicked
          ? theme.color.skyBlue[400]
          : theme.color.grey[150]
        : 'none'};
  padding: ${({ border }) => (border ? '4px 12px' : '0px')};
  border-radius: 5px;
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
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
