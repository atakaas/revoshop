import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Protected routes that require authentication
  const protectedRoutes = ['/checkout', '/admin'];
  
  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    // Get the token from cookies
    const token = request.cookies.get('auth-storage')?.value;
    
    if (!token) {
      // Redirect to login with return URL
      const returnUrl = encodeURIComponent(pathname);
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('returnUrl', pathname);
      
      return NextResponse.redirect(loginUrl);
    }

    try {
      // Parse the auth storage to check if user is authenticated
      const authData = JSON.parse(token);
      if (!authData.state?.isAuthenticated) {
        const returnUrl = encodeURIComponent(pathname);
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('returnUrl', pathname);
        
        return NextResponse.redirect(loginUrl);
      }
    } catch (error) {
      // If parsing fails, redirect to login
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('returnUrl', pathname);
      
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};