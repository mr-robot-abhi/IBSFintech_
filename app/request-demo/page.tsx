'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Download, CheckCircle, AlertCircle } from 'lucide-react';
import { useTheme } from 'next-themes';

interface DemoRequestForm {
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
  additionalNotes: string;
}

const products = [
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
];

const solutions = [
  'Cash Visibility & Forecasting',
  'Treasury Payments',
  'Trade Finance',
  'Supply Chain Finance',
  'Debt Management',
  'FX & Currency Risk',
  'Commodity Risk'
];

export default function RequestDemoPage() {
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DemoRequestForm>();

  const handleProductToggle = (product: string) => {
    setSelectedProducts(prev =>
      prev.includes(product)
        ? prev.filter(p => p !== product)
        : [...prev, product]
    );
  };

  const handleSolutionToggle = (solution: string) => {
    setSelectedSolutions(prev =>
      prev.includes(solution)
        ? prev.filter(s => s !== solution)
        : [...prev, solution]
    );
  };

  const downloadBrochure = () => {
    // This will be updated when the brochure file is added to public folder
    const link = document.createElement('a');
    link.href = '/brochure.pdf'; // Update this path when brochure is added
    link.download = 'IBS_Products_Solutions_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onSubmit = async (data: DemoRequestForm) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = {
        ...data,
        interestedProducts: selectedProducts,
        interestedSolutions: selectedSolutions,
        brochureDownloaded: false,
      };

      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setSelectedProducts([]);
        setSelectedSolutions([]);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Request a Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the power of our comprehensive fintech solutions. Schedule a personalized demo 
            to see how our products can transform your financial operations.
          </p>
        </motion.div>

        {/* Brochure Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className={`p-6 rounded-lg border-2 border-dashed ${theme === 'dark' ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-white'}`}>
            <div className="text-center">
              <Download className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Download Our Complete Brochure</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get detailed information about all our products and solutions in one comprehensive document.
              </p>
              <button
                onClick={downloadBrochure}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`p-8 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  {...register('phone', { required: 'Phone number is required' })}
                  className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company Name *</label>
                <input
                  {...register('company', { required: 'Company name is required' })}
                  className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter your company name"
                />
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Job Title *</label>
                <input
                  {...register('jobTitle', { required: 'Job title is required' })}
                  className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter your job title"
                />
                {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company Size *</label>
                <select
                  {...register('companySize', { required: 'Company size is required' })}
                  className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
                {errors.companySize && <p className="text-red-500 text-sm mt-1">{errors.companySize.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Industry *</label>
              <input
                {...register('industry', { required: 'Industry is required' })}
                className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="e.g., Banking, Manufacturing, Technology, etc."
              />
              {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>}
            </div>

            {/* Products of Interest */}
            <div>
              <label className="block text-sm font-medium mb-3">Products of Interest</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {products.map((product) => (
                  <label key={product} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product)}
                      onChange={() => handleProductToggle(product)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm">{product}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Solutions of Interest */}
            <div>
              <label className="block text-sm font-medium mb-3">Solutions of Interest</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {solutions.map((solution) => (
                  <label key={solution} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedSolutions.includes(solution)}
                      onChange={() => handleSolutionToggle(solution)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm">{solution}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Use Case */}
            <div>
              <label className="block text-sm font-medium mb-2">Primary Use Case *</label>
              <textarea
                {...register('useCase', { required: 'Use case description is required' })}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="Describe your primary use case and what you're looking to achieve..."
              />
              {errors.useCase && <p className="text-red-500 text-sm mt-1">{errors.useCase.message}</p>}
            </div>

            {/* Timeline and Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Implementation Timeline *</label>
                <select
                  {...register('timeline', { required: 'Timeline is required' })}
                  className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                >
                  <option value="">Select timeline</option>
                  <option value="Immediate">Immediate</option>
                  <option value="Within 3 months">Within 3 months</option>
                  <option value="Within 6 months">Within 6 months</option>
                  <option value="Within 1 year">Within 1 year</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
                {errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Budget Range *</label>
                <select
                  {...register('budget', { required: 'Budget range is required' })}
                  className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                >
                  <option value="">Select budget range</option>
                  <option value="Under $10K">Under $10K</option>
                  <option value="$10K-$50K">$10K-$50K</option>
                  <option value="$50K-$100K">$50K-$100K</option>
                  <option value="$100K-$500K">$100K-$500K</option>
                  <option value="$500K+">$500K+</option>
                  <option value="Not sure">Not sure</option>
                </select>
                {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>}
              </div>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Contact Method *</label>
              <select
                {...register('preferredContact', { required: 'Preferred contact method is required' })}
                className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              >
                <option value="">Select contact method</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="Video Call">Video Call</option>
              </select>
              {errors.preferredContact && <p className="text-red-500 text-sm mt-1">{errors.preferredContact.message}</p>}
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-medium mb-2">Additional Notes</label>
              <textarea
                {...register('additionalNotes')}
                rows={3}
                className={`w-full px-4 py-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="Any additional information or specific requirements..."
              />
            </div>

            {/* Submit Status */}
            {submitStatus === 'success' && (
              <div className="flex items-center space-x-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-800 dark:text-green-200">Demo request submitted successfully! We'll contact you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center space-x-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <p className="text-red-800 dark:text-red-200">There was an error submitting your request. Please try again.</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isSubmitting ? 'Submitting...' : 'Request Demo'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
} 