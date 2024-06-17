import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes, including the home page
const isPublicRoute = createRouteMatcher([
  '/',          // Home page is public
  '/sign-in(.*)', // Sign-in page and its variations
  '/sign-up(.*)'  // Sign-up page and its variations
]);

export default clerkMiddleware((auth, request) => {
  // If the route is not public, require authentication
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

// Apply the middleware to all routes except static files, _next folder, and API routes
export const config = {
  matcher: [
    '/((?!.*\\..*|_next/static|_next/image|favicon.ico).*)', // Matches all routes except static files
    '/',  // Explicitly include the home route (though it's public and won't be protected)
    '/(api|trpc)(.*)'  // Match API routes for potential API middleware needs
  ],
};
