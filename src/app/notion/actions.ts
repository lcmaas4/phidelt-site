'use server';

/**
 * Server action to validate the Notion access gate password.
 *
 * @param password - User-provided password string.
 * @returns Object with success boolean and redirect URL if authorized.
 */
export async function validateNotionPassword(
  password: string
): Promise<{ success: boolean; redirectUrl?: string; error?: string }> {
  const correctPassword = process.env.NOTION_PASSWORD;
  const notionLink = process.env.NOTION_LINK;

  // Validate environment variables are configured
  if (!correctPassword) {
    console.error('Missing NOTION_PASSWORD environment variable');
    return {
      success: false,
      error: 'Server misconfiguration: password not configured',
    };
  }

  if (!notionLink) {
    console.error('Missing NOTION_LINK environment variable');
    return {
      success: false,
      error: 'Server misconfiguration: redirect link not configured',
    };
  }

  if (password === correctPassword) {
    return { success: true, redirectUrl: notionLink };
  }

  return { success: false };
}
