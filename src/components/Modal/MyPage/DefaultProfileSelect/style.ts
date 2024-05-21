import styled from '@emotion/styled';

export const DescriptionWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  ${({ theme }) => theme.typo.caption};
  color: ${({ theme }) => theme.color.grey[400]};
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 13.25rem;
  margin-bottom: 2rem;
`;

export const OptionWrapper = styled.button<{ isSelected: boolean }>`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  overflow: hidden;
  border: 0.0625rem solid
    ${({ isSelected, theme: { color } }) =>
      isSelected ? color.skyBlue[400] : color.white};
  padding: 0.625rem 0 0 0.4375rem;

  svg {
    width: 3.25rem;
    height: 3.25rem;
  }
`;

export const Button = styled.button`
  ${({ theme }) => theme.typo.button};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.skyBlue[400]};
  border-radius: 0.625rem;
  padding: 0.5625rem 6.3125rem;
`;
