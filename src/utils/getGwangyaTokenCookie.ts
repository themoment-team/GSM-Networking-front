const getGwangyaTokenCookie = () => {
  const cookies = document.cookie;
  if (cookies.includes('gwangyaToken')) {
    const gwangyaToken = cookies.split('gwangyaToken=')[1].slice(0, 20);
    return gwangyaToken;
  }
};

export default getGwangyaTokenCookie;
