import styled from '@emotion/styled';

export const WorkerList = styled.div`
  display: grid;
  width: 100%;
  // 100vh - (리스트 상단 height)
  height: calc(100dvh - 11.689rem);
  grid-template-columns: repeat(3, minmax(0, 1fr));
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
