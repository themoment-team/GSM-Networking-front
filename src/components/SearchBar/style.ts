import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  font-size: 1rem;
  border-radius: 10px;

  &:focus {
    outline: 1px solid #148eff;
  }
`;
