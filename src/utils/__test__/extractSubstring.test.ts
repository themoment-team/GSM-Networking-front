import { extractSubstring } from '@/utils';

describe('extractSubstring', () => {
  test('문자열의 특정 부분을 추출한다.', () => {
    const testString = 'test=hello,world; test2=hello,world2;';
    const start = 'test=';
    const end = ';';
    const expectString = 'hello,world';

    expect(extractSubstring(testString, start, end)).toBe(expectString);
  });

  test('문자열의 특정 부분을 추출한다.', () => {
    const testString = 'test=hello,world; test2=hello,world2;';
    const start = 'test2=';
    const end = ';';
    const expectString = 'hello,world2';

    expect(extractSubstring(testString, start, end)).toBe(expectString);
  });
});
