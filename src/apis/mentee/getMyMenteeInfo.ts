import { cookies } from 'next/headers';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { menteeUrl } from '@/libs';
import type { MenteeType } from '@/types';

const MENTEE_REGISTER_URL = '/register/mentee' as const;

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

  if (response.status === 404 && MENTEE_REGISTER_URL === currentPath) {
    return redirect('/register/mentee');
  }

  if (response.status === 401) {
    return redirect(`/auth/refresh?redirect=${redirectUrl}`);
  }

  // 403의 경우 멘토일 수 있습니다.
  if (!response.ok && response.status !== 403) {
    return redirect('/auth/signin');
  }

  const menteeInfo = await response.json();

  return menteeInfo;
};
