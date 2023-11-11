import type { tempMentorSearchFormSchema } from '@/schemas';

import type { z } from 'zod';

export type TempMentorSearchFormType = z.infer<
  typeof tempMentorSearchFormSchema
>;
