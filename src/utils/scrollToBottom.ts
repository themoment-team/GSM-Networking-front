const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};

export default scrollToBottom;
