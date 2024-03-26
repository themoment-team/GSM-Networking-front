import styled from '@emotion/styled';

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  padding: 4.375rem 0;
`;

export const PostContainer = styled(FlexBox)`
  gap: 1.25rem;
`;

export const CommentContainer = styled(FlexBox)`
  gap: 2.5rem;
`;
