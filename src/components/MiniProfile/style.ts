import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const ProfileImageBox = styled.div`
  background-color: ${({ theme }) => theme.color.grey[50]};
  border-radius: 50%;
  overflow: hidden;
  width: 2.25rem;
  height: 2.25rem;
  position: relative;

  & > img {
    object-fit: cover;
  }

  svg {
    margin: 0.5rem 0 0 0rem;
    width: 2rem;
    height: 2rem;
    transform: scaleX(-1);
  }
`;

export const UserInfo = styled.span`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.grey[900]};
  line-height: 150%;
`;
