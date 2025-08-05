import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { sendContactEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !company || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create new contact submission
    const contact = new Contact({
      name,
      email,
      phone,
      company,
      subject,
      message,
      source: 'contact',
    });

    await contact.save();

    // Send email notification
    const emailSent = await sendContactEmail({
      name,
      email,
      phone,
      company,
      subject,
      message,
    });

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        emailSent 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    
    const contacts = await Contact.find({ source: 'contact' })
      .sort({ createdAt: -1 })
      .select('-__v');

    return NextResponse.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 