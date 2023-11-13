import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProfileImageBox = styled.div`
  background-color: ${({ theme }) => theme.color.grey[50]};
  border-radius: 50%;
  overflow: hidden;
  width: 6rem;
  height: 6rem;
  padding: 0.8rem 0 0 0.3rem;

  svg {
    width: 5.8rem;
    height: 5.8rem;
  }
`;

export const UserName = styled.span`
  ${({ theme }) => theme.typo.body1}
  color: #000;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 150%;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
