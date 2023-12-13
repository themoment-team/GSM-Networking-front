import { useEffect, useState } from 'react';

export const useGetRem = () => {
  const [rem, setRem] = useState(16);

  const updateRem = (width: number) => {
    setRem(() => {
      if (width > 600) {
        return 16;
      } else if (width > 530) {
        return 15;
      } else if (width > 490) {
        return 14;
      } else if (width > 460) {
        return 13;
      } else if (width > 420) {
        return 12;
      } else if (width > 390) {
        return 11;
      } else if (width > 350) {
        return 10;
      } else if (width > 320) {
        return 9;
      } else {
        return 8;
      }
    });
  };

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => updateRem(window.innerWidth), 100);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return rem;
};
