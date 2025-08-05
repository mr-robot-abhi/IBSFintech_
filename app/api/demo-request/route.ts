import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import DemoRequest from '@/models/DemoRequest';
import { sendDemoRequestEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      jobTitle,
      companySize,
      industry,
      interestedProducts,
      interestedSolutions,
      useCase,
      timeline,
      budget,
      preferredContact,
      additionalNotes,
      brochureDownloaded
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !company || !jobTitle || !companySize || 
        !industry || !useCase || !timeline || !budget || !preferredContact) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      );
    }

    // Create new demo request
    const demoRequest = new DemoRequest({
      name,
      email,
      phone,
      company,
      jobTitle,
      companySize,
      industry,
      interestedProducts: interestedProducts || [],
      interestedSolutions: interestedSolutions || [],
      useCase,
      timeline,
      budget,
      preferredContact,
      additionalNotes: additionalNotes || '',
      brochureDownloaded: brochureDownloaded || false,
      source: 'demo',
    });

    await demoRequest.save();

    // Send email notification
    const emailSent = await sendDemoRequestEmail({
      name,
      email,
      phone,
      company,
      jobTitle,
      companySize,
      industry,
      interestedProducts: interestedProducts || [],
      interestedSolutions: interestedSolutions || [],
      useCase,
      timeline,
      budget,
      preferredContact,
      additionalNotes: additionalNotes || '',
    });

    return NextResponse.json(
      { 
        message: 'Demo request submitted successfully',
        emailSent 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Demo request submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    
    const demoRequests = await DemoRequest.find({ source: 'demo' })
      .sort({ createdAt: -1 })
      .select('-__v');

    return NextResponse.json(demoRequests);
  } catch (error) {
    console.error('Error fetching demo requests:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 