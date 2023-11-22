import styled from '@emotion/styled';

export const Title = styled.p`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.grey[800]};
  margin-bottom: 1.5rem;
`;

export const ImgInput = styled.input`
  display: none;
`;

export const ImgInputLabel = styled.label`
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
