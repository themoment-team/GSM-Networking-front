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

export const PostList = styled.div`
  height: calc(100vh - 10.44rem);
  height: calc(100dvh - 10.44rem);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  margin-top: 1.75rem;
`;
