import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 56px 0;
  margin-top: 70px;
`;

export const Line = styled.div`
  width: 601px;
  height: 12px;
  border-radius: 1px;
  background: ${({ theme }) => theme.color.grey[50]};
`;

export const CareerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 56px 0 40px;
`;

export const CareerInfoText = styled.span`
  color: ${({ theme }) => theme.color.grey[900]};

  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
`;

export const CareerBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 16px;
`;

export const WithdrawContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const WithdrawBox = styled.div<{ hoverColor: 'red' | 'blue' }>`
  display: flex;
  gap: 6px;
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
