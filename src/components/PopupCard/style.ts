import styled from '@emotion/styled';

export const Card = styled.div`
  padding: 1.5rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
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
