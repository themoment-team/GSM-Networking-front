const isExistCookie = (cookieKey: string) => {
  if (typeof document === 'undefined') return false;

  const cookie = document.cookie.split(`${cookieKey}=`)[1];

  if (cookie) {
    const slicedCookie = cookie.slice(0, cookie.indexOf(';'));

    const isExist = slicedCookie.length > 0;

    return isExist;
  }

  return false;
};

export default isExistCookie;
