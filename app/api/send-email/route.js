import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { fullName, email, phone, investmentInterest, slotDateTime, notes, submissionId } = body;
    
    if (!fullName || !phone || !investmentInterest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email configuration - you'll need to set these environment variables
    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = process.env.SMTP_PORT || 587;
    const SMTP_USER = process.env.SMTP_USER; // Your email
    const SMTP_PASS = process.env.SMTP_PASS; // Your app password
    const TO_EMAIL = process.env.TO_EMAIL || 'info@exorafarms.co.in'; // Recipient email

    // Format the email content
    const emailSubject = `New Contact Form Submission - ${fullName}`;
    const emailBody = `
New Contact Form Submission Received

Submission Details:
==================
Submission ID: ${submissionId || 'N/A'}
Date & Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Contact Information:
===================
Full Name: ${fullName}
Email: ${email || 'Not provided'}
Phone: ${phone}
Investment Interest: ${investmentInterest}

Appointment Details:
===================
Preferred Slot: ${slotDateTime ? new Date(slotDateTime).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) : 'Not specified'}

Additional Notes:
================
${notes || 'No additional notes provided'}

Source: Website Contact Form
User Agent: ${request.headers.get('user-agent')}
IP Address: ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'}

---
This is an automated email from Exora Farms website.
Please respond to the customer within 24 hours.
    `.trim();

    // If SMTP credentials are not configured, log the email instead
    if (!SMTP_USER || !SMTP_PASS) {
      // console.log('📧 EMAIL NOTIFICATION (SMTP not configured):');
      // console.log('To:', TO_EMAIL);
      // console.log('Subject:', emailSubject);
      // console.log('Body:', emailBody);
      // console.log('---');

      return NextResponse.json({
        success: true,
        message: 'Form data logged (email service not configured)',
        emailLogged: true
      });
    }

    // Enhanced logging for production debugging
    // console.log('🔄 Email API called in environment:', process.env.NODE_ENV);
    // console.log('🔄 SMTP Config check:');
    // console.log('- Host:', SMTP_HOST);
    // console.log('- Port:', SMTP_PORT);
    // console.log('- User:', SMTP_USER ? 'SET' : 'NOT SET');
    // console.log('- Pass:', SMTP_PASS ? 'SET (length: ' + SMTP_PASS.length + ')' : 'NOT SET');
    // console.log('- To Email:', TO_EMAIL);

    // Use Nodemailer to send email
    try {
      const nodemailer = require('nodemailer');

      // Debug: Log the credentials (without showing the full password)
      // console.log('🔍 SMTP Debug Info:');
      // console.log('Host:', SMTP_HOST);
      // console.log('Port:', SMTP_PORT);
      // console.log('User:', SMTP_USER);
      // console.log('Pass length:', SMTP_PASS ? SMTP_PASS.length : 'undefined');
      // console.log('Pass first 4 chars:', SMTP_PASS ? SMTP_PASS.substring(0, 4) + '...' : 'undefined');

      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT),
        secure: false, // true for 465, false for other ports
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      // Convert plain text to HTML
      const htmlBody = emailBody.replace(/\n/g, '<br>');

      await transporter.sendMail({
        from: `"Exora Farms Website" <${SMTP_USER}>`,
        to: TO_EMAIL,
        subject: emailSubject,
        text: emailBody,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #059669, #10b981); color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">🌱 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Exora Farms Website</p>
            </div>
            <div style="padding: 20px; background: #f9fafb;">
              <pre style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #059669; font-family: monospace; white-space: pre-wrap; line-height: 1.5;">${emailBody}</pre>
            </div>
            <div style="background: #374151; color: white; padding: 15px; text-align: center; font-size: 12px;">
              <p style="margin: 0;">This is an automated email from Exora Farms website contact form.</p>
            </div>
          </div>
        `,
      });

      console.log('✅ Email sent successfully via SMTP');
    } catch (smtpError) {
      // console.error('❌ SMTP Error Details:');
      // console.error('- Error Code:', smtpError.code);
      // console.error('- Error Message:', smtpError.message);
      // console.error('- Response Code:', smtpError.responseCode);
      // console.error('- Command:', smtpError.command);
      // console.error('- Full Error:', smtpError);

      // Log email content as fallback for debugging
      // console.log('📧 EMAIL CONTENT (SMTP Failed):');
      // console.log('From:', SMTP_USER);
      // console.log('To:', TO_EMAIL);
      // console.log('Subject:', emailSubject);
      // console.log('Body:', emailBody);
      // console.log('---');

      // Fallback to webhook if SMTP fails
      const webhookUrl = process.env.EMAIL_WEBHOOK_URL;

      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              to: TO_EMAIL,
              subject: emailSubject,
              body: emailBody,
              formData: body,
              timestamp: new Date().toISOString(),
            }),
          });
          // console.log('✅ Email sent via webhook fallback');
        } catch (webhookError) {
          // console.error('❌ Webhook fallback also failed:', webhookError);
          throw smtpError; // Re-throw original SMTP error
        }
      } else {
        // Don't throw error in production - just log it
        // console.log('⚠️ No webhook fallback configured, but form data was saved to Firebase');
      }
    }

    // console.log('✅ Email notification process completed');

    return NextResponse.json({
      success: true,
      message: 'Email notification sent successfully'
    });

  } catch (error) {
    // console.error('❌ Error sending email notification:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email notification',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
