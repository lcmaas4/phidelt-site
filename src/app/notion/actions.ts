'use server';

export async function validateNotionPassword(
  password: string
): Promise<{ success: boolean; redirectUrl?: string }> {
  const correctPassword = process.env.NOTION_PASSWORD;
  const notionLink = process.env.NOTION_LINK;

  if (password === correctPassword) {
    return { success: true, redirectUrl: notionLink || '/' };
  }

  return { success: false };
}
