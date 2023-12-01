import styled from '@emotion/styled';

export const TextAreaContainer = styled.div<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem 0.75rem 1.25rem;
  max-width: 37.5rem;
  height: auto;
  border: 0.0625rem solid
    ${({ theme, isFocused }) =>
      isFocused ? theme.color.skyBlue[400] : theme.color.grey[200]};
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.color.white};
`;

export const TextField = styled.textarea`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.black};
  width: 100%;
  min-height: 1.5rem;
  resize: none;
  border: 0;
  padding: 0;
  overflow: visible;
  height: 0;
  outline: none;

  touch-action: pan-x pan-y;

  ::placeholder {
    ${({ theme }) => theme.typo.body1};
    color: ${({ theme }) => theme.color.grey[400]};
  }
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
`;

export const MaxLengthNotice = styled.span`
  ${({ theme }) => theme.typo.caption};
  color: ${({ theme }) => theme.color.grey[400]};
`;

export const UploadButton = styled.button`
  display: flex;
`;
