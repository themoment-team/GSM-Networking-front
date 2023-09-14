import styled from '@emotion/styled';

export const SearchBarContainer = styled.div`
  position: relative;
  flex: 1;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  font-size: 1rem;
  border-radius: 0.625rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[100]};

  @media (max-width: 600px) {
    font-size: 16px;
  }

  &::placeholder {
    ${({ theme }) => theme.typo.body1};
    color: ${({ theme }) => theme.color.grey[400]}};
  }

  &:focus {
    outline: 0.0625rem solid ${({ theme }) => theme.color.skyBlue[400]};
  }
`;

export const SearchImg = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translate(-50%, -50%);
`;
