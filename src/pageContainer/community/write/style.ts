import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 4.375rem 0 2.5rem;
  position: relative;

  @media (max-width: 600px) {
    padding: 4.375rem 1rem 0 1rem;
  }
`;

export const Form = styled.form`
  margin-top: 1.75rem;
  padding: 0rem 5rem;
`;

export const FormFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
`;

export const Textarea = styled.textarea<{ isError: boolean }>`
  ${({ theme }) => theme.typo.body1};
  height: 26.0625rem;
  padding: 0.75rem 1rem;
  border-radius: 0.625rem;
  border: 1px solid ${({ theme }) => theme.color.grey[100]};
  resize: none;
  border: 0.0625rem solid
    ${({ theme, isError }) =>
      isError ? theme.color.error : theme.color.grey[100]};
  color: ${({ theme }) => theme.color.black};

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

export const NextButton = styled.button`
  ${({ theme }) => theme.typo.button};
  width: 100%;
  height: 2.75rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.skyBlue[400]};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  margin-top: 0.875rem;

  :disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.color.grey[200]};
    color: ${({ theme }) => theme.color.grey[500]};
  }
`;

export const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
`;

export const MapFileBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const ModalWrapper = styled.dialog`
  border: 0;
  padding: 0;
`;
