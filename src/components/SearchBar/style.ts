import { theme } from '@/styles';
import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  font-size: 1rem;
  border-radius: 0.625rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[100]};

  &::placeholder {
    ${({ theme }) => theme.typo.body1}
    color: ${({ theme }) => theme.color.grey[400]}};
  }

  &:focus {
    outline: 1px solid #148eff;
  }
`;

export const SearchImg = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translate(-50%, -50%);
`;
