import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

async function verifyCaptcha(token) {
  if (!process.env.HCAPTCHA_SECRET_KEY) {
    return true; // Skip verification if no secret key is configured
  }

  const response = await fetch('https://hcaptcha.com/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.HCAPTCHA_SECRET_KEY}&response=${token}`,
  });

  const data = await response.json();
  return data.success;
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Verify captcha if enabled
    if (process.env.HCAPTCHA_SECRET_KEY) {
      const isValidCaptcha = await verifyCaptcha(data.captchaToken);
      if (!isValidCaptcha) {
        return Response.json({ error: 'Invalid captcha' }, { status: 400 });
      }
    }
    
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_COMMUNITY_DATABASE_ID,
      },
      properties: {
        'Name': {
          title: [{ text: { content: data.name } }]
        },
        'Email': {
          rich_text: [{ text: { content: data.email } }]
        },
        'Phone': {
          phone_number: data.phone || null
        },
        'Interests': {
          multi_select: data.interests ? data.interests.map(interest => ({ name: interest })) : []
        },
        'Background': {
          select: data.background ? { name: data.background } : null
        },
        'Goals': {
          rich_text: [{ text: { content: data.message || '' } }]
        }
      }
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Notion API error:', error);
    return Response.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
