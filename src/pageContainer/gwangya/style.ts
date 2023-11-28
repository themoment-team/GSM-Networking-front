import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 4.375rem;
  position: relative;

  @media (max-width: 600px) {
    padding: 7.5rem 1rem 0 1rem;
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
  height: calc(100vh - 12.94rem); // 100vh - (header + title + bottom margin)
  height: calc(100dvh - 12.94rem); // 100vh - (header + title + bottom margin)
  overflow-y: scroll;
  margin-top: 1.75rem;
  position: relative;
`;

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
`;

export const TextAreaWrapper = styled.div`
  position: sticky;
  margin-top: 1.25rem;
  bottom: 0;
`;
