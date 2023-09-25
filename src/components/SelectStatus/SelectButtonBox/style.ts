import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export const SelectButton = styled.button<{ isActive: boolean }>`
  display: flex;
  width: 18.25rem;
  height: 18.25rem;
  padding: 3.3125rem 3.65625rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.color.skyBlue[50] : theme.color.grey[50]};
  border-radius: 10px;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 18.25rem;
  }

  path {
    fill: ${({ isActive, theme }) =>
      isActive ? theme.color.skyBlue[400] : theme.color.grey[400]};
  }

  #this {
    fill: ${({ isActive, theme }) =>
      isActive ? theme.color.skyBlue[400] : theme.color.grey[400]};
  }

  #other {
    fill: ${({ isActive, theme }) =>
      isActive ? theme.color.skyBlue[200] : theme.color.grey[200]};
  }

  &:hover {
    path {
      fill: ${({ isActive, theme }) =>
        !isActive ? theme.color.skyBlue[200] : theme.color.skyBlue[400]};
    }

    #this {
      fill: ${({ isActive, theme }) =>
        !isActive ? theme.color.skyBlue[200] : theme.color.skyBlue[400]};
    }

    #other {
      fill: ${({ isActive, theme }) =>
        !isActive ? theme.color.skyBlue[100] : theme.color.skyBlue[200]};
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.color.skyBlue[50]};

    path {
      fill: ${({ isActive, theme }) =>
        !isActive ? theme.color.skyBlue[400] : theme.color.skyBlue[400]};
    }

    #this {
      fill: ${({ isActive, theme }) =>
        !isActive ? theme.color.skyBlue[400] : theme.color.skyBlue[400]};
    }

    #other {
      fill: ${({ isActive, theme }) =>
        !isActive ? theme.color.skyBlue[200] : theme.color.skyBlue[200]};
    }
  }
`;

export const ButtonTitle = styled.div`
  ${({ theme }) => theme.typo.subtitle};
`;

export const ButtonContent = styled.p`
  color: ${({ theme }) => theme.color.grey[400]};
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.typo.subtitle.fontWeight};
  line-height: ${({ theme }) => theme.typo.subtitle.lineHeight};
`;
