/** @jsxImportSource @emotion/react */

'use client';

const MarkerIcon = ({ isClicked }: { isClicked?: boolean }) => (
  <svg
    width='1.5rem'
    height='1.5rem'
    viewBox='0 0 1.5rem 1.5rem'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M12 24C15 24 21 13.9706 21 9C21 4.02944 16.9706 0 12 0C7.02944 0 3 4.02944 3 9C3 13.9706 9 24 12 24ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z'
      fill={isClicked ? '#148EFF' : '#CBCCCE'}
    />
  </svg>
);

export default MarkerIcon;
