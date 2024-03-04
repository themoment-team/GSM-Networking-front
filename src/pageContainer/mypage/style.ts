import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 4.375rem 0 2.5rem;
  position: relative;

  @media (max-width: 600px) {
    padding: 7.5rem 1rem 0 1rem;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.5rem 0;
`;

export const Line = styled.div`
  height: 0.75rem;
  border-radius: 0.0625rem;
  background: ${({ theme }) => theme.color.grey[50]};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 3.5rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InfoText = styled.span`
  color: ${({ theme }) => theme.color.grey[900]};

  font-size: 1.125rem;
  font-weight: 600;
  line-height: 150%;
`;

export const InfoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem 1rem;
`;

export const WithdrawContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const WithdrawBox = styled.div<{ hoverColor: 'red' | 'blue' }>`
  display: flex;
  gap: 0.375rem;
  cursor: pointer;
  width: fit-content;

  &:hover {
    path {
      fill: ${({ hoverColor, theme: { color } }) =>
        hoverColor === 'blue' ? color.skyBlue[400] : color.error};
    }

    span {
      color: ${({ hoverColor, theme: { color } }) =>
        hoverColor === 'blue' ? color.skyBlue[400] : color.error};
    }
  }
`;

export const WithdrawText = styled.span`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.grey[500]};
`;

export const UpdateButton = styled.button`
  ${({ theme }) => theme.typo.button};
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
