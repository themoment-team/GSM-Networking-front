import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 6rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3rem;
  position: relative;

  @media screen and (max-width: 600px) {
    padding: 6rem 1rem 1rem 1rem;
  }
`;

export const HeaderTitle = styled.div`
  ${({ theme }) => theme.typo.h3};
`;

export const AgreementBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AgreementTitle = styled.div`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.black};
`;

export const AgreementButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const AgreementButton = styled.button<{ checkPolicy: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ checkPolicy, theme }) =>
    checkPolicy ? theme.color.skyBlue[400] : 'rgba(0, 0, 0, 0)'};
  border: 1px solid
    ${({ checkPolicy, theme }) =>
      checkPolicy ? theme.color.skyBlue[400] : theme.color.grey[200]};

  &:hover {
    border: 1px solid
      ${({ checkPolicy, theme }) =>
        checkPolicy ? theme.color.skyBlue[400] : theme.color.skyBlue[200]};
  }
`;

export const AgreementTextButton = styled.button`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.grey[500]};
`;

export const AgreementLink = styled.a`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.skyBlue[300]};
`;

export const SubmitButton = styled.button`
  width: 100%;
  position: absolute;
  bottom: 3rem;
  ${({ theme }) => theme.typo.button};
  background-color: ${({ theme }) => theme.color.skyBlue[400]};
  min-height: 2.75rem;
  color: white;
  border-radius: 0.625rem;

  :disabled {
    background-color: ${({ theme }) => theme.color.grey[200]};
    color: ${({ theme }) => theme.color.grey[500]};
    cursor: default;
  }

  @media screen and (max-width: 600px) {
    width: calc(100% - 2rem);
  }
`;
