import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalInner = styled.div`
  padding: 1rem 1.75rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.white};
`;
