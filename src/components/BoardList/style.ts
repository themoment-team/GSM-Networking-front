import styled from '@emotion/styled';

export const BoardCardWrapper = styled.div`
  height: calc(100vh - 12rem);
  height: calc(100dvh - 12rem);
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const BoardCardList = styled.div<{ isFetching: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: ${({ isFetching }) => (isFetching ? 'hidden' : 'scroll')};
  position: relative;

  ::-webkit-scrollbar {
    background: none;
    width: 0.5rem;
    display: none;
  }
`;

export const LoadMoreTrigger = styled.div`
  position: relative;
  bottom: 0.625rem;
`;

export const NotFoundIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
