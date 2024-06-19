import styled from '@emotion/styled';

export const CustomOverlay = styled.div`
  ${({ theme }) => theme.typo.body2};
  position: absolute;
  bottom: 60px;
  right: -99px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 12px;
  width: 194px;
  height: 98px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: 97px;
  border-top: 20px solid ${({ theme }) => theme.color.white};
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  margin: 0 auto;
`;

export const Topbox = styled.div`
  width: 162px;
  height: 21px;
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
  width: 162px;
  height: 21px;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.grey[400]};
`;
export const Bottombox = styled.div`
  width: 162px;
  height: 21px;
  display: flex;
  justify-content: end;

  color: ${({ theme }) => theme.color.skyBlue[400]};
`;
