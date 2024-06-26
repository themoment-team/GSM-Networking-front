import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 4.375rem;
  position: relative;

  @media (max-width: 600px) {
    padding: 4.375rem 1rem 0 1rem;
  }
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

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.h4};
  color: ${({ theme }) => theme.color.black};
`;

export const LoadMoreTrigger = styled.div`
  position: relative;
  bottom: 0.625rem;
`;

export const BoardCardWrapper = styled.div`
  height: calc(100vh - 12rem);
  height: calc(100dvh - 12rem);
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 2.8125rem;
`;

export const NotFoundIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
