'use client';

import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body, * {
    font-family: 'Pretendard Variable', Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.color.white};
    height: 100vh;
    height: 100dvh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html {
    @media (max-width: 599px) {
      font-size: 15px;
    }
    @media (max-width: 520px) {
      font-size: 14px;
    }
    @media (max-width: 470px) {
      font-size: 13px;
    }
    @media (max-width: 420px) {
      font-size: 12px;
    }
    @media (max-width: 390px) {
      font-size: 11px;
    }
    @media (max-width: 360px) {
      font-size: 9px;
    }
    @media (max-width: 300px) {
      font-size: 8px;
    }
  }

  button {
    border: none;
    outline: none;
    background: inherit;
    cursor: pointer;

    &:focus {
      border: none;
      outline: none;
    }
  }
`;

export default GlobalStyle;
