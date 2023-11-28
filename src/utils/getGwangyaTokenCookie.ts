const getGwangyaTokenCookie = () => {
  if (typeof document === 'undefined') return '';

  const cookies = document.cookie;

  if (cookies.split('gwangyaToken=')[1]) {
    const gwangyaToken = cookies.split('gwangyaToken=')[1].slice(0, 20);
    return gwangyaToken;
  }
};

export default getGwangyaTokenCookie;
