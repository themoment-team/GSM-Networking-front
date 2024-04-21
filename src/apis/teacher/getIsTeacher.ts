import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { userUrl } from '@/libs';

export const getIsTeacher = async (
  redirectUrl: string
): Promise<boolean | null> => {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) return redirect(`/auth/refresh?redirect=${redirectUrl}`);

  const response = await fetch(
    new URL(`/api/v1${userUrl.isTeacher()}`, process.env.BASE_URL),
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
  const isTeacher = await response.json();

  return isTeacher;
};
