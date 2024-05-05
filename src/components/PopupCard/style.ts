import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  padding: 1.5rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  box-shadow: 0.0625rem 0.5625rem 1.125rem 0 rgba(6, 15, 39, 0.06);
  background-color: ${({ theme }) => theme.color.white};
  z-index: 2;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomSection = styled.div`
  ${({ theme }) => theme.typo.caption};
  color: ${({ theme }) => theme.color.grey[600]};
  display: flex;
  gap: 0.375rem;
  align-items: center;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typo.subtitle};
  cursor: pointer;
  margin-right: 0.5rem;
`;

export const CheckButton = styled.button`
  display: flex;
  align-items: center;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;

  .closeIcon {
    fill: ${({ theme }) => theme.color.grey[600]};
  }
`;
