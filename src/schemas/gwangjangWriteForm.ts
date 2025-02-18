import { z } from 'zod';

export const gwangjangWriteForm = z.object({
  title: z
    .string({ required_error: '제목을 입력해주세요.' })
    .min(1, { message: '제목을 입력해주세요.' })
    .max(50, { message: '제목은 50자 이하로 입력해주세요.' }),
  content: z
    .string({ required_error: '내용을 입력해주세요.' })
    .min(1, { message: '내용을 입력해주세요.' })
    .max(1000, { message: '내용은 1000자 이하로 입력해주세요.' }),
  memberCount: z.string().optional(),
  category: z.string(),
});
