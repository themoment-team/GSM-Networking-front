import styled from '@emotion/styled';

export const DescriptionWrapper = styled.div`
  width: 100%;
`;

export const Description = styled.p`
  ${({ theme }) => theme.typo.caption};
  color: ${({ theme }) => theme.color.grey[400]};
`;

export const DefaultImgButton = styled.button`
  ${({ theme }) => theme.typo.button}
  color: ${({ theme }) => theme.color.skyBlue[400]};
  border: 0.0625rem solid ${({ theme }) => theme.color.skyBlue[400]};
  padding: 0.5625rem 2.4063rem;
  border-radius: 0.625rem;
`;

export const ImgInput = styled.input`
  display: none;
`;

export const ImgInputLabel = styled.label`
  width: 11.75rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.grey[50]};
  border: 1px dashed ${({ theme }) => theme.color.grey[200]};
  border-radius: 0.625rem;
  cursor: pointer;
  margin: 1rem 0;
`;
