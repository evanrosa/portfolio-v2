import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async (auth, req) => {
    const { userId, sessionClaims } = await auth()

    // If user is not logged in and trying to access protected route, redirect to sign-in
    if (isProtectedRoute(req) && !userId) {
        const signInUrl = new URL('/sign-in', req.url)
        return NextResponse.redirect(signInUrl)
    }

    // If user is logged in but not admin, redirect to home
    if (isProtectedRoute(req) && sessionClaims?.metadata?.role !== 'admin') {
        const url = new URL('/', req.url)
        return NextResponse.redirect(url)
    }
}, {
    authorizedParties: ['http://localhost:3000', 'https://evro.dev', 'https://www.evro.dev']
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc|admin)(.*)',
    ],
}