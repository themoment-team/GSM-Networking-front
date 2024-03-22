const parseDateString = (
  dateString: string
): { monthDay: string; time: string } => {
  const date = new Date(dateString);

  const monthDayOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
  };
  const monthDay = date.toLocaleString('ko-KR', monthDayOptions);

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const time = date.toLocaleString('ko-KR', timeOptions);

  return { monthDay, time };
};

export default parseDateString;
