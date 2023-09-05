import styled from 'styled-components';

export const WorkerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: calc(100vh - 18.3375rem);
  height: calc(100dvh - 18.3375rem);
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
