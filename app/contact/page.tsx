'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, Mail, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Enterprise TMS',
    'SME TMS',
    'Cashflow & Liquidity',
    'Currency (FX) Risk',
    'Investment (Money Market)',
    'Trade Finance',
    'Debt (Borrowings)',
    'Commodity Risk',
    'Payments',
    'Supply Chain Finance',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.service,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        console.error('Form submission failed');
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have questions about our Treasury Management Solutions? Fill out the form below and our team will get back to you shortly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className={`p-8 rounded-2xl shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
                  <Check className="h-10 w-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Your message has been sent successfully. We'll get back to you soon.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name <span className="text-red-500">*</span></label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email <span className="text-red-500">*</span></label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Service of Interest <span className="text-red-500">*</span></label>
                  <Select onValueChange={handleSelectChange} value={formData.service}>
                    <SelectTrigger className={`w-full ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className={theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message <span className="text-red-500">*</span></label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white py-6 text-base font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && (
                      <motion.span
                        className="ml-2 inline-block"
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        →
                      </motion.span>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={`p-8 rounded-2xl shadow-xl h-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-teal-900/30' : 'bg-teal-100'} mr-4`}>
                    <MapPin className={`h-6 w-6 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Our Office</h4>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      IBSFINtech India Pvt. Ltd.<br />
                      1st Floor, Tower C, Building No. 5,<br />
                      DLF Cyber City, Phase III,<br />
                      Gurugram, Haryana 122002, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-teal-900/30' : 'bg-teal-100'} mr-4`}>
                    <Mail className={`h-6 w-6 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                    <a 
                      href="mailto:info@ibsfintech.com" 
                      className={`hover:text-teal-500 transition-colors ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}
                    >
                      info@ibsfintech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-teal-900/30' : 'bg-teal-100'} mr-4`}>
                    <Phone className={`h-6 w-6 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                    <a 
                      href="tel:+911244800700" 
                      className={`hover:text-teal-500 transition-colors ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}
                    >
                      +91 124 480 0700
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
                <div className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM IST</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM IST</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className={`rounded-2xl overflow-hidden shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="h-64 w-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
                <p className={`text-lg font-medium ${theme === 'dark' ? 'text-gray-800' : 'text-gray-600'}`}>
                  Interactive Map Here
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
