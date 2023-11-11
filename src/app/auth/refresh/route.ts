import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { authUrl } from '@/libs';
import { extractSubstring } from '@/utils';

const cookieDomain =
  process.env.NODE_ENV === 'development' ? 'localhost' : '.gsm-networking.com';

const setCookie = (name: string, value: string, maxAge: number) => {
  cookies().set(name, value, {
    maxAge,
    httpOnly: true,
    secure: true,
    domain: cookieDomain,
  });
};

export async function GET(request: Request) {
  const cookieStore = cookies();

  const refreshToken = cookieStore.get('refreshToken')?.value;

  try {
    const res = await fetch(
      new URL(`/api/v1${authUrl.patchRefresh()}`, process.env.BASE_URL),
      {
        method: 'PATCH',
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
      }
    );

    if (!res.ok) throw new Error('refreshToken이 만료되었습니다.');

    const resCookie = res.headers.get('set-cookie') || '';

    const newAccessToken = extractSubstring(resCookie, 'accessToken=', ';');
    const newRefreshToken = extractSubstring(resCookie, 'refreshToken=', ';');

    setCookie('accessToken', newAccessToken, 10800);
    setCookie('refreshToken', newRefreshToken, 2592000);

    return NextResponse.redirect(new URL('/', request.url));
  } catch (e) {
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }
}
