import styled from '@emotion/styled';

export const PinWrapper = styled.div<{ isTeacher: boolean }>`
  display: flex;
  gap: 0.25rem;

  align-items: center;

  ${({ isTeacher }) => isTeacher && 'cursor: pointer'};
`;

export const Text = styled.span<{ isPinned: boolean }>`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme, isPinned }) =>
    isPinned ? theme.color.skyBlue[400] : theme.color.grey[400]};
`;
