export function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Skip static assets, Vite assets, favicon, sitemap/robots, etc.
  if (
    pathname.includes('.') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/assets')
  ) {
    return; // Returning nothing lets Vercel continue to serve static files
  }

  // If path already starts with /in or /ae, do nothing
  const hasInPrefix = pathname.startsWith('/in/') || pathname === '/in';
  const hasAePrefix = pathname.startsWith('/ae/') || pathname === '/ae';

  if (hasInPrefix || hasAePrefix) {
    return; // Returning nothing lets Vercel continue to serve static files
  }

  // Read the country from Vercel's IP Country header
  const country = request.headers.get('x-vercel-ip-country') || 'AE';
  const locale = country.toUpperCase() === 'IN' ? 'in' : 'ae';

  // Construct redirected URL
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  
  // Return a standard 307 redirect using standard Web API Response
  return new Response(null, {
    status: 307,
    headers: {
      'Location': url.toString()
    }
  });
}

export default middleware;
