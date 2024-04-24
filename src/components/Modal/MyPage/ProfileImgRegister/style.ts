import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.grey[800]};
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.25rem;
`;

export const XButton = styled.button`
  .closeIcon {
    fill: ${({ theme }) => theme.color.grey[400]};
  }
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
