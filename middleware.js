import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip static assets, Vite assets, favicon, sitemap/robots, etc.
  if (
    pathname.includes('.') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/assets')
  ) {
    return NextResponse.next();
  }

  // If path already starts with /in or /ae, do nothing
  const hasInPrefix = pathname.startsWith('/in/') || pathname === '/in';
  const hasAePrefix = pathname.startsWith('/ae/') || pathname === '/ae';

  if (hasInPrefix || hasAePrefix) {
    return NextResponse.next();
  }

  // Read the country from Vercel's IP Country header
  const country = request.headers.get('x-vercel-ip-country') || 'AE';
  const locale = country.toUpperCase() === 'IN' ? 'in' : 'ae';

  // Construct redirected URL
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  
  return NextResponse.redirect(url);
}
