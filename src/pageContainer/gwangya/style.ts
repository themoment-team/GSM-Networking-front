import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 4.375rem;
  position: relative;

  @media (max-width: 600px) {
    padding: 4.375rem 1rem 0 1rem;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: end;
  gap: 0.75rem;
  margin-top: 2.5rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.h4};
  color: ${({ theme }) => theme.color.black};
`;

export const Description = styled.p`
  ${({ theme }) => theme.typo.caption};
  color: ${({ theme }) => theme.color.grey[500]};
`;

export const PostWrapper = styled.div`
  height: calc(100vh - 11.94rem); // 100vh - (header + title + bottom margin)
  height: calc(100dvh - 11.94rem); // 100vh - (header + title + bottom margin)
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const LoadMoreTrigger = styled.div`
  position: absolute;
  top: 0px;
`;

export const PostList = styled.div<{ isFetching: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  overflow-y: ${({ isFetching }) => (isFetching ? 'hidden' : 'scroll')};
  position: relative;

  ::-webkit-scrollbar {
    background: none;
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 0.625rem;
  }
`;
