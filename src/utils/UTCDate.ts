/**
 * 환경(e.g. 브라우저의 시간대)에 구애받지 않는 UTC Date 객체를 반환합니다.
 *
 * @param year - 년
 * @param month - 월 (0 ~ 11) - Date 객체의 표준 따름
 * @param date - 일 - default = 1
 * @returns Date 객체
 */
const UTCDate = (year: number, month: number, date: number = 1) =>
  new Date(Date.UTC(year, month, date));

export default UTCDate;
