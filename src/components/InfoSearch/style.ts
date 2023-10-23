import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100vh;
  position: relative;
  padding-top: 5rem;

  @media (max-width: 600px) {
    padding: 5rem 1rem 0 1rem;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.h3};
`;

export const SkipButton = styled.button`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.skyBlue[400]};
`;

export const SearchContainer = styled.div`
  margin-top: 2.5rem;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.grey[100]};
  ${({ theme }) => theme.typo.body1};
  border-radius: 0.625rem;
  display: flex;
  padding: 0.75rem 1rem;
  justify-content: space-between;
  align-items: center;
  background: #fff;

  &::placeholder {
    color: ${({ theme }) => theme.color.grey[400]};
  }
`;

export const SearchImg = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.color.grey[200]};
  color: ${({ theme }) => theme.color.grey[500]};
  ${({ theme }) => theme.typo.button};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 3rem;
  border-radius: 0.625rem;
  width: 27.5rem;
  height: 2.75rem;
`;
