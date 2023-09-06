import styled from 'styled-components';

export const Modal = styled.div`
  width: 100%;
  height: 16.3125rem;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 1px 9px 18px 0px rgba(0, 0, 0, 0.06);
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[100]};
  padding: 1.5rem;
  border-radius: 0.625rem;
  position: absolute;
  z-index: 5;
  top: 9.9rem;

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

export const GenerationWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
`;

export const GenerationButton = styled.button<{ selected: boolean }>`
  ${({ theme }) => theme.typo.body1}
  padding: 0.375rem 1rem;
  border-radius: 1.25rem;
  font-feature-settings: 'tnum';
  color: ${({ theme, selected }) =>
    selected ? theme.color.skyBlue[400] : theme.color.grey[600]};
  background: ${({ theme, selected }) =>
    selected ? theme.color.skyBlue[50] : theme.color.white};

  &:hover {
    background: ${({ theme }) => theme.color.grey[50]};
  }
`;

export const Bottom = styled.div`
  width: 92%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
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
