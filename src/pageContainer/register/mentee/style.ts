import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.375rem;
`;

export const MenteeForm = styled.form`
  margin-top: 3.25rem;
  width: 27.5rem;
  height: 100%;
  row-gap: 1.625rem;
  position: relative;
`;

export const InfoBox = styled.div`
  margin-top: 3.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const InfoTitle = styled.h4`
  ${({ theme }) => theme.typo.h4};
  width: 27.5rem;
`;

export const RegisterButton = styled.button`
  ${({ theme }) => theme.typo.button}
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.skyBlue[400]};
  width: 27.5rem;
  height: 2.75rem;
  border-radius: 0.625rem;
  position: absolute;
  bottom: 5rem;
  cursor: pointer;
`;
