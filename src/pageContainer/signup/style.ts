import styled from '@emotion/styled';

export const Form = styled.form`
  max-width: 27.5rem;
  margin: 0 auto;
  padding-top: 7.875rem;
  padding-bottom: 5.75rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.87rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typo.h4}
  color: ${({ theme }) => theme.color.grey[400]};
  margin-bottom: 2.5rem;
`;

export const CompanyBox = styled.div`
  margin-top: 5.12rem;
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
`;
