import { z } from 'zod';

export const menteeInfoFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: '2글자 이상 입력해주세요.' })
    .max(4, { message: '4글자 이하로 입력해주세요.' })
    .regex(/^[가-힣]+$/, { message: '한글로 입력해주세요.' }),
  phoneNumber: z
    .string({ required_error: '전화번호를 입력해주세요.' })
    .regex(/^[0-9]+$/, { message: '숫자만 입력해주세요. (특수문자 제외)' })
    .length(11, { message: '전화번호는 11글자로 입력해주세요.' }),
  email: z
    .string({ required_error: '이메일을 입력해주세요.' })
    .email({ message: '이메일 형식으로 입력해주세요.' }),
  generation: z
    .string({
      required_error: '기수를 선택해주세요.',
    })
    .regex(/^[0-9]+$/, { message: '기수를 선택해주세요.' }),
});
