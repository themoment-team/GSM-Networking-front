import { isNumeric } from '@/utils';

describe('isNumeric', () => {
  test('문자열은 false를 반환합니다.', () => {
    const testCase = '안녕하세요.';
    const result = false;

    expect(isNumeric(testCase)).toBe(result);
  });

  test('숫자는 true를 반환합니다.', () => {
    const testCase = 123;
    const result = true;

    expect(isNumeric(testCase)).toBe(result);
  });
});
