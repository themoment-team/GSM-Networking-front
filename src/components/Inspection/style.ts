import styled from 'styled-components';

export const InspectionContainer = styled.div`
  height: 100vh;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InspectionTitle = styled.h1`
  ${({ theme }) => theme.typo.h2};
  text-align: center;
`;
