import styled from '@emotion/styled';

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1rem;
`;

export const SmallNoticeText = styled.p`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.grey[600]};
`;

export const CustomTextArea = styled.textarea<{ isError: boolean }>`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.black};
  padding: 1rem;
  border: 0.0625rem solid
    ${({ theme, isError }) =>
      isError ? theme.color.error : theme.color.grey[100]};
  border-radius: 0.625rem;

  ::placeholder {
    ${({ theme }) => theme.typo.body1};
    color: ${({ theme }) => theme.color.grey[400]};
  }

  :focus {
    outline: none;
    border: 0.0625rem solid
      ${({ theme, isError }) =>
        isError ? theme.color.error : theme.color.skyBlue[400]};
  }
`;
