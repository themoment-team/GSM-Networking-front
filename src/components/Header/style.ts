import styled from 'styled-components';

export const Header = styled.header`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.grey[100]};
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

export const PageName = styled.p`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.black};
`;

export const LogoImg = styled.div`
  cursor: pointer;
`;
