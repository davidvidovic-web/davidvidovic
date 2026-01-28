import { NextResponse } from 'next/server';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const API_KEY = process.env.NEXT_PRIVATE_MAILGUN_API_KEY || '';
const DOMAIN = process.env.NEXT_PRIVATE_MAILGUN_DOMAIN || '';
const MAILGUN_REGION = process.env.NEXT_PRIVATE_MAILGUN_REGION || 'us'; // 'us' or 'eu'

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, interested, budget, website, message } = body;

    // Validate required fields
    if (!name || !email || !interested || !budget || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Initialize Mailgun
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: 'api',
      key: API_KEY,
      url: MAILGUN_REGION === 'eu' ? 'https://api.eu.mailgun.net' : 'https://api.mailgun.net',
    });

    // Prepare email content
    const emailContent = `
New Contact Form Submission
===========================

Name: ${name}
Email: ${email}
Service Interested: ${interested}
Budget: ${budget}
${website ? `Website: ${website}` : ''}

Message:
${message}

---
Sent from davidvidovic.com contact form
    `.trim();

    // Send email using Mailgun
    const messageData = {
      from: `Portfolio Contact <mailgun@${DOMAIN}>`,
      to: ['mail@davidvidovic.com'],
      subject: `New Contact: ${name} - ${interested}`,
      text: emailContent,
      'h:Reply-To': email,
    };

    await mg.messages.create(DOMAIN, messageData);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Mailgun error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
