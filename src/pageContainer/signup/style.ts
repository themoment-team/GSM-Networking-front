import styled from '@emotion/styled';

export const Form = styled.form`
  max-width: 27.5rem;
  margin: 0 auto;
  padding-top: 7.875rem;
  padding-bottom: 5.75rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.63rem;
  margin-top: 2.5rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typo.h4}
  color: ${({ theme }) => theme.color.grey[400]};
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddButton = styled.button`
  svg {
    display: block;
  }
`;

export const PrivacyBox = styled.div``;

export const CompanyBox = styled.div`
  margin-top: 4.13rem;
`;

export const SubmitButton = styled.button`
  ${({ theme }) => theme.typo.button}
  width: 100%;
  height: 2.75rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.skyBlue[400]};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  margin-top: 5.75rem;
`;

export const PeriodTitle = styled.p`
  ${({ theme }) => theme.typo.body2}
  color: ${({ theme }) => theme.color.grey[600]};
`;

export const TenureCheck = styled.input`
  display: none;
`;

export const TenureCheckLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.color.grey[500]};
`;

export const CheckBox = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[200]};
`;
