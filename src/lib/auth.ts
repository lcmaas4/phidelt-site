import { NextRequest, NextResponse } from 'next/server';

/**
 * Validates administrative authorization for write operations.
 * Checks the Authorization header (Bearer token) or x-admin-token header
 * against ADMIN_API_KEY or NOTION_PASSWORD.
 */
export function verifyAdminAuth(request: NextRequest): { authorized: boolean; error?: string } {
  const adminSecret = process.env.ADMIN_API_KEY || process.env.NOTION_PASSWORD;

  if (!adminSecret) {
    return {
      authorized: false,
      error: 'Server authorization is misconfigured: ADMIN_API_KEY or NOTION_PASSWORD must be set.',
    };
  }

  const authHeader = request.headers.get('authorization');
  const customHeader = request.headers.get('x-admin-token');

  let token = '';
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7).trim();
  } else if (customHeader) {
    token = customHeader.trim();
  }

  if (!token || token !== adminSecret) {
    return {
      authorized: false,
      error: 'Unauthorized: Invalid or missing administrator credentials.',
    };
  }

  return { authorized: true };
}

/**
 * Helper to generate a standardized 401 Unauthorized JSON response.
 */
export function unauthorizedResponse(message = 'Unauthorized'): NextResponse {
  return NextResponse.json({ success: false, error: message }, { status: 401 });
}
