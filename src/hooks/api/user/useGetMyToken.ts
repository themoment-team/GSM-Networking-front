import { useQuery } from '@tanstack/react-query';

import { get, userQueryKeys, userUrl } from '@/libs';
import type { TokenType } from '@/types';

export const useGetMyToken = () =>
  useQuery({
    queryKey: userQueryKeys.getMyToken(),
    queryFn: () => get<TokenType>(userUrl.getMyToken()),
  });
