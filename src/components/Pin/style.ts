import styled from '@emotion/styled';

export const PinWrapper = styled.div`
  display: flex;
  gap: 0.25rem;

  align-items: center;

  cursor: pointer;
`;

export const Text = styled.span<{ isClicked: boolean }>`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme, isClicked }) =>
    isClicked ? theme.color.skyBlue[400] : theme.color.grey[400]};
`;
