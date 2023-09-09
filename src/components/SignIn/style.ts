import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: LINE Seed Sans KR;
  font-size: 6rem;
  font-style: normal;
  font-weight: 700;
  color: #000;
  text-align: center;
`;

export const LoginLink = styled.a`
  ${({ theme }) => theme.typo.button}
  padding: 0.75rem 1.25rem;
  backdrop-filter: blur(0.5rem);
  border-radius: 2.5rem;
  background: ${({ theme }) => theme.color.grey[50]};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 5rem 0 2.5rem;
`;

export const TextContainer = styled.p`
  ${({ theme }) => theme.typo.subtitle}
  color: ${({ theme }) => theme.color.grey[600]};
`;
