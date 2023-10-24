import styled from '@emotion/styled';

export const CustomSelect = styled.select<{
  isError?: boolean;
  isDefault: boolean;
}>`
  ${({ theme }) => theme.typo.body1}
  width: 100%;
  color: ${({ theme, isDefault }) =>
    isDefault ? theme.color.grey[400] : theme.color.black};
  padding: 0.75rem 1rem;
  border: 0.0625rem solid
    ${({ theme, isError }) =>
      isError ? theme.color.error : theme.color.grey[100]};
  border-radius: 0.625rem;
  cursor: pointer;

  ::placeholder {
    color: ${({ theme }) => theme.color.grey[400]};
  }

  :focus {
    outline: none;
    border: 0.0625rem solid
      ${({ theme, isError }) =>
        isError ? theme.color.error : theme.color.skyBlue[400]};
  }

  :default {
    color: ${({ theme }) => theme.color.grey[400]};
  }
`;
