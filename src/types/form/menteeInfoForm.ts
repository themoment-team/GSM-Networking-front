import type { menteeInfoFormSchema } from '@/schemas';

import type { z } from 'zod';

export type MenteeInfoFormType = z.infer<typeof menteeInfoFormSchema>;
