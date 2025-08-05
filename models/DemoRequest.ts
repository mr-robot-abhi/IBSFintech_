import mongoose from 'mongoose';

const DemoRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  company: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true,
  },
  jobTitle: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true,
  },
  companySize: {
    type: String,
    required: [true, 'Company size is required'],
    enum: ['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+'],
  },
  industry: {
    type: String,
    required: [true, 'Industry is required'],
    trim: true,
  },
  interestedProducts: [{
    type: String,
    enum: [
      'Treasury Management',
      'Trade Finance',
      'Supply Chain Finance',
      'Payments',
      'Investment & Money Market',
      'Debt & Borrowings',
      'Currency & FX Risk',
      'Commodity Risk Management',
      'SME InnoTreasury',
      'SME InnoInvest'
    ],
  }],
  interestedSolutions: [{
    type: String,
    enum: [
      'Cash Visibility & Forecasting',
      'Treasury Payments',
      'Trade Finance',
      'Supply Chain Finance',
      'Debt Management',
      'FX & Currency Risk',
      'Commodity Risk'
    ],
  }],
  useCase: {
    type: String,
    required: [true, 'Use case description is required'],
    trim: true,
  },
  timeline: {
    type: String,
    required: [true, 'Implementation timeline is required'],
    enum: ['Immediate', 'Within 3 months', 'Within 6 months', 'Within 1 year', 'Just exploring'],
  },
  budget: {
    type: String,
    required: [true, 'Budget range is required'],
    enum: ['Under $10K', '$10K-$50K', '$50K-$100K', '$100K-$500K', '$500K+', 'Not sure'],
  },
  preferredContact: {
    type: String,
    required: [true, 'Preferred contact method is required'],
    enum: ['Email', 'Phone', 'Video Call'],
  },
  additionalNotes: {
    type: String,
    trim: true,
  },
  brochureDownloaded: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  source: {
    type: String,
    default: 'demo',
    enum: ['contact', 'demo'],
  },
});

export default mongoose.models.DemoRequest || mongoose.model('DemoRequest', DemoRequestSchema); 