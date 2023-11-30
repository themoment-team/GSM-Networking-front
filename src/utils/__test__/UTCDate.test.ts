import { UTCDate } from '@/utils';

describe('UTCDate', () => {
  test('다른 환경에 구애 받지 않는 UTC Date 객체를 반환합니다.', () => {
    const YEAR = 2023;
    const MONTH = 3;
    const expectUTCDate = new Date(Date.UTC(YEAR, MONTH));

    expect(UTCDate(YEAR, MONTH)).toEqual(expectUTCDate);
  });

  test('단순 생성 Date 객체는 환경에 영향을 받습니다.', () => {
    const YEAR = 2023;
    const MONTH = 3;
    const expectNormalDate = new Date(YEAR, MONTH);

    expect(UTCDate(YEAR, MONTH)).not.toEqual(expectNormalDate);
  });
});
