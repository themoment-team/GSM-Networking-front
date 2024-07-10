const locateToMessage = (phoneNumber: string) => {
  const smsUrl = `sms:${phoneNumber}`;
  window.location.href = smsUrl;
};

export default locateToMessage;
