import { authUrl, get } from '@/libs';
import type { TokenType } from '@/types';

const getAccessToken = async () => {
  const { accessToken } = await get<TokenType>(authUrl.getMyToken());
  return accessToken;
};

export default getAccessToken;
