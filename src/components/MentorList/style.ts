import styled from '@emotion/styled';

export const WorkerList = styled.div`
  display: grid;
  width: 100%;
  // 100vh - (리스트 상단 height + 하단 여백 2.5rem)
  height: calc(100dvh - 14.189rem);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(auto-fill, 14.0625rem);
  gap: 2.5rem 1.13rem;
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

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 13rem;
`;
