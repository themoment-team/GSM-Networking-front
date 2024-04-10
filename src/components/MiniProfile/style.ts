import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

enum SmallSize {
  true = '1.5rem',
  false = '2.25rem',
}

export const ProfileImageBox = styled.div<{ isSmallSize: boolean }>`
  background-color: ${({ theme }) => theme.color.grey[50]};
  border-radius: 50%;
  overflow: hidden;
  width: ${({ isSmallSize }) =>
    isSmallSize ? SmallSize.true : SmallSize.false};
  height: ${({ isSmallSize }) =>
    isSmallSize ? SmallSize.true : SmallSize.false};
  position: relative;

  & > img {
    object-fit: cover;
  }

  svg {
    margin: 0.5rem 0 0 0rem;
    width: 90%;
    height: 90%;
    transform: scaleX(-1);
  }
`;

export const UserInfo = styled.span`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.grey[900]};
  line-height: 150%;
`;
