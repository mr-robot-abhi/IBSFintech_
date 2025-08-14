'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, Mail, MapPin, Phone, Building, Globe } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  phone2?: string;
  email: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface OfficeCardProps {
  location: Location;
  index: number;
}

const OfficeCard = ({ location, index }: OfficeCardProps) => {
  const IconComponent = location.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
    >
      <div className="flex items-center mb-3">
        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center mr-2">
          <IconComponent className="h-4 w-4 text-teal-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-sm">{location.name}</h3>
          <p className="text-xs text-gray-500">{location.city}</p>
        </div>
      </div>
      
      <div className="space-y-2 flex-grow">
        <div>
          <p className="text-xs text-gray-600 leading-tight line-clamp-3">
            {location.address}
          </p>
        </div>
        
        <div className="space-y-1 mt-2">
          <div className="flex items-center">
            <Phone className="h-3 w-3 text-teal-600 mr-1 flex-shrink-0" />
            <a 
              href={`tel:${location.phone.replace(/\D/g, '')}`}
              className="text-xs text-teal-600 hover:text-teal-700 font-medium truncate"
            >
              {location.phone}
            </a>
          </div>

          {location.phone2 && (
            <div className="flex items-center">
              <Phone className="h-3 w-3 text-teal-600 mr-1 flex-shrink-0" />
              <a 
                href={`tel:${location.phone2.replace(/\D/g, '')}`}
                className="text-xs text-teal-600 hover:text-teal-700 font-medium truncate"
              >
                {location.phone2}
              </a>
            </div>
          )}
          
          <div className="flex items-center">
            <Mail className="h-3 w-3 text-teal-600 mr-1 flex-shrink-0" />
            <a 
              href={`mailto:${location.email}`}
              className="text-xs text-teal-600 hover:text-teal-700 font-medium truncate"
            >
              {location.email}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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

  const locations = [
    {
      id: 'bengaluru',
      name: 'Bengaluru',
      city: 'Karnataka, India',
      address: 'JP CORP Building, #219/11, 2nd Floor, Bellary Road, Sadashivanagar, Bengaluru-560080',
      phone: '(+91) 95915 99720',
      phone2: '(+91) (80) 41219181',
      email: 'contactus@ibsfintech.com',
      icon: Building
    },
    {
      id: 'usa',
      name: 'USA',
      city: 'New Jersey, USA',
      address: '924 US-9 SUITE 200, South Amboy, NJ 08879',
      phone: '+1 (908) 529-1096',
      email: 'sales-us@ibsfintech.com',
      icon: Globe
    },
    {
      id: 'mumbai-andheri',
      name: 'Mumbai - Andheri',
      city: 'Maharashtra, India',
      address: 'Level – 7, Wing – B, Satellite Gazebo, Guruhargovidji Marg, Andheri Ghatkopar Link Road, Chakala, Andheri, Mumbai - 400093',
      phone: '(+91) 95915 99720',
      email: 'contactus@ibsfintech.com',
      icon: Building
    },
    {
      id: 'mumbai-bkc',
      name: 'Mumbai - BKC',
      city: 'Maharashtra, India',
      address: 'AKT Corporate Office: Level 20, Crescenzo Business District, Bandra Kurla Complex, Bandra, Mumbai - 400051',
      phone: '(+91) 95915 99720',
      email: 'contactus@ibsfintech.com',
      icon: Building
    },
    {
      id: 'gurugram',
      name: 'Gurugram',
      city: 'Haryana, India',
      address: 'Building 8, Level 12, Tower C, DLF Cyber City Complex, 12th Cross Road, DLF City Phase II, Gurgaon, Haryana, 122002',
      phone: '(+91) 95915 99720',
      email: 'contactus@ibsfintech.com',
      icon: Building
    }
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
      const response = await fetch('/.netlify/functions/contact', {
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
    <div className="min-h-screen">
      {/* Banner Section with Contact Us Banner */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/Contact Us Banner.svg"
          alt="Contact Us Banner"
          fill
          className="object-cover"
          priority
        />
        
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]">
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  Get In Touch
                </motion.h1>
                <motion.p 
                  className="text-xl text-white/90 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Connect with our Treasury, Risk & Trade Finance Management® (TRTFM®) experts to start your corporate's digital transformation journey with IBSFINtech.
                </motion.p>
              </div>
              <motion.div
                className="space-y-4 text-white/80"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <p>IBSFINtech has a presence across the globe with offices in multiple cities.</p>
                <p>Fill out our form, and the right team will reach out to you within 2 working days.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section - Horizontal Layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Treasury & Trade Finance Automation</h3>
                      <p className="text-gray-600 mb-1">
                        Email: <a href="mailto:demo@ibsfintech.com" className="text-teal-600 hover:text-teal-700 font-medium">demo@ibsfintech.com</a>
                      </p>
                      <p className="text-gray-600">
                        Phone: <a href="tel:+919591599720" className="text-teal-600 hover:text-teal-700 font-medium">(+91) 95915 99720</a> / <a href="tel:+918041219181" className="text-teal-600 hover:text-teal-700 font-medium">(+91) (80) 41219181</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Globe className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">USA Sales Enquiries</h3>
                      <p className="text-gray-600 mb-1">
                        Email: <a href="mailto:sales-us@ibsfintech.com" className="text-teal-600 hover:text-teal-700 font-medium">sales-us@ibsfintech.com</a>
                      </p>
                      <p className="text-gray-600">
                        Phone: <a href="tel:+19085291096" className="text-teal-600 hover:text-teal-700 font-medium">+1 (908) 529-1096</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Building className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Career Enquiries</h3>
                      <p className="text-gray-600">
                        Email: <a href="mailto:career@ibsfintech.com" className="text-teal-600 hover:text-teal-700 font-medium">career@ibsfintech.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">General Support</h3>
                      <p className="text-gray-600">
                        Email: <a href="mailto:contactus@ibsfintech.com" className="text-teal-600 hover:text-teal-700 font-medium">contactus@ibsfintech.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Thank You!</h3>
                  <p className="mb-4 text-gray-600">
                    Your message has been sent successfully. We'll get back to you within 2 working days.
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service of Interest <span className="text-red-500">*</span></label>
                    <Select onValueChange={handleSelectChange} value={formData.service}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message <span className="text-red-500">*</span></label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white py-3 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Global Offices</h2>
          </motion.div>

          <div className="w-full">
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0 pt-1">
                <span className="text-sm font-medium text-gray-500">INDIA</span>
              </div>
              {locations
                .filter(loc => loc.id !== 'usa')
                .map((location, index) => (
                  <div key={location.id} className="flex-1 min-w-0">
                    <OfficeCard location={location} index={index} />
                  </div>
                ))}
              
              <div className="flex-shrink-0 pt-1">
                <span className="text-sm font-medium text-gray-500">USA</span>
              </div>
              {locations
                .filter(loc => loc.id === 'usa')
                .map((location, index) => (
                  <div key={location.id} className="flex-1 min-w-0">
                    <OfficeCard location={location} index={index} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
