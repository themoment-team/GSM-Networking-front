import { z } from 'zod';

import { COMMUNITY_CATEGORY_ARRAY } from '@/constants';

export const communityWriteFormSchema = z.object({
  category: z
    .enum(['글 카테고리', ...COMMUNITY_CATEGORY_ARRAY], {
      required_error: '카테고리를 선택해주세요.',
    })
    // https://zod.dev/?id=refine
    // Any truthy value will pass validation.
    // 함수의 결과가 true이면 validation 통과, false이면 validation 실패 (에러 발생)
    // 즉, value가 '글 카테고리' 시 에러 발생
    .refine((value) => value !== '글 카테고리', {
      message: '카테고리를 선택해주세요.',
    }),
  title: z
    .string({ required_error: '제목을 입력해주세요.' })
    .min(1, { message: '제목을 입력해주세요.' })
    .max(50, { message: '제목은 50자 이하로 입력해주세요.' }),
  content: z
    .string({ required_error: '내용을 입력해주세요.' })
    .min(1, { message: '내용을 입력해주세요.' })
    .max(1000, { message: '내용은 1000자 이하로 입력해주세요.' }),
});
