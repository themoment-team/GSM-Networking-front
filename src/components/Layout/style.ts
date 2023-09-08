import styled from 'styled-components';

export const Layout = styled.main`
  width: 600px;
  margin: 0 auto;
  padding-top: 40px;
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
    padding: 5rem 1rem 0 1rem;
  }
`;
