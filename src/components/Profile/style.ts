import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  background-color: ${({ theme }) => theme.color.grey[50]};
  border-radius: 50%;
  overflow: hidden;
  width: 6rem;
  height: 6rem;
  padding: 1.25rem 0.3125rem 0 0.6875rem;

  & > svg {
    width: 5rem;
    height: 4.9375rem;
  }
`;
