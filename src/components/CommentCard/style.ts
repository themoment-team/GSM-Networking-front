import styled from '@emotion/styled';

export const EveryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const TextWrapper = styled(Container)`
  margin-left: 2.75rem;
`;

export const Content = styled.pre`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.black};
  white-space: pre-wrap;
`;

export const AddComment = styled.span`
  width: fit-content;
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.grey[500]};
  cursor: pointer;
`;

export const DoubleCommentWrapper = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;

  opacity: 0;
  animation: fadeIn 0.2s ease-in forwards;
`;
