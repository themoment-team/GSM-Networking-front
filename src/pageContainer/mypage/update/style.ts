import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 4.375rem;
  position: relative;

  @media (max-width: 600px) {
    padding: 7.5rem 1rem 0 1rem;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.5rem 0;
`;

export const Line = styled.div`
  height: 0.75rem;
  border-radius: 0.0625rem;
  background: ${({ theme }) => theme.color.grey[50]};
`;
