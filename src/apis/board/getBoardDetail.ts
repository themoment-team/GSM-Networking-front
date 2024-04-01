import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { boardUrl } from '@/libs';
import type { MenteeType } from '@/types';

const Path = {
  MENTEE_REGISTER_PATH: '/register/mentee',
  SIGN_PATH: '/auth/signin',
  AUTH_REFRESH_PATH: '/auth/refresh',
} as const;

/**
 * boardId에 따른 board 정보를 조회합니다.
 *
 * @returns board 정보를 반환합니다. board 정보가 없다면 redirectUrl로 redirect됩니다.
 */
export const getBoardDetail = async (
  redirectUrl: string,
  boardId: string
): Promise<MenteeType | null> => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) return redirect(`/auth/refresh?redirect=${redirectUrl}`);

  const response = await fetch(
    new URL(`/api/v1${boardUrl.getBoardDetail(boardId)}`, process.env.BASE_URL),
    {
      method: 'GET',
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    }
  );

  const boardDetail = await response.json();
  const isUnauthorized = response.status === 401;
  const isNotFound = response.status === 404;

  if (isUnauthorized) {
    return redirect(`${Path.AUTH_REFRESH_PATH}?redirect=${redirectUrl}`);
  }

  if (!response.ok) {
    return redirect(redirectUrl);
  }

  return boardDetail;
};
