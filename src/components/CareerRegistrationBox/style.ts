import { Button } from './../Buttons/Filter/style';
import styled from '@emotion/styled';

export const Title = styled.p`
  ${({ theme }) => theme.typo.h4}
  color: ${({ theme }) => theme.color.grey[400]};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.63rem;
  margin-top: 2.5rem;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IconButton = styled.button`
  svg {
    display: block;
  }
`;

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
  ::after {
    content: '*';
    color: ${({ theme }) => theme.color.error};
  }
`;

export const EmploymentDurationBox = styled.div``;

export const PeriodSelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0 1rem;
`;

export const Tilde = styled.span`
  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.grey[600]};
`;

export const TenureCheckInput = styled.input`
  display: none;
`;

export const TenureCheckLabel = styled.label`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.color.grey[500]};
  cursor: pointer;
  :hover {
    div {
      border: 0.0625rem solid ${({ theme }) => theme.color.skyBlue[200]};
    }
  }
`;

export const CheckBox = styled.button<{ isChecked: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[200]};
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.color.skyBlue[400] : theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
