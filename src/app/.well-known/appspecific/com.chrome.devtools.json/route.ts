import { NextResponse } from 'next/server';

/**
 * Route handler for Chrome DevTools configuration request.
 * Chrome DevTools automatically requests this file when debugging.
 * This is harmless and doesn't affect your application.
 * 
 * Returns 204 (No Content) to silently handle the request.
 */
export async function GET() {
  // Return 204 No Content - request handled, no response body needed
  return new NextResponse(null, { status: 204 });
}

