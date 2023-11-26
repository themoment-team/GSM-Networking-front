import styled from '@emotion/styled';

export const Container = styled.div<{ isMine: boolean }>`
  ${({ theme }) => theme.typo.body1};
  padding: 0.5rem 1.25rem;
  display: inline-block;
  ${({ theme, isMine }) =>
    isMine
      ? `
          border-radius: 1.25rem 1.25rem 0rem 1.25rem;
          color: ${theme.color.white};
          background-color: ${theme.color.skyBlue[400]};
        `
      : `
          border-radius: 0rem 1.25rem 1.25rem 1.25rem;
          color: ${theme.color.grey[800]};
          background-color: ${theme.color.grey[100]};
        `};
`;

export const Content = styled.p``;
