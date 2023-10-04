import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 6rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3rem;

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

export const AgreementButtonLink = styled.a`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.grey[500]};
`;

export const SubmitButtonBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 3rem;
`;

export const SubmitButton = styled.button`
  ${({ theme }) => theme.typo.button};
  background-color: ${({ theme }) => theme.color.skyBlue[400]};
  width: 100%;
  min-height: 2.75rem;
  color: white;
  border-radius: 0.625rem;
`;
