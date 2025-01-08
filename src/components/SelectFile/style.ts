import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0.75rem 1rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.625rem;
  border: 1px solid ${({ theme }) => theme.color.grey[100]};
`;

export const FileNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1875rem;
`;

export const Text = styled.p`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.grey[400]};
`;

export const CancelUploadContainer = styled.div`
  cursor: pointer;
`;
