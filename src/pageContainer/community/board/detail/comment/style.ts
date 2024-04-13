import styled from '@emotion/styled';

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  padding: 4.375rem 0;

  @media (max-width: 600px) {
    padding: 4.375rem 1rem 0 1rem;
  }
`;

export const PostContainer = styled(FlexBox)`
  gap: 1.25rem;
`;

export const CommentContainer = styled(FlexBox)`
  gap: 2.5rem;
`;

export const TextAreaWrapper = styled.div`
  position: fixed;
  bottom: 2.5rem;
  width: 100%;
  box-shadow: 0px -0.625rem 1rem 0px rgba(255, 255, 255, 0.8);
`;
