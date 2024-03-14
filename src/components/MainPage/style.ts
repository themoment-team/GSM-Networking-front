import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 6.87rem;
  position: relative;

  @media (max-width: 600px) {
    padding: 7.5rem 1rem 0 1rem;
  }
`;

export const ChatListShiftButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 5rem;
  right: 1.25rem;
  border-radius: 1.25rem;
`;
