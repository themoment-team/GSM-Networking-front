import styled from '@emotion/styled';

export const Modal = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0.0625rem 0.5625rem 1.125rem 0rem rgba(0, 0, 0, 0.06);
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[100]};
  padding: 1.5rem;
  border-radius: 0.625rem;
  position: absolute;
  z-index: 5;
  top: 12.4rem;

  @media (max-width: 600px) {
    width: calc(100% - 2rem);
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typo.h4}
`;

export const CloseButton = styled.button`
  svg {
    display: block;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2.5rem;
`;

export const SectionTitle = styled.p`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.grey[500]};
`;

export const GenerationWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const GenerationButton = styled.button<{ isSelected: boolean }>`
  ${({ theme }) => theme.typo.body1}
  padding: 0.375rem 1rem;
  border-radius: 1.25rem;
  font-feature-settings: 'tnum';
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.skyBlue[400] : theme.color.grey[600]};
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.color.skyBlue[50] : theme.color.white};

  &:hover {
    background: ${({ theme }) => theme.color.grey[50]};
  }
`;

export const PositionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PositionResetButton = styled.button`
  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.skyBlue[300]};
`;

export const PositionWrapper = styled(GenerationWrapper)`
  height: 2.375rem;
  margin-top: 1.5rem;
`;

export const PositionButton = styled(GenerationButton)`
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[100]};

  &:focus {
    border: 0.0625rem solid ${({ theme }) => theme.color.grey[100]};
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
`;

export const CheckButton = styled.button`
  ${({ theme }) => theme.typo.button}
  width: 61.5%;
  height: 2.75rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.skyBlue[400]};
  color: ${({ theme }) => theme.color.white};
`;

export const Result = styled.p<{ isSelected: boolean }>`
  ${({ theme }) => theme.typo.subtitle}
  width: 34%;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.black : theme.color.grey[600]};
`;
