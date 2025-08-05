import nodemailer from 'nodemailer';

// Email configuration
const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter(emailConfig);
};

// Email templates
const createContactEmailTemplate = (data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}) => {
  return {
    subject: `New Contact Form Submission: ${data.subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1f2937; color: white; padding: 20px; text-align: center; }
          .content { background: #f9fafb; padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #374151; }
          .value { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #3b82f6; }
          .footer { background: #e5e7eb; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>IBSFINtech Contact Form</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${data.phone}</div>
            </div>
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${data.company}</div>
            </div>
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${data.subject}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the IBSFINtech contact form on ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company}
Subject: ${data.subject}

Message:
${data.message}

Sent on: ${new Date().toLocaleString()}
    `,
  };
};

const createDemoRequestEmailTemplate = (data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  companySize: string;
  industry: string;
  interestedProducts: string[];
  interestedSolutions: string[];
  useCase: string;
  timeline: string;
  budget: string;
  preferredContact: string;
  additionalNotes?: string;
}) => {
  return {
    subject: `New Demo Request: ${data.name} from ${data.company}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Demo Request</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 700px; margin: 0 auto; padding: 20px; }
          .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
          .content { background: #f9fafb; padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #374151; }
          .value { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #3b82f6; }
          .list { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #10b981; }
          .footer { background: #e5e7eb; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; }
          .section { margin-bottom: 25px; }
          .section-title { font-size: 18px; font-weight: bold; color: #1f2937; margin-bottom: 10px; border-bottom: 2px solid #3b82f6; padding-bottom: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Demo Request</h1>
            <p>IBSFINtech Demo Request Form</p>
          </div>
          <div class="content">
            <div class="section">
              <div class="section-title">Contact Information</div>
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${data.email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${data.phone}</div>
              </div>
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${data.company}</div>
              </div>
              <div class="field">
                <div class="label">Job Title:</div>
                <div class="value">${data.jobTitle}</div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Company Details</div>
              <div class="field">
                <div class="label">Company Size:</div>
                <div class="value">${data.companySize}</div>
              </div>
              <div class="field">
                <div class="label">Industry:</div>
                <div class="value">${data.industry}</div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Interests</div>
              <div class="field">
                <div class="label">Products of Interest:</div>
                <div class="list">${data.interestedProducts.length > 0 ? data.interestedProducts.join(', ') : 'None selected'}</div>
              </div>
              <div class="field">
                <div class="label">Solutions of Interest:</div>
                <div class="list">${data.interestedSolutions.length > 0 ? data.interestedSolutions.join(', ') : 'None selected'}</div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Project Details</div>
              <div class="field">
                <div class="label">Use Case:</div>
                <div class="value">${data.useCase.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="field">
                <div class="label">Timeline:</div>
                <div class="value">${data.timeline}</div>
              </div>
              <div class="field">
                <div class="label">Budget Range:</div>
                <div class="value">${data.budget}</div>
              </div>
              <div class="field">
                <div class="label">Preferred Contact Method:</div>
                <div class="value">${data.preferredContact}</div>
              </div>
              ${data.additionalNotes ? `
              <div class="field">
                <div class="label">Additional Notes:</div>
                <div class="value">${data.additionalNotes.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
            </div>
          </div>
          <div class="footer">
            <p>This demo request was submitted on ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
New Demo Request

Contact Information:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company}
Job Title: ${data.jobTitle}

Company Details:
Company Size: ${data.companySize}
Industry: ${data.industry}

Interests:
Products: ${data.interestedProducts.length > 0 ? data.interestedProducts.join(', ') : 'None selected'}
Solutions: ${data.interestedSolutions.length > 0 ? data.interestedSolutions.join(', ') : 'None selected'}

Project Details:
Use Case: ${data.useCase}
Timeline: ${data.timeline}
Budget: ${data.budget}
Preferred Contact: ${data.preferredContact}
${data.additionalNotes ? `Additional Notes: ${data.additionalNotes}` : ''}

Submitted on: ${new Date().toLocaleString()}
    `,
  };
};

// Send email function
export const sendEmail = async (
  to: string,
  subject: string,
  html: string,
  text: string
): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"IBSFINtech Contact Form" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      text,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};

// Send contact form email
export const sendContactEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}): Promise<boolean> => {
  const { subject, html, text } = createContactEmailTemplate(data);
  return await sendEmail('contactus@ibsfintech.com', subject, html, text);
};

// Send demo request email
export const sendDemoRequestEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  companySize: string;
  industry: string;
  interestedProducts: string[];
  interestedSolutions: string[];
  useCase: string;
  timeline: string;
  budget: string;
  preferredContact: string;
  additionalNotes?: string;
}): Promise<boolean> => {
  const { subject, html, text } = createDemoRequestEmailTemplate(data);
  return await sendEmail('sales-us@ibsfintech.com', subject, html, text);
}; 