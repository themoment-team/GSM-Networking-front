import styled from '@emotion/styled';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputTitle = styled.p`
  ${({ theme }) => theme.typo.body2}
  color: ${({ theme }) => theme.color.grey[600]};
`;

export const CustomInput = styled.input<{ isError?: boolean }>`
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

export const ErrorMessage = styled.p`
  ${({ theme }) => theme.typo.caption}
  color: ${({ theme }) => theme.color.error};
`;
