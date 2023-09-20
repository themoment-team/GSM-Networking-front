import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 6rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3rem;
`;

export const SelectButtonBox = styled.div`
  display: flex;
  gap: 1rem;
`;

export const HeaderTitle = styled.div`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

export const FormBox = styled.form``;

export const AgreementBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AgreementTitle = styled.div`
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  color: #111112;
`;

export const AgreementButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const AgreementButton = styled.button`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #707070;
`;

export const AgreementButtonContent = styled.div`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  color: #8f9094;
`;

export const SubmitButtonBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 3rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  min-height: 2.75rem;
  background-color: #148eff;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 700;
  color: white;
  border-radius: 0.625rem;
`;
