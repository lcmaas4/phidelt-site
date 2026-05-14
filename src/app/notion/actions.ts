'use server';

export async function validateNotionPassword(
  password: string
): Promise<{ success: boolean; redirectUrl?: string }> {
  const correctPassword = process.env.REACT_APP_NOTION_PASSWORD;
  const notionLink = process.env.REACT_APP_NOTION_LINK;

  if (password === correctPassword) {
    return { success: true, redirectUrl: notionLink || '/' };
  }

  return { success: false };
}
