import { NextRequest, NextResponse } from 'next/server';
import { RateLimiterMemory } from 'rate-limiter-flexible';

// Rate limiter configuration
const rateLimiter = new RateLimiterMemory({
    points: 10, // 10 requests
    duration: 1, // per 1 second by IP
});

export async function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();

    // Logging
    console.log(`Incoming request to ${url.pathname} at ${new Date().toISOString}`);

    // Check for authentication
    const token = req.cookies.get('token')?.value;
    const isAuthenticated = token === 'valid-token';
    if (!isAuthenticated && url.pathname.startsWith('/protected')) {
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    // Rate limiting
    try {
        await rateLimiter.consume(req.ip ?? req.headers.get('x-forwarded-for') ?? 'unknown');
    } catch (rateLimiterRes) {
        return new NextResponse('Too many requsts', { status: 429 });
    }

    // Handling CORS
    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Redirect logic
    if (url.pathname === '/old-path') {
        url.pathname = '/new-path';
        return NextResponse.redirect(url);
    }

    return response;
}

export const config = {
    matcher: ['/api/:path', '/protected/:path'],
};