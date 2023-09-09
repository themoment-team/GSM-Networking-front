import styled from 'styled-components';

export const Opacity = styled.div`
  background: rgba(0, 0, 0, 0.25);
  height: 100vh;
  height: 100dvh;
  position: fixed;
  left: 0;
  top: 5rem;
  z-index: 10;
`;

export const Container = styled.div`
  width: 100vw;
  height: 10rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0 0 0.625rem 0.625rem;

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const ListContainer = styled.ul`
  margin: 0 auto;
  width: 37.5rem;
  height: 10rem;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
`;

export const ListItem = styled.li``;

export const LinkItem = styled.a`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.grey[600]};
`;
