import styled from '@emotion/styled';

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  padding: 0 0 6.75rem;

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const PostContainer = styled(FlexBox)`
  gap: 1.25rem;
`;

export const WriterProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.div`
  max-width: 37.5rem;
  width: 100%;
  height: 0.0625rem;
  margin: 0.5rem 0;

  background-color: ${({ theme }) => theme.color.grey[100]};
`;

export const CommentContainer = styled(FlexBox)`
  gap: 2.5rem;
  padding-bottom: 7.5rem;
`;

export const TextAreaWrapper = styled.div`
  position: fixed;
  bottom: 2.5rem;
  width: 100%;
  box-shadow: 0px -0.625rem 1rem 0px rgba(255, 255, 255, 0.8);

  @media (max-width: 600px) {
    width: calc(100% - 2rem);
  }
`;

export const UpdateButton = styled.button`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.skyBlue[400]};
  padding: 0.375rem 0.75rem;
  border-radius: 0.63rem;
`;
