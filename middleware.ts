import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'it'];
const DEFAULT_LOCALE = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/locales') ||
    /\.(.*)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const acceptLang = request.headers.get('accept-language') ?? '';
    const preferred = acceptLang.split(',')[0].split('-')[0].toLowerCase();
    const locale = SUPPORTED_LOCALES.includes(preferred) ? preferred : DEFAULT_LOCALE;

    return NextResponse.redirect(
      new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};