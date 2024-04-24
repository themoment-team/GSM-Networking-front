import styled from '@emotion/styled';

export const Container = styled.button`
  display: flex;
  width: 100%;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.1875rem;
  border-radius: 0.625rem;
  border: 1px solid var(--Grey-grey-100, #eff0f2);
`;

export const Text = styled.p`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.grey[400]};
`;
