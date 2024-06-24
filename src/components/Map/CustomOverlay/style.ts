import styled from '@emotion/styled';

export const CustomOverlay = styled.div`
  ${({ theme }) => theme.typo.body2};
  position: absolute;
  bottom: 3.75rem;
  right: -6.1875rem;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.75rem;
  width: 12.125rem;
  height: 6.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: 6.0625rem;
  border-top: 1.25rem solid ${({ theme }) => theme.color.white};
  border-left: 0.625rem solid transparent;
  border-right: 0.625rem solid transparent;
  margin: 0 auto;
`;

export const Topbox = styled.div`
  width: 10.125rem;
  height: 1.3125rem;
  display: flex;
  justify-content: space-between;
`;

export const LocationBtn = styled.div``;
export const Name = styled.div``;
export const Company = styled.div``;
export const Positon = styled.div``;
export const Icons = styled.div``;
export const Location = styled.div``;

export const Middlebox = styled.div`
  width: 10.125rem;
  height: 1.3125rem;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.grey[400]};
`;

export const Bottombox = styled.div`
  width: 10.125rem;
  height: 1.3125rem;
  display: flex;
  justify-content: end;

  color: ${({ theme }) => theme.color.skyBlue[400]};
`;
