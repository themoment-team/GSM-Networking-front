import styled from '@emotion/styled';

export const Container = styled.div``;

export const MentorListWrapper = styled.div`
  width: 100%;
  height: calc(100dvh - 39.1875rem);
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
  margin-top: 5.625rem;
`;
