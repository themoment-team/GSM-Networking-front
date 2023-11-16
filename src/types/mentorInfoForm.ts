import type { mentorInfoFormSchema } from '@/schemas';

import type { z } from 'zod';

export type MentorInfoFormType = z.infer<typeof mentorInfoFormSchema>;
