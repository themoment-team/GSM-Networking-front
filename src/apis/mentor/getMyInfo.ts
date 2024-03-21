import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { mentorUrl } from '@/libs';
import type { MentorInfoType } from '@/types';

/**
 * 자신의 멘토 정보를 반환합니다.
 *
 * @returns 멘토 정보 반환 시 멘토, null 반환 시 멘티입니다.
 */
export const getMyInfo = async (
  redirectUrl: string
): Promise<MentorInfoType | null> => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) return redirect(`/auth/refresh?redirect=${redirectUrl}`);

  const response = await fetch(
    new URL(`/api/v1${mentorUrl.getMentorInfo()}`, process.env.BASE_URL),
    {
      method: 'GET',
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    }
  );

  if (response.status === 403) {
    return null;
  }

  if (response.status === 401) {
    return redirect(`/auth/refresh?redirect=${redirectUrl}`);
  }

  if (!response.ok) {
    return redirect('/auth/signin');
  }

  const mentorInfo = await response.json();

  return mentorInfo;
};
