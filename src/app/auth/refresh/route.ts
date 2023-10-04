import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import type { AuthType } from '@/types';

export async function GET(request: NextRequest) {
  const cookieStore = cookies();

  const refreshToken = cookieStore.get('refreshToken')?.value;

  try {
    const response = await fetch(
      new URL('/api/auth/reissue', process.env.API_BASE_URL),
      {
        method: 'PATCH',
        headers: {
          refreshToken: `Bearer ${refreshToken ?? ''}`,
        },
      }
    );

    const data: AuthType = await response.json();

    if (!response.ok) {
      throw new Error('Failed to get refresh token');
    }

    cookieStore.set('accessToken', data.accessToken, {
      httpOnly: true,
      expires: new Date(data.accessTokenExp),
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
