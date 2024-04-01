import type { communityWriteFormSchema } from '@/schemas';

import type { z } from 'zod';

export type CommunityWriteFormType = z.infer<typeof communityWriteFormSchema>;
