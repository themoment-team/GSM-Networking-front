import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalInner = styled.div`
  padding: 1rem 1.75rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.white};
`;
