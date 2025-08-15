'use client';

import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Search, Send, Mail } from 'lucide-react';

type JobOpening = {
  id: string;
  title: string;
  experience: string;
  type: string;
  location: string;
};

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Job Category');
  const [selectedType, setSelectedType] = useState('All Job Type');
  const [selectedLocation, setSelectedLocation] = useState('All Job Location');

  const jobOpenings: JobOpening[] = [
    {
      id: '1',
      title: 'Full Stack Developer',
      experience: '3-8 years',
      type: 'Full Time',
      location: 'Bengaluru'
    },
    {
      id: '2',
      title: 'Business Analyst',
      experience: '5-10 years',
      type: 'Full Time',
      location: 'Bengaluru'
    },
    {
      id: '3',
      title: 'Software Engineer – Cloud and DevOps',
      experience: '5-7 years',
      type: 'Full Time',
      location: 'Bengaluru'
    },
    {
      id: '4',
      title: 'Sr. Business Analyst',
      experience: '10-15 years',
      type: 'Full Time',
      location: 'Bengaluru'
    },
    {
      id: '5',
      title: 'Technical Program Manager',
      experience: '10-15 years',
      type: 'Full Time',
      location: 'Bengaluru'
    },
    {
      id: '6',
      title: 'HR Generalist',
      experience: '5-10 years',
      type: 'Full Time',
      location: 'Bengaluru'
    },
    {
      id: '7',
      title: '.Net Core – Senior Software Engineer',
      experience: '5-10 years',
      type: 'Full Time',
      location: 'Bengaluru'
    },
    {
      id: '8',
      title: 'Creative Marketing Expert',
      experience: '3-5 years',
      type: 'Full Time',
      location: 'Bengaluru'
    },
    {
      id: '9',
      title: 'Application Support Analyst',
      experience: '0-2 years',
      type: 'Full Time',
      location: 'Bengaluru'
    },
    {
      id: '10',
      title: 'Oracle DBA',
      experience: '7+ years',
      type: 'Full Time',
      location: 'Bengaluru'
    },
    {
      id: '11',
      title: 'Project Manager',
      experience: '10+ yrs of experience',
      type: 'Full Time',
      location: 'Bengaluru'
    },
    {
      id: '12',
      title: 'Sales Professional',
      experience: '5+ years of Experience',
      type: 'Full Time',
      location: 'Bengaluru'
    },
    {
      id: '13',
      title: 'Product Marketing Manager',
      experience: '6+ years',
      type: 'Full Time',
      location: 'Bengaluru'
    },
    {
      id: '14',
      title: 'Jr. Marketing Associate',
      experience: '3+ Years of experience',
      type: 'Full Time',
      location: 'Bengaluru'
    },
    {
      id: '15',
      title: 'Senior Software Engineer',
      experience: '3-8 years of Experience',
      type: 'Full Time',
      location: 'Bengaluru'
    },
    {
      id: '16',
      title: 'Technical Support Engineer',
      experience: '3-7 Years of Experience',
      type: 'Full Time',
      location: 'Mumbai'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Job Category' || true;
    const matchesType = selectedType === 'All Job Type' || job.type === selectedType;
    const matchesLocation = selectedLocation === 'All Job Location' || job.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesType && matchesLocation;
  });

  const handleApplyNow = (jobId: string) => {
    // Scroll to the application form
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <div className="relative h-80 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/Banner & Tile Images for Resources & Company page/IBSFINtech-Careers.jpg')`
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl w-full pl-8 sm:pl-12 lg:pl-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Welcome to the World of Innovation
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-4xl leading-relaxed">
                Come join the indigenous company revolutionizing the Treasury, Risk & Trade Finance Management® (TRTFM®) space on the global canvas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Message */}
        <div className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you are passionate about technology and love challenges, IBSFINtech is the place to explore your limits and grow beyond them. At IBSFINtech, we believe our success is built by each one of us contributing each day to achieve our common vision & dream.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are always looking for great talent and passionate folks to join our team. If honesty, integrity, discipline, and responsibility match your characteristics, write to us today at{' '}
              <a href="mailto:career@ibsfintech.com" className="text-blue-600 hover:text-blue-800 font-semibold">
                career@ibsfintech.com
              </a>{' '}
              or fill up the form to send us your resume.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore the Current Openings at IBSFINtech.
            </h2>
            <p className="text-xl text-gray-600">
              We are waiting for you to kick-start your Career in the World of Innovation.
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Job Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>All Job Category</option>
                <option>Engineering</option>
                <option>Business Analysis</option>
                <option>Marketing</option>
                <option>Sales</option>
                <option>HR</option>
                <option>Support</option>
              </select>
            </div>

            {/* Job Type Filter */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>All Job Type</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>

            {/* Job Location Filter */}
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>All Job Location</option>
                <option>Bengaluru</option>
                <option>Mumbai</option>
                <option>Pune</option>
                <option>Delhi</option>
                <option>Remote</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="mb-12">
          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-blue-600" />
                        <span className="font-medium">{job.experience}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-5 w-5 mr-2 text-green-600" />
                        <span className="font-medium">{job.type}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-red-600" />
                        <span className="font-medium">{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:ml-6">
                    <button
                      onClick={() => handleApplyNow(job.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center"
                    >
                      Apply Now
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
              <Briefcase className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>

        {/* Application Form */}
        <div id="application-form" className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Apply for a Position
              </h2>
              <p className="text-lg text-gray-600">
                Don't see a role that fits? Send us your resume and we'll contact you when a matching position becomes available.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  Position of Interest
                </label>
                <select
                  id="position"
                  name="position"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a position</option>
                  {jobOpenings.map((job) => (
                    <option key={job.id} value={job.id}>
                      {job.title} - {job.location}
                    </option>
                  ))}
                  <option value="general">General Application</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select experience level</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-8">5-8 years</option>
                  <option value="8-12">8-12 years</option>
                  <option value="12+">12+ years</option>
                </select>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={4}
                  placeholder="Tell us why you're interested in joining IBSFINtech..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-lg transition-colors duration-300 flex items-center mx-auto"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
