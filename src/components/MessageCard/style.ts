import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => theme.typo.body1};
  padding: 0.5rem 1.25rem;
  display: inline-block;
`;

export const MineContainer = styled(Container)`
  border-radius: 1.25rem 1.25rem 0rem 1.25rem;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.skyBlue[400]};
`;

export const OpponentContainer = styled(Container)`
  border-radius: 0rem 1.25rem 1.25rem 1.25rem;
  color: ${({ theme }) => theme.color.grey[800]};
  background-color: ${({ theme }) => theme.color.grey[100]};
`;

export const Content = styled.p``;
