import styled from '@emotion/styled';

export const WorkerListItem = styled.div`
  ${({ theme }) => theme.typo.body1};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.625rem;
`;

export const Generation = styled.p`
  font-feature-settings: 'tnum';
`;

export const Name = styled.p`
  width: 3.5rem;
`;

export const Position = styled.p`
  width: 5.625rem;
  overflow: hidden;
  white-space: nowrap;
`;

export const Company = styled.p``;

export const SelectButton = styled.button<{ isSelect: boolean }>`
  ${({ theme }) => theme.typo.body2};

  background-color: ${({ isSelect, theme }) =>
    isSelect ? theme.color.skyBlue[400] : theme.color.grey[50]};

  color: ${({ isSelect, theme }) =>
    isSelect ? theme.color.grey[50] : theme.color.grey[500]};
  padding: 0.5rem 1rem;
  border-radius: 1.25rem;
`;
