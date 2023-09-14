import styled from '@emotion/styled';

export const Header = styled.header`
  width: 100vw;
  height: 5rem;
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
  justify-content: space-between;
  align-items: center;

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

export const IconContainer = styled.button`
  & > svg {
    display: block;
  }
`;

export const PageName = styled.p`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.black};
`;

export const LogoButton = styled.button`
  cursor: pointer;
`;
