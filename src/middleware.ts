import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/inspection')) {
    return NextResponse.redirect(new URL('/inspection', request.url));
  }
}
