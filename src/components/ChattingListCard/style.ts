import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0.75rem 1.25rem 0.75rem 0rem;
  width: 37.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const OpponentProfile = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const ProfileImg = styled.div`
  background-color: ${({ theme }) => theme.color.grey[50]};
  border-radius: 3.125rem;
  overflow: hidden;
  width: 2.25rem;
  height: 2.25rem;

  & > svg {
    width: 2.1875rem;
    height: 2rem;
    position: relative;
    top: 0.44rem;
    left: 0.13rem;
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
`;

export const ProfileInfo = styled.p`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.grey[900]};
`;

export const ChattingTime = styled.p`
  ${({ theme }) => theme.typo.caption};
  color: ${({ theme }) => theme.color.grey[500]};
`;

export const SpaceBlock = styled.div`
  width: 0.5rem;
`;

export const BlueCircleIcon = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.skyBlue[400]};
`;
