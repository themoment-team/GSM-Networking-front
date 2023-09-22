import styled from '@emotion/styled';

export const SelectButton = styled.button<{ isActive: boolean }>`
  display: flex;
  width: 18.25rem;
  height: 18.25rem;
  padding: 3.3125rem 3.65625rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ isActive }) => (isActive ? '#e4f2ff' : '#f5f6f8')};
  border-radius: 10px;
  flex-direction: column;
  gap: 1rem;

  path {
    fill: ${({ isActive }) => (isActive ? '#148eff' : '#A5A6A9')};
  }

  #this {
    fill: ${({ isActive }) => (isActive ? '#148eff' : '#A5A6A9')};
  }

  #other {
    fill: ${({ isActive }) => (isActive ? '#6ab7ff' : '#CBCCCE')};
  }

  &:hover {
    path {
      fill: ${({ isActive }) => (!isActive ? '#6ab7ff' : '#148eff')};
    }

    #this {
      fill: ${({ isActive }) => (!isActive ? '#6ab7ff' : '#148eff')};
    }

    #other {
      fill: ${({ isActive }) => (!isActive ? '#94ccff' : '#6ab7ff')};
    }
  }

  &:active {
    background-color: #e4f2ff;

    path {
      fill: ${({ isActive }) => (!isActive ? '#148eff' : '#148eff')};
    }

    #this {
      fill: ${({ isActive }) => (!isActive ? '#148eff' : '#148eff')};
    }

    #other {
      fill: ${({ isActive }) => (!isActive ? '#6ab7ff' : '#6ab7ff')};
    }
  }
`;

export const ButtonTitle = styled.div`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
`;

export const ButtonSubTitle = styled.span`
  color: #828387;
`;

export const ButtonContent = styled.p`
  color: #a5a6a9;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
