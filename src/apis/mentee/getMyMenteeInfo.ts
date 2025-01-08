import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { menteeUrl } from '@/libs';
import type { MenteeType } from '@/types';

const Path = {
  MENTEE_REGISTER_PATH: '/register/mentee',
  SIGN_PATH: '/auth/signin',
  AUTH_REFRESH_PATH: '/auth/refresh',
} as const;

/**
 * 자신의 멘티 정보를 반환합니다.
 *
 * @returns 멘티 정보 반환 시 멘티, 멘티 정보가 없다면 register/mentee로 이동됩니다.
 */
export const getMyMenteeInfo = async (
  redirectUrl: string,
  blockUrl?: string
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

  const menteeInfo = await response.json();
  const isMenteeRegisterPath = Path.MENTEE_REGISTER_PATH !== blockUrl;
  const isUnauthorized = response.status === 401;
  const isForbidden = response.status === 403;
  const isNotFound = response.status === 404;

  if (isNotFound) {
    if (isMenteeRegisterPath) return redirect(Path.MENTEE_REGISTER_PATH);
    else return menteeInfo;
  }

  if (isUnauthorized) {
    return redirect(`${Path.AUTH_REFRESH_PATH}?redirect=${redirectUrl}`);
  }

  // 403의 경우 멘토일 수 있습니다.
  if (!response.ok && !isForbidden) {
    return redirect(Path.SIGN_PATH);
  }

  return menteeInfo;
};
