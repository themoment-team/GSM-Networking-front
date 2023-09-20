import styled from '@emotion/styled';

export const WorkerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 11.75rem);
  gap: 2.5rem calc((100% - (11.75rem * 3)) / 2);
  // 100vh - (리스트 상단 height + 리스트 하단 여백 2.5rem)
  height: calc(100vh - 20.2125rem);
  overflow-y: scroll;
  margin-top: 2rem;

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
`;

export const NotFoundTextBox = styled.div`
  text-align: center;
  margin-top: 2rem;
  color: #8f9094;
  font-weight: 500;
  line-height: 23px;
`;
