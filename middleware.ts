import { NextResponse, userAgent } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const ua = request.headers.get('user-agent') || '';
    const isMobile = /Android|iPhone|iPad|iPod/i.test(ua);
  const { pathName } = request.nextUrl;



  // Check if the device is a mobile
  if (isMobile && !pathName.startsWith('/mobile-not-supported')) {
    // Redirect to the custom mobile-not-supported page
    const mobileRedirectUrl = new URL('/mobile-not-supported', request.url);
    return NextResponse.redirect(mobileRedirectUrl);
  }

  // Allow the request to proceed for non-mobile devices
  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
