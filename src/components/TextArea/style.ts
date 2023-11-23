import styled from '@emotion/styled';

export const WriteForm = styled.form`
  padding-top: 6.875rem;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1rem;
`;

export const TextField = styled.textarea`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.black};
  height: 11rem;
  resize: none;
  word-break: keep-all;
  padding: 1rem;
  border-radius: 0.625rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[150]};

  ::placeholder {
    ${({ theme }) => theme.typo.body1};
    color: ${({ theme }) => theme.color.grey[400]};
  }

  :focus {
    outline: none;
    border: 0.0625rem solid ${({ theme }) => theme.color.skyBlue[400]};
  }
`;
