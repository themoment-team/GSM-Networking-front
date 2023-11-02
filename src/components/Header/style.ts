import styled from '@emotion/styled';

export const Header = styled.header`
  width: 100%;
  height: 4.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.grey[100]};
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
`;

export const Inner = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const Logo = styled.button`
  display: flex;
  align-items: center;
  color: #000;
  font-size: 1.3125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  column-gap: 0.38rem;
`;

export const RedirectButton = styled.button`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.grey[400]};
  border: none;
`;

export const RedirectBox = styled.div`
  /* padding: 0 3rem 0 10.33rem; */
  display: flex;
  column-gap: 1.5rem;
`;

export const GapBox = styled.div`
  width: 4rem;
`;

export const ProfileBox = styled.div``;
