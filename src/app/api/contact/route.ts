import { NextRequest, NextResponse } from 'next/server';

// Simple rate limiting using a Map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

// Define validation functions
const validateAndSanitizeInput = (data: any) => {
  // Check if required fields exist
  if (!data.name || !data.email || !data.message) {
    throw new Error('Name, email, and message are required fields.');
  }

  // Type and format validation
  if (typeof data.name !== 'string') {
    throw new Error('Name must be a string.');
  }
  
  if (typeof data.email !== 'string') {
    throw new Error('Email must be a string.');
  }
  
  if (typeof data.subject !== 'string' && data.subject !== undefined) {
    throw new Error('Subject must be a string.');
  }
  
  if (typeof data.message !== 'string') {
    throw new Error('Message must be a string.');
  }

  // Length validation
  if (data.name.trim().length > 100) {
    throw new Error('Name must be 100 characters or less.');
  }
  
  if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    throw new Error('Email must be a valid email address.');
  }
  
  if (data.subject && data.subject.length > 200) {
    throw new Error('Subject must be 200 characters or less.');
  }
  
  if (data.message.trim().length > 1000) {
    throw new Error('Message must be 1000 characters or less.');
  }

  // Sanitization - remove potentially dangerous characters
  const sanitizedData = {
    name: data.name.replace(/[<>]/g, '').trim().substring(0, 100),
    email: data.email.replace(/[<>]/g, '').trim().substring(0, 100),
    subject: data.subject ? data.subject.replace(/[<>]/g, '').trim().substring(0, 200) : '',
    message: data.message.replace(/[<>]/g, '').trim().substring(0, 1000),
  };

  return sanitizedData;
};

// Rate limiting function
const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per window

  const record = rateLimitMap.get(ip) || { count: 0, timestamp: now };
  
  if (now - record.timestamp > windowMs) {
    // Reset the counter if the window has passed
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  } else {
    // Increment the count if within the window
    if (record.count >= maxRequests) {
      return true; // Rate limited
    }
    rateLimitMap.set(ip, { count: record.count + 1, timestamp: record.timestamp });
    return false; // Not rate limited
  }
};

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
  const ip =
  request.headers.get('x-forwarded-for') ||
  request.headers.get('x-real-ip') ||
  'unknown';
  
  request.headers.get('x-forwarded-for') ||
  request.headers.get('x-real-ip') ||
  'unknown';
  request.headers.get('x-forwarded-for') ||
  request.headers.get('x-real-ip') ||
  'unknown';

    
    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    
    // Validate and sanitize input
    let validatedData;
    try {
      validatedData = validateAndSanitizeInput(body);
    } catch (validationError: any) {
      return NextResponse.json(
        { error: validationError.message },
        { status: 400 }
      );
    }

    // In a real application, you would send the email here using a service like:
    // - Resend
    // - Nodemailer
    // - SendGrid
    // - AWS SES
    // For now, we'll just log it securely
    
    console.log('Contact form submission received from IP:', ip);
    console.log('Submission data:', {
      name: validatedData.name,
      email: validatedData.email,
      subject: validatedData.subject,
      message: validatedData.message.substring(0, 100) + '...', // Truncate for security
      timestamp: new Date().toISOString()
    });

    // In a real application, you would send the email here
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL || 'info@flashphotofilms.com',
    //   from: validatedData.email,
    //   subject: validatedData.subject || `New message from ${validatedData.name}`,
    //   text: validatedData.message
    // });

    // Success response
    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Return generic error to prevent information disclosure
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}