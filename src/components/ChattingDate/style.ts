import styled from '@emotion/styled';

export const DateText = styled.p`
    ${({ theme }) => theme.typo.caption};
    color: ${({ theme }) => theme.color.grey[500]};
`;