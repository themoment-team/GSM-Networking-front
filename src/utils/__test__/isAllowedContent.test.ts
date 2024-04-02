import { isAllowedContent } from '@/utils';

describe('isAllowedContent', () => {
  test('공백만 존재한다면 false를 반환합니다.', () => {
    const testCase = '      ';
    const result = false;

    expect(isAllowedContent(testCase)).toBe(result);
  });

  test('줄바꿈만 존재한다면 false를 반환합니다.', () => {
    const testCase = '\n\n';
    const result = false;

    expect(isAllowedContent(testCase)).toBe(result);
  });

  test('올바른 콘텐트는 true를 반환합니다.', () => {
    const testCase = '안녕하세요!';
    const result = true;

    expect(isAllowedContent(testCase)).toBe(result);
  });
});
