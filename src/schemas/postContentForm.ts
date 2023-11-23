import { z } from 'zod';

export const postContentFormSchema = z.object({
  name: z.string().min(1, { message: '1글자 이상 입력해주세요.' }),
});
