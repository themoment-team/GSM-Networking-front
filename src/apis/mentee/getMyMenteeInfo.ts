import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { menteeUrl } from '@/libs';
import type { MenteeType } from '@/types';

const Path = {
  MENTEE_REGISTER_URL: '/register/mentee',
  SIGN_URL: '/auth/signin',
  AUTH_REFRESH_URL: '/auth/refresh',
} as const;

/**
 * 자신의 멘티 정보를 반환합니다.
 *
 * @returns 멘티 정보 반환 시 멘티, 멘티 정보가 없다면 register/mentee로 이동됩니다.
 */
export const getMyMenteeInfo = async (
  redirectUrl: string
): Promise<MenteeType | null> => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) return redirect(`/auth/refresh?redirect=${redirectUrl}`);

  const response = await fetch(
    new URL(`/api/v1${menteeUrl.getMyMenteeInfo()}`, process.env.BASE_URL),
    {
      method: 'GET',
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    }
  );

  const currentPath = headers().get('next-url');

  if (response.status === 404 && Path.MENTEE_REGISTER_URL !== currentPath) {
    return redirect(Path.MENTEE_REGISTER_URL);
  }

  if (response.status === 401) {
    return redirect(`${Path.AUTH_REFRESH_URL}?redirect=${redirectUrl}`);
  }

  // 403의 경우 멘토일 수 있습니다.
  if (!response.ok && response.status !== 403) {
    return redirect(Path.SIGN_URL);
  }

  const menteeInfo = await response.json();

  return menteeInfo;
};
