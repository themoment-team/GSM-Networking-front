import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconBox = styled.div`
  margin: 0.25rem 0.4375rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  left: 1.69rem;
`;

export const OpponentInfo = styled.div`
  ${({ theme }) => theme.typo.subtitle};
  color: ${({ theme }) => theme.color.grey[500]};
`;
