import type { postContentFormSchema } from '@/schemas';

import type { z } from 'zod';

export type PostContentFormType = z.infer<typeof postContentFormSchema>;
