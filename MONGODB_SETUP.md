# MongoDB Backend Setup Instructions

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/ibs_fintech

# For MongoDB Atlas (cloud hosted), use:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ibs_fintech?retryWrites=true&w=majority

# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# For Gmail, you'll need to:
# 1. Enable 2-factor authentication
# 2. Generate an App Password (not your regular password)
# 3. Use the App Password as SMTP_PASS

# Next.js Configuration
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

## Database Models

### Contact Form Submissions
- **Collection**: `contacts`
- **Fields**: name, email, phone, company, subject, message, createdAt, source

### Demo Request Submissions
- **Collection**: `demorequests`
- **Fields**: name, email, phone, company, jobTitle, companySize, industry, interestedProducts[], interestedSolutions[], useCase, timeline, budget, preferredContact, additionalNotes, brochureDownloaded, createdAt, source

## API Endpoints

### Contact Form
- **POST** `/api/contact` - Submit contact form
- **GET** `/api/contact` - Retrieve all contact submissions

### Demo Request
- **POST** `/api/demo-request` - Submit demo request form
- **GET** `/api/demo-request` - Retrieve all demo request submissions

## Features Implemented

1. ✅ MongoDB backend service with connection pooling
2. ✅ Contact form API integration
3. ✅ Demo request form API integration
4. ✅ Request a Demo page with comprehensive form
5. ✅ Brochure download functionality (ready for file)
6. ✅ Form validation and error handling
7. ✅ Success/error status messages
8. ✅ Responsive design with dark/light theme support
9. ✅ Production-ready Nodemailer service
10. ✅ Professional email templates for both forms
11. ✅ Email notifications to appropriate departments

## Next Steps

1. Add your MongoDB connection string to `.env.local`
2. Configure SMTP email settings in `.env.local`
3. Place the brochure PDF file in the `public` folder as `brochure.pdf`
4. Test the forms by submitting data
5. Consider implementing admin dashboard for viewing submissions

## Email Configuration

### Gmail Setup (Recommended)
1. Enable 2-factor authentication on your Gmail account
2. Go to Google Account settings → Security → App passwords
3. Generate a new app password for "Mail"
4. Use this app password as `SMTP_PASS` in your `.env.local`

### Alternative Email Providers
- **Outlook/Hotmail**: Use `smtp-mail.outlook.com` as `SMTP_HOST`
- **Yahoo**: Use `smtp.mail.yahoo.com` as `SMTP_HOST`
- **Custom SMTP**: Use your provider's SMTP settings

### Email Destinations
- **Contact Form**: Sends to `contactus@ibsfintech.com`
- **Demo Request**: Sends to `sales-us@ibsfintech.com`

## Database Schema

The backend automatically creates the necessary collections and indexes when the first document is inserted. 