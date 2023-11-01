import { minutesToSeconds } from '@/utils';

describe('minutesToSeconds', () => {
  test('분을 초로 변환합니다.', () => {
    const testCase = 10;
    const result = 600;

    expect(minutesToSeconds(testCase)).toBe(result);
  });
});
