import styled from '@emotion/styled';

export const CustomSelect = styled.select<{
  isError: boolean;
  isDefault: boolean;
}>`
  ${({ theme }) => theme.typo.body1}
  width: 100%;
  height: 3rem;
  color: ${({ theme, isDefault }) =>
    isDefault ? theme.color.grey[400] : theme.color.black};
  padding: 0.75rem 1rem;
  border: 0.0625rem solid
    ${({ theme, isError }) =>
      isError ? theme.color.error : theme.color.grey[100]};
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;

  :disabled {
    background-color: ${({ theme }) => theme.color.grey[50]};
    color: ${({ theme }) => theme.color.grey[200]};
    cursor: default;
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
