import styled from '@emotion/styled';

export const DescriptionWrapper = styled.div`
  width: 100%;
  margin-bottom: 2.25rem;
`;

export const Description = styled.p`
  ${({ theme }) => theme.typo.caption};
  color: ${({ theme }) => theme.color.grey[400]};
`;

export const CropperWrapper = styled.div`
  margin-bottom: 1rem;

  div {
    div {
      padding: 1px;
    }
  }
`;

export const Button = styled.button`
  ${({ theme }) => theme.typo.button};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.skyBlue[400]};
  padding: 0.5625rem 0;
  width: 100%;
  border-radius: 0.625rem;
`;
