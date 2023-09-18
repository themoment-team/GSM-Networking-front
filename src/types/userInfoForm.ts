import type { userInfoFormSchema } from '@/schemas';

import type { z } from 'zod';

export type UserInfoFormType = z.infer<typeof userInfoFormSchema>;
