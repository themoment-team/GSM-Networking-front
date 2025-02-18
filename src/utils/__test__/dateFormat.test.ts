import { parseDateString } from '@/utils';

describe('parseDateString', () => {
  test('주어진 날짜 문자열을 올바르게 파싱합니다.', () => {
    const date = new Date(Date.UTC(2005, 1, 12, 9)).toISOString();
    const parsedDate = parseDateString(date);

    const expected = { monthDay: '2월 12일', time: '오후 6:00' };
    expect(parsedDate).toEqual(expected);
  });

  test('주어진 다른 날짜 문자열을 올바르게 파싱합니다.', () => {
    const date = new Date(Date.UTC(2024, 2, 21, 15, 30)).toISOString();
    const parsedDate = parseDateString(date);

    const expected = { monthDay: '3월 22일', time: '오전 12:30' };
    expect(parsedDate).toEqual(expected);
  });
});
