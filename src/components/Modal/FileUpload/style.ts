import styled from '@emotion/styled';

export const FileUploadInfo = styled.div`
  display: flex;
  width: 14.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  margin-bottom: 1.5rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.grey[800]};
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SmallTitle = styled.p`
  ${({ theme }) => theme.typo.caption};
  color: ${({ theme }) => theme.color.grey[400]};
`;

export const CancleUploadContainer = styled.div`
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileInputLabel = styled.label`
  width: 14.5rem;
  height: 14rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.grey[50]};
  border: 1px dashed ${({ theme }) => theme.color.grey[200]};
  border-radius: 0.625rem;
  cursor: pointer;
`;
