import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { authUrl } from '@/libs';
import { extractSubstring } from '@/utils';

const cookieDomain =
  process.env.NODE_ENV === 'development' ? 'localhost' : '.gsm-networking.com';

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

    cookieStore.set('accessToken', newAccessToken, {
      maxAge: 10800,
      httpOnly: true,
      secure: true,
      domain: cookieDomain,
    });

    cookieStore.set('refreshToken', newRefreshToken, {
      maxAge: 2592000,
      httpOnly: true,
      secure: true,
      domain: cookieDomain,
    });

    return NextResponse.redirect(new URL('/', request.url));
  } catch (e) {
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }
}
