import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (request.nextUrl.hostname === 'gsm.moip.shop') {
    return NextResponse.redirect(
      new URL(pathname, 'https://www.gsm-networking.com')
    );
  }
}
