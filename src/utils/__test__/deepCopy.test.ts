import { deepCopy } from '@/utils';

const object = {
  a: 1,
  b: {
    c: [1, 2, 3],
    d: 2,
  },
};

describe('deepCopy', () => {
  test('깊은 복사 시, 값은 같아야 하지만 참조는 달라야 합니다.', () => {
    const copiedObject = deepCopy(object);

    expect(copiedObject).toEqual(object);
    expect(copiedObject).not.toBe(object);
    expect(copiedObject.b.c).toEqual(object.b.c); // 중첩된 객체의 값이 같은지 확인
    expect(copiedObject.b.c).not.toBe(object.b.c); // 중첩된 객체의 참조가 다른지 확인
  });

  test('jest의 toBe()는 두 값이 같은 메모리(참조)에 있는지를 확인한다.', () => {
    const copiedObject = object;

    expect(copiedObject).toBe(object);
  });
});
