'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, Mail, MapPin, Phone, Building, Globe, Users, Navigation } from 'lucide-react';

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
  const [selectedLocation, setSelectedLocation] = useState('bengaluru');

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
      icon: Building,
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d124398.9898865502!2d77.51643725720824!3d13.005814477664561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJP%20CORP%20Building%2C%20%20%23219%2F11%2C%202nd%20Floor%2C%20Bellary%20Road%2C%20Sadashivanagar%2C%20Bengaluru-560080!5e0!3m2!1sen!2sin!4v1754633889905!5m2!1sen!2sin'
    },
    {
      id: 'usa',
      name: 'USA',
      city: 'New Jersey, USA',
      address: '924 US-9 SUITE 200, South Amboy, NJ 08879',
      phone: '+1 (908) 529-1096',
      email: 'sales-us@ibsfintech.com',
      icon: Globe,
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d388536.16328683443!2d-74.296786!3d40.465557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3cbc3a69fc96d%3A0xde17eae0b48e37db!2s924%20US-9%20SUITE%20200%2C%20South%20Amboy%2C%20NJ%2008879!5e0!3m2!1sen!2sus!4v1754633950981!5m2!1sen!2sus'
    },
    {
      id: 'mumbai-andheri',
      name: 'Mumbai - Andheri',
      city: 'Maharashtra, India',
      address: 'Level – 7, Wing – B, Satellite Gazebo, Guruhargovidji Marg, Andheri Ghatkopar Link Road, Chakala, Andheri, Mumbai - 400093',
      phone: '(+91) 95915 99720',
      email: 'contactus@ibsfintech.com',
      icon: Building,
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d482543.9150441097!2d72.861164!3d19.113168!3m2!1i1024!2i768!4f13.1!2m1!1sLevel%20%E2%80%93%207%2C%20Wing%20%E2%80%93%20B%2C%20Satellite%20Gazebo%2C%20Guruhargovidji%20Marg%2C%20Andheri%20Ghatkopar%20Link%20Road%2C%20Chakala%2C%20Andheri%2C%20Mumbai%20-%20400093!5e0!3m2!1sen!2sus!4v1754634037042!5m2!1sen!2sus'
    },
    {
      id: 'mumbai-bkc',
      name: 'Mumbai - BKC',
      city: 'Maharashtra, India',
      address: 'AKT Corporate Office: Level 20, Crescenzo Business District, Bandra Kurla Complex, Bandra, Mumbai - 400051',
      phone: '(+91) 95915 99720',
      email: 'contactus@ibsfintech.com',
      icon: Building,
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d482683.89675206563!2d72.865175!3d19.065147!3m2!1i1024!2i768!4f13.1!2m1!1sAKT%20Corporate%20Office%3A%20Level%2020%2C%20Crescenzo%20Business%20District%2C%20Bandra%20Kurla%20Complex%2C%20Bandra%2CMumbai%20-%20400051!5e0!3m2!1sen!2sus!4v1754634070129!5m2!1sen!2sus'
    },
    {
      id: 'gurugram',
      name: 'Gurugram',
      city: 'Haryana, India',
      address: 'Building 8, Level 12, Tower C, DLF Cyber City Complex, 12th Cross Road, DLF City Phase II, Gurgaon, Haryana, 122002',
      phone: '(+91) 95915 99720',
      email: 'contactus@ibsfintech.com',
      icon: Building,
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d448825.69714835857!2d77.089842!3d28.496083!3m2!1i1024!2i768!4f13.1!2m1!1sBuilding%208%2C%20Level%2012%2C%20Tower%20C%2C%20DLF%20Cyber%20City%20Complex%2C%2012th%20Cross%20Road%2C%20DLF%20City%20Phase%20II%2C%20Gurgaon%2C%20Haryana%2C%20122002!5e0!3m2!1sen!2sus!4v1754634086880!5m2!1sen!2sus'
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

  const selectedLocationData = locations.find(loc => loc.id === selectedLocation);

  return (
    <div className={`min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get Connected
          </motion.h1>
          <motion.p 
            className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Start your Digital Transformation Journey with IBSFINtech. Talk to our experts today!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Content and Form */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Get In Touch Content */}
            <div className={`p-6 rounded-2xl shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-base mb-4 text-gray-600 dark:text-gray-300">
                Connect with our Treasury, Risk & Trade Finance Management® (TRTFM®) experts to start your corporate's digital transformation journey with IBSFINtech.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                IBSFINtech has a presence across the globe with offices in multiple cities. Find details of all our offices below.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Fill out this simple form, and the right team will reach out to you within 2 working days.
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <Mail className="w-4 h-4 text-teal-600 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      For your Treasury, Risk & Trade Finance automation related requirements, you can write to us at{' '}
                      <a href="mailto:demo@ibsfintech.com" className="text-teal-600 hover:text-teal-700">demo@ibsfintech.com</a>
                      {' '}or call us at <a href="tel:+919591599720" className="text-teal-600 hover:text-teal-700">(+91) 95915 99720</a> / <a href="tel:+918041219181" className="text-teal-600 hover:text-teal-700">(+91) (80) 41219181</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-4 h-4 text-teal-600 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      For sales enquiries in USA, write to us at{' '}
                      <a href="mailto:sales-us@ibsfintech.com" className="text-teal-600 hover:text-teal-700">sales-us@ibsfintech.com</a>
                      {' '}or call us at <a href="tel:+19085291096" className="text-teal-600 hover:text-teal-700">+1 (908) 529-1096</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-4 h-4 text-teal-600 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      For Career related enquiries, write to us at{' '}
                      <a href="mailto:career@ibsfintech.com" className="text-teal-600 hover:text-teal-700">career@ibsfintech.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-4 h-4 text-teal-600 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Drop in a line to us{' '}
                      <a href="mailto:contactus@ibsfintech.com" className="text-teal-600 hover:text-teal-700">contactus@ibsfintech.com</a>
                      {' '}for other enquiries or support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`p-6 rounded-2xl shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-xl font-bold mb-4 text-center">Get Connected</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-center text-sm">
                Start your Digital Transformation Journey with IBSFINtech. Talk to our experts today!
              </p>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                    <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p className={`mb-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name <span className="text-red-500">*</span></label>
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
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
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
                      <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
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
                    <label htmlFor="service" className="block text-sm font-medium mb-1">Service of Interest <span className="text-red-500">*</span></label>
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
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message <span className="text-red-500">*</span></label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={3}
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
                      className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white py-4 text-base font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
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
            </div>
          </motion.div>

          {/* Right Column - Location Selector and Map */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Location Selector */}
            <div className={`p-6 rounded-2xl shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Our Global Offices</h3>
              
              {/* Location Tabs */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
                {locations.map((location) => {
                  const IconComponent = location.icon;
                  return (
                    <button
                      key={location.id}
                      onClick={() => setSelectedLocation(location.id)}
                      className={`p-2 rounded-lg border-2 transition-all duration-200 text-center ${
                        selectedLocation === location.id
                          ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20 shadow-md'
                          : 'border-gray-200 dark:border-gray-600 hover:border-teal-300 hover:shadow-sm'
                      }`}
                    >
                      <IconComponent className={`w-4 h-4 mx-auto mb-1 ${
                        selectedLocation === location.id ? 'text-teal-600' : 'text-gray-500'
                      }`} />
                      <span className={`font-medium text-xs ${
                        selectedLocation === location.id ? 'text-teal-800 dark:text-teal-200' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {location.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Location Details */}
              <AnimatePresence mode="wait">
                {selectedLocationData && (
                  <motion.div
                    key={selectedLocation}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-lg bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 border border-teal-200 dark:border-teal-800"
                  >
                    <div className="flex items-start mb-3">
                      <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-teal-900/30' : 'bg-teal-100'} mr-3`}>
                        <MapPin className={`h-5 w-5 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-1">{selectedLocationData.name}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{selectedLocationData.city}</p>
                        <p className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {selectedLocationData.address}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedLocationData.phone && (
                        <div className="flex items-center">
                          <Phone className={`h-3 w-3 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'} mr-2`} />
                          <a 
                            href={`tel:${selectedLocationData.phone.replace(/\D/g, '')}`}
                            className={`text-xs hover:text-teal-500 transition-colors ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}
                          >
                            {selectedLocationData.phone}
                          </a>
                        </div>
                      )}

                      {selectedLocationData.phone2 && (
                        <div className="flex items-center">
                          <Phone className={`h-3 w-3 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'} mr-2`} />
                          <a 
                            href={`tel:${selectedLocationData.phone2.replace(/\D/g, '')}`}
                            className={`text-xs hover:text-teal-500 transition-colors ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}
                          >
                            {selectedLocationData.phone2}
                          </a>
                        </div>
                      )}

                      <div className="flex items-center md:col-span-2">
                        <Mail className={`h-3 w-3 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'} mr-2`} />
                        <a 
                          href={`mailto:${selectedLocationData.email}`}
                          className={`text-xs hover:text-teal-500 transition-colors ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}
                        >
                          {selectedLocationData.email}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Interactive Map */}
            <div className={`rounded-2xl overflow-hidden shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex-1`}>
              <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                    <Navigation className="w-3 h-3 inline mr-2" />
                    {selectedLocationData?.name} Office
                  </h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Interactive Map
                  </span>
                </div>
              </div>
              <div className="h-[calc(100vh-300px)] min-h-[500px] w-full">
                <AnimatePresence mode="wait">
                  <motion.iframe
                    key={selectedLocation}
                    src={selectedLocationData?.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
