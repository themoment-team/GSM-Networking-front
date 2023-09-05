import styled from 'styled-components';

export const WorkerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  // 100vh - (리스트 상단 height + 리스트 하단 여백 2.5rem)
  height: calc(100vh - 22.7125rem);
  height: calc(100dvh - 22.7125rem);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.375rem;
  }

  &::-webkit-scrollbar-thumb {
    height: 10rem;
    background-color: ${({ theme }) => theme.color.grey[200]};
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background-color: inherit;
  }
`;
