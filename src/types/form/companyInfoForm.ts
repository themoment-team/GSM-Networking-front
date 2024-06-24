import type { mentorInfoFormSchema } from '@/schemas';

import type { z } from 'zod';

export type CompanyInfoFormType = z.infer<typeof mentorInfoFormSchema>;
