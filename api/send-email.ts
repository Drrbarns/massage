import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Luxury Sensation Massage <onboarding@resend.dev>',
      to: ['crytoatm@gmail.com'], // TODO: Change back to luxurysensationmassage@gmail.com after domain verification
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background: #fff;">
          <div style="background: linear-gradient(135deg, #D4A5A5, #E8C4C4); padding: 30px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 24px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
              ✨ New Contact Form Message
            </h1>
          </div>
          
          <div style="padding: 30px; background: #fafafa;">
            <div style="background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
              <h2 style="color: #D4A5A5; margin-top: 0; font-size: 18px; border-bottom: 2px solid #E8C4C4; padding-bottom: 10px;">
                Client Details
              </h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 100px;">Name</td>
                  <td style="padding: 12px 0; color: #333; font-weight: 500;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                  <td style="padding: 12px 0; color: #333; font-weight: 500;">
                    <a href="mailto:${email}" style="color: #D4A5A5; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Subject</td>
                  <td style="padding: 12px 0; color: #333; font-weight: 500;">${subject}</td>
                </tr>
              </table>
              
              <h3 style="color: #D4A5A5; margin-top: 24px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                Message
              </h3>
              <div style="background: #f9f9f9; border-left: 4px solid #D4A5A5; padding: 16px; border-radius: 0 8px 8px 0; color: #555; line-height: 1.6; font-style: italic;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <p style="text-align: center; color: #999; font-size: 12px; margin-top: 24px;">
              This message was sent from the contact form on<br>
              <a href="https://www.luxurysensationmassage.com" style="color: #D4A5A5;">luxurysensationmassage.com</a>
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
