import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.hostname === 'gsm.moip.shop') {
    return NextResponse.rewrite(new URL('/', 'https://gsm-networking.com'));
  }
}
