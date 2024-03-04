import { z } from 'zod';

import { menteeInfoFormSchema } from '@/schemas';

export const mentorInfoFormSchema = menteeInfoFormSchema.extend({
  snsUrl: z
    .string()
    .url({ message: 'URL 형식으로 입력해주세요.' })
    .optional()
    .or(z.literal('')),
});
