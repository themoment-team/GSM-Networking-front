import { z } from 'zod';

export const tempMentorSearchFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: '2글자 이상 입력해주세요.' })
    .max(4, { message: '4글자 이하로 입력해주세요.' })
    .regex(/^[가-힣]+$/, { message: '한글로 입력해주세요.' }),
});
