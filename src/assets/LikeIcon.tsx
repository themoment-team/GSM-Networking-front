/** @jsxImportSource @emotion/react */

'use client';

const LikeIcon = ({ isClicked }: { isClicked: boolean }) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7 11.2319V11.2318V11.0001V10.9999H6.5C6.5 10.9999 6.68627 10.7842 7 10.4215V10.0001H7.36461L7.36479 9.99991C9.19456 7.8857 13.3374 3.10822 13.9077 2.53242C14.643 1.79013 15.4712 1.73065 16.4819 2.9563C17.4926 4.18195 16.7131 6.15266 16.7131 6.15266L15.4926 9.963L20.5 9.96298C20.633 9.96298 20.8014 9.96299 20.9863 10.0001H21C21 10.0001 23 10.0001 23 12.5001C23 14.5088 21.7089 19.4224 21.2014 21.2762C21.0835 21.7069 20.6922 22.0001 20.2457 22.0001H8H7V21.8V21.0001V11.2319Z'
      fill={isClicked ? '#94CCFF' : '#EFF0F2'}
    />
    <path
      d='M1 11C1 10.4477 1.44772 10 2 10H7V22H2C1.44772 22 1 21.5523 1 21V11Z'
      fill={isClicked ? '#148EFF' : '#B4B5B7'}
    />
  </svg>
);

export default LikeIcon;
