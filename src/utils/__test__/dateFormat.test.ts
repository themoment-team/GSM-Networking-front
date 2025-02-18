import { parseDateString } from '@/utils';

describe('parseDateString', () => {
  test('주어진 날짜 문자열을 올바르게 파싱합니다.', () => {
    const dateString = '2005-02-12T09:00:00.000Z';
    const parsedDate = parseDateString(dateString);

    expect(parsedDate.monthDay).toBe('2월 12일');
    expect(parsedDate.time).toBe('오후 6:00');
  });

  test('주어진 다른 날짜 문자열을 올바르게 파싱합니다.', () => {
    const dateString = '2024-03-21T15:30:00.000Z';
    const parsedDate = parseDateString(dateString);

    expect(parsedDate.monthDay).toBe('3월 22일');
    expect(parsedDate.time).toBe('오전 12:30');
  });
});
