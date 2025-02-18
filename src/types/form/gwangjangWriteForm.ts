import type { gwangjangWriteForm } from '@/schemas';

import type { z } from 'zod';

export type GwangjangWriteFormType = z.infer<typeof gwangjangWriteForm>;
