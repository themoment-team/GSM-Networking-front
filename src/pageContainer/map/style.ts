import styled from '@emotion/styled';

export const Container = styled.div``;

export const MentorListWrapper = styled.div`
  width: 100%;
  // 100vh - (리스트 상단 height + 하단 여백 2.5rem)
  height: calc(100dvh - 627px);
  overflow-y: scroll;
  gap: 56px;
  margin-top: 28px;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
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
