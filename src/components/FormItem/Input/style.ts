import styled from '@emotion/styled';

export const CustomInput = styled.input<{ isError: boolean }>`
  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.black};
  padding: 0.75rem 1rem;
  border: 0.0625rem solid
    ${({ theme, isError }) =>
      isError ? theme.color.error : theme.color.grey[100]};
  border-radius: 0.625rem;

  ::placeholder {
    color: ${({ theme }) => theme.color.grey[400]};
  }

  :focus {
    outline: none;
    border: 0.0625rem solid
      ${({ theme, isError }) =>
        isError ? theme.color.error : theme.color.skyBlue[400]};
  }
`;
