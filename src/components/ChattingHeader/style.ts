import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconBox = styled.div`
  margin: 0.25rem 0.4375rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const OpponentInfo = styled.div``;

export const Generation = styled.span`
  ${({ theme }) => theme.typo.subtitle};
  color: ${({ theme }) => theme.color.grey[500]};
`;

export const Name = styled(Generation)``;

export const SpaceBox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;
