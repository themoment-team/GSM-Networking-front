import styled from '@emotion/styled';

export const ToggleWrapper = styled.div`
  display: flex;
`;

export const Text = styled.span`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.grey[600]};

  margin-top: 0.1875rem;
`;

export const ToggleButton = styled.button<{ isOppened: boolean }>`
  transition: ease-in-out 0.2s;

  transform: rotate(${({ isOppened }) => (isOppened ? -90 : 0)}deg);
`;
