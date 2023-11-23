import styled from '@emotion/styled';

export const WriteForm = styled.form`
  padding-top: 6.875rem;
`;

export const PageTitle = styled.h4`
  ${({ theme }) => theme.typo.h4};
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 1.5rem;
`;

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

export const TextField = styled.textarea`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.black};
  height: 11rem;
  resize: none;
  word-break: keep-all;
  padding: 1rem;
  border-radius: 0.625rem;
  border: 1px solid ${({ theme }) => theme.color.grey[150]};

  ::placeholder {
    ${({ theme }) => theme.typo.body1};
    color: ${({ theme }) => theme.color.grey[400]};
  }

  :focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 5rem;
  width: 37.5rem;
`;

export const Button = styled.button`
  ${({ theme }) => theme.typo.button};
  background-color: ${({ theme }) => theme.color.skyBlue[400]};
  color: ${({ theme }) => theme.color.white};
  border-radius: 0.625rem;
  width: 27.5rem;
  height: 2.75rem;
`;
