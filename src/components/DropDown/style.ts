import styled from 'styled-components';

export const Opacity = styled.div`
  background: rgba(0, 0, 0, 0.25);
  height: 100vh;
  position: fixed;
  top: 80px;
  z-index: 10;
`;

export const Container = styled.div`
  height: 160px;
  background-color: #ffffff;
  border-radius: 0 0 10px 10px;
  width: 100vw;
`;

export const ListContainer = styled.ul`
  margin: 0 auto;
  width: 600px;
  height: 160px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px 20px;
  align-items: start;
  flex-wrap: wrap;
`;

export const ListItem = styled.li``;

export const LinkItem = styled.a`
  font-weight: 500;
  font-size: 16px;
  color: #828387;
`;
