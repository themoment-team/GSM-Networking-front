import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  margin-top: 356px;
  font-weight: 700;
  font-family: 'LINE Seed Sans KR';
  font-size: 96px;

  & > svg:last-child {
    display: none;
  }

  & > svg:first-child {
    display: block;
  }

  @media (max-width: 600px) {
    margin-top: 10rem;

    & > svg:last-child {
      display: block;
    }

    & > svg:first-child {
      display: none;
    }
  }
`;

export const LoginButton = styled.button`
  margin: 70px 0 30px 0;
`;

export const TextContainer = styled.p`
  color: #828387;
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
`;
