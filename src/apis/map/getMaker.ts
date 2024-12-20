import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { mentorUrl } from '@/libs';
import type { MarkerType } from '@/types';

export const getMarkerList = async (): Promise<MarkerType[]> => {
  const accessToken = (await cookies()).get('accessToken')?.value;

  if (!accessToken) return redirect(`/auth/refresh`);

  const response = await fetch(
    new URL(`/api/v1${mentorUrl.getMarker()}`, process.env.BASE_URL),
    {
      method: 'GET',
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    }
  );

  if (response.status === 401) {
    return redirect('/auth/refresh');
  }

  if (!response.ok) {
    return redirect('/auth/signin');
  }
  const markerList: MarkerType[] = await response.json();

  return markerList;
};
