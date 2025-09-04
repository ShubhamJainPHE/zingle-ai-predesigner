import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message, inquiryType } = body;

    // Validate required fields
    if (!name || !email || !company || !message || !inquiryType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // TODO: Implement email service integration
    // Options:
    // 1. Resend: npm install resend
    // 2. SendGrid: npm install @sendgrid/mail
    // 3. Nodemailer: npm install nodemailer
    // 4. EmailJS: Client-side integration

    // Example with Resend (commented out - requires API key):
    /*
    import { Resend } from 'resend';
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'noreply@zingle.ai',
      to: ['hello@zingle.ai'],
      subject: `New ${inquiryType} from ${name} at ${company}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: 'noreply@zingle.ai',
      to: [email],
      subject: 'Thank you for contacting Zingle AI',
      html: `
        <h2>Thank you for your inquiry, ${name}!</h2>
        <p>We've received your message and will get back to you within 2 hours during business days.</p>
        <p>Your inquiry type: ${inquiryType}</p>
        <p>Best regards,<br>The Zingle AI Team</p>
      `,
    });
    */

    // For development: Log the form submission
    console.log('Contact form submission:', {
      name,
      email,
      company,
      phone,
      message,
      inquiryType,
      timestamp: new Date().toISOString(),
    });

    // TODO: Store in database if needed
    // Options: PostgreSQL, MongoDB, Supabase, etc.

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}