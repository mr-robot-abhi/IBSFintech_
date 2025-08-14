const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  // Handle CORS
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { 
      name, 
      email, 
      company, 
      phone, 
      jobTitle, 
      companySize, 
      industry, 
      solutions, 
      timeline, 
      additionalInfo,
      source 
    } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !company) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Name, email, and company are required' })
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid email format' })
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content for sales team
    const salesMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SALES_EMAIL || 'sales@ibsfintech.com',
      subject: `Demo Request: ${company} - ${name}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Contact Information:</strong></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Job Title:</strong> ${jobTitle || 'Not provided'}</p>
        
        <p><strong>Company Details:</strong></p>
        <p><strong>Size:</strong> ${companySize || 'Not specified'}</p>
        <p><strong>Industry:</strong> ${industry || 'Not specified'}</p>
        
        <p><strong>Solutions of Interest:</strong></p>
        <ul>
          ${solutions ? solutions.map(s => `<li>${s}</li>`).join('') : '<li>Not specified</li>'}
        </ul>
        
        <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
        
        <p><strong>Additional Information:</strong></p>
        <p>${additionalInfo || 'None provided'}</p>
        
        <p><strong>Source:</strong> ${source || 'Website'}</p>
        
        <hr>
        <p><em>This demo request was submitted from the IBSFINtech website.</em></p>
        <p><strong>Action Required:</strong> Please follow up within 24 hours to schedule the demo.</p>
      `,
    };

    // Send email to sales team
    await transporter.sendMail(salesMailOptions);

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Demo Request Received - IBSFINtech',
      html: `
        <h2>Thank you for your demo request!</h2>
        <p>Dear ${name},</p>
        <p>We have received your demo request for IBSFINtech's treasury management solutions.</p>
        
        <p><strong>Your Request Details:</strong></p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Solutions of Interest:</strong> ${solutions ? solutions.join(', ') : 'General inquiry'}</p>
        <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
        
        <p>Our sales team will review your request and contact you within 24 hours to schedule a personalized demo of our solutions.</p>
        
        <p><strong>What to expect:</strong></p>
        <ul>
          <li>Initial consultation call to understand your specific needs</li>
          <li>Personalized demo of relevant solutions</li>
          <li>Q&A session with our treasury experts</li>
          <li>Next steps and proposal discussion</li>
        </ul>
        
        <p>If you have any urgent questions, please don't hesitate to contact us directly at sales@ibsfintech.com or call +1-XXX-XXX-XXXX.</p>
        
        <p>We look forward to showing you how IBSFINtech can transform your treasury operations!</p>
        
        <hr>
        <p>Best regards,<br>The IBSFINtech Sales Team</p>
      `,
    };

    try {
      await transporter.sendMail(userMailOptions);
    } catch (userEmailError) {
      console.warn('Failed to send confirmation email to user:', userEmailError);
      // Don't fail the main request if user confirmation fails
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: 'Thank you for your demo request! Our sales team will contact you within 24 hours.',
        timestamp: new Date().toISOString()
      })
    };

  } catch (error) {
    console.error('Demo request error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to submit demo request. Please try again later or contact us directly.',
        timestamp: new Date().toISOString()
      })
    };
  }
};
