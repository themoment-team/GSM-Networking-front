import styled from '@emotion/styled';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Title = styled.h4`
  ${({ theme }) => theme.typo.h4};
  color: ${({ theme }) => theme.color.black};
`;

export const Description = styled.pre`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.black};
  white-space: break-spaces;
`;

export const CategoryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1.25rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[100]};
  background: ${({ theme }) => theme.color.white};

  width: fit-content;
  padding: 0.375rem 1rem;
  margin-top: 0.75rem;
`;

export const CategoryText = styled.span`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.grey[500]};
`;
