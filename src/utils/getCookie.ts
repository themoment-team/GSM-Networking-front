const getCookie = (cookieKey: string) => {
  if (typeof document === 'undefined') return '';

  const cookies = document.cookie;

  const applicableCookie =
    cookies.split(`${cookieKey}=`)[1]?.slice(0, 20) ?? '';

  return applicableCookie;
};

export default getCookie;
