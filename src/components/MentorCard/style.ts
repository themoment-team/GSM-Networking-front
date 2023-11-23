import styled from '@emotion/styled';

export const WorkerCardContainer = styled.div`
  max-width: 11.75rem;
`;

export const WorkerInfoHead = styled.div`
  ${({ theme }) => theme.typo.body1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const WorkerNameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const WorkerName = styled.p``;
export const WorkerGeneration = styled.p``;

export const WorkerPosition = styled.p`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

export const WorkerInfoBody = styled.div`
  ${({ theme }) => theme.typo.body2};
  display: flex;
  width: 100%;
  margin-top: 1.38rem;
  flex-direction: column;
  gap: 0.75rem;
  font-style: normal;
  color: #a5a6a9;
  overflow: hidden;
`;

export const ButtonBox = styled.div`
  height: 1.25rem;
  gap: 0.75rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MailTo = styled.a`
  &:hover {
    .first {
      fill: ${({ theme }) => theme.color.skyBlue[400]};
    }
    .second {
      fill: ${({ theme }) => theme.color.skyBlue[100]};
    }
  }
  & > svg {
    display: block;
  }
`;

export const SNSLink = styled.a`
  &:hover {
    .first {
      fill: ${({ theme }) => theme.color.skyBlue[400]};
    }
    .second {
      fill: ${({ theme }) => theme.color.skyBlue[100]};
    }
  }

  & > svg {
    display: block;
  }
`;

export const CompanyLink = styled.a<{ isCompanyURLExist: boolean }>`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;

  cursor: ${({ isCompanyURLExist }) =>
    isCompanyURLExist ? 'pointer' : 'default'};
`;

export const WorkerImgBox = styled.div<{ imageUrl: string | null }>`
  background-color: ${({ theme }) => theme.color.grey[50]};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  height: 10rem;
  position: relative;
  overflow: hidden;
  border: 0.0625rem solid ${({ theme }) => theme.color.grey[50]};
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-size: cover;

  & > img {
    object-fit: contain;
    backdrop-filter: blur(15px);
  }
`;

export const BlueCheckIconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;

  :hover {
    .tool-tip {
      display: block;
    }
  }
`;

export const ToolTipWrapper = styled.div`
  position: absolute;
  padding-top: 0.375rem;
  top: 0.8125rem;
  left: -1.3125rem;
  display: none;
`;
