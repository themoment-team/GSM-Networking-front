import { z } from 'zod';

export const userInfoFormSchema = z.object({
  name: z.string(),
  phone: z
    .string()
    .length(11, { message: '전화번호는 11글자로 입력해주세요.' }),
  SNS: z.string(),
  generation: z
    .number()
    .min(1, { message: '1기 부터 입력 가능합니다.' })
    .max(5, { message: '5기 까지 입력 가능합니다.' }),
});
