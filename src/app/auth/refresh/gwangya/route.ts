import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { gwangyaUrl } from '@/libs';
import type { GetGwangyaTokenType } from '@/types';

const cookieDomain =
  process.env.NODE_ENV === 'development' ? 'localhost' : '.gsm-networking.com';

const setCookie = (name: string, value: string, expires: Date) => {
  cookies().set(name, value, {
    expires,
    domain: cookieDomain,
  });
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const redirectPath = searchParams.get('redirect') || '/community/gwangya';

  const cookieStore = cookies();

  const accessToken = cookieStore.get('accessToken')?.value;

  const res = await fetch(
    new URL(`/api/v1${gwangyaUrl.getGwangyaToken()}`, process.env.BASE_URL),
    {
      method: 'GET',
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    }
  );

  if (!res.ok) {
    return NextResponse.redirect(
      new URL(`/auth/refresh?redirect=/auth/refresh/gwangya`, request.url)
    );
  }

  const body: GetGwangyaTokenType = await res.json();

  const gwangyaToken = body.gwangyaToken;
  const expires = body.expiredTime;

  const expiresDate = new Date(`${expires}Z`);

  setCookie('gwangyaToken', gwangyaToken, expiresDate);

  return NextResponse.redirect(new URL(redirectPath, request.url));
}
