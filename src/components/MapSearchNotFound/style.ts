import styled from '@emotion/styled';

export const SearchNotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
  width: fit-content;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchNotFoundText = styled.p`
  color: ${({ theme }) => theme.color.grey[500]};
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 150%;
`;
