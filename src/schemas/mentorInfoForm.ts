import { z } from 'zod';

export const mentorInfoFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: '2글자 이상 입력해주세요.' })
    .max(4, { message: '4글자 이하로 입력해주세요.' }),
  phoneNumber: z
    .string()
    .length(11, { message: '전화번호는 11글자로 입력해주세요.' }),
  email: z
    .string()
    .email({ message: '이메일 형식으로 입력해주세요.' })
    .nullable(),
  generation: z
    .string({
      required_error: '기수를 입력해주세요.',
      // invalid_type_error: '기수를 입력해주세요.',
    })
    .max(1, { message: '1글자 이하로 입력해주세요.' })
    .regex(/^[1-5]+$/, { message: '1~5까지 입력 가능하십니다.' }),
  snsUrl: z.string().url({ message: 'URL 형식으로 입력해주세요.' }).nullable(),
});
