import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import type { AuthType } from '@/types';

export async function GET(request: NextRequest) {
  const cookieStore = cookies();

  const code = request.nextUrl.searchParams.get('code');

  try {
    const response = await fetch(
      new URL(`/api/auth/signin/google?code=${code}`, process.env.API_BASE_URL),
      {
        method: 'POST',
      }
    );

    const data: AuthType = await response.json();

    const accessTokenExp = new Date(data.accessTokenExp);

    cookieStore.set('accessToken', data.accessToken, {
      httpOnly: true,
      expires: accessTokenExp.setHours(accessTokenExp.getHours() + 12),
    });

    cookieStore.set('refreshToken', data.refreshToken, {
      httpOnly: true,
      expires: new Date(data.refreshTokenExp),
    });

    return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }
}
