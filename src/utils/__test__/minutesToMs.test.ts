import { minutesToMs } from '@/utils';

describe('minutesToMs', () => {
  test('1분은 60000ms 이다.', () => {
    expect(minutesToMs(1)).toBe(60000);
  });

  test('5분은 300000ms 이다.', () => {
    expect(minutesToMs(5)).toBe(300000);
  });
});
