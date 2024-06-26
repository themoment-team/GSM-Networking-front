import { usePathname } from 'next/navigation';

import { TEACHER_NOTICE_PAGE_PATH } from '@/constants';

const NoticeIcon = () => {
  const pathname = usePathname();

  const isTeacherPage = TEACHER_NOTICE_PAGE_PATH === pathname;

  return (
    <svg
      width='1.5625rem'
      height='1.5625rem'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.16699 13.5L8.99662 14L9.89316 20.4817C10.012 21.3412 9.47231 22.1547 8.63422 22.3793C7.81179 22.5997 6.95188 22.1853 6.61173 21.4048L3.16699 13.5Z'
        fill={`${isTeacherPage ? '#148EFF' : '#B4B5B7'}`}
      />
      <path
        d='M9.66699 6.5C9.66699 6.5 12.167 6.41176 14.667 5.29412C15.5737 4.88878 16.4803 4.40995 17.2677 3.96424C18.3119 3.37318 19.667 4.11204 19.667 5.31193V18.2854C19.667 19.5592 18.1322 20.3121 17.0693 19.6102C16.3765 19.1526 15.5667 18.6498 14.667 18.1471C11.667 16.4706 9.66699 16.5 9.66699 16.5V6.5Z'
        fill={`${isTeacherPage ? '#148EFF' : '#B4B5B7'}`}
      />
      <path
        d='M2.66699 11.5C2.66699 8.73858 4.90557 6.5 7.66699 6.5H9.66699V16.5H7.66699C4.90557 16.5 2.66699 14.2614 2.66699 11.5Z'
        fill={`${isTeacherPage ? '#94CCFF' : '#D8D9DA'}`}
      />
      <path
        d='M22.667 12C22.667 10.3431 21.3238 9 19.667 9V15C21.3238 15 22.667 13.6569 22.667 12Z'
        fill={`${isTeacherPage ? '#94CCFF' : '#D8D9DA'}`}
      />
    </svg>
  );
};

export default NoticeIcon;
