import React from 'react';
import { Quote, Star, Building2, User, Briefcase, Clock } from 'lucide-react';

const TestimonialsPage = () => {
  const featuredTestimonial = {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'CFO',
    company: 'TechNova Solutions',
    content: 'IBSFINtech has transformed our treasury operations. The platform\'s intuitive interface and powerful analytics have given us real-time visibility into our cash positions across all our global entities.',
    rating: 5,
    image: '/testimonial-1.jpg',
    industry: 'Technology',
    implementationTime: '3 months',
    results: '40% reduction in manual processes, 99.9% accuracy in cash forecasting'
  };

  const testimonials = [
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Treasury Manager',
      company: 'Global Retail Corp',
      content: 'The implementation was seamless, and the support team was exceptional. We\'ve seen significant improvements in our cash flow forecasting accuracy.',
      rating: 5,
      industry: 'Retail',
      results: '35% faster month-end close process'
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Finance Director',
      company: 'PharmaLife Ltd',
      content: 'The risk management features have been invaluable for our organization. We now have better control over our foreign exchange exposure.',
      rating: 4,
      industry: 'Pharmaceuticals',
      results: 'Reduced FX losses by 27%'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      role: 'Head of Treasury',
      company: 'GreenEnergy Solutions',
      content: 'The customizable dashboards give us exactly the insights we need. The automation features have saved us countless hours of manual work.',
      rating: 5,
      industry: 'Energy',
      results: 'Eliminated 20 hours of manual reporting per week'
    },
    {
      id: 5,
      name: 'Vikram Mehta',
      role: 'Finance Controller',
      company: 'LogiTrans Global',
      content: 'The bank reconciliation module is a game-changer for us. It has significantly reduced our manual effort and improved accuracy.',
      rating: 4,
      industry: 'Logistics',
      results: '90% reduction in reconciliation time'
    },
    {
      id: 6,
      name: 'Ananya Reddy',
      role: 'CFO',
      company: 'EduTech Innovations',
      content: 'The implementation team understood our unique requirements and delivered a solution that perfectly fits our needs. The training provided was excellent.',
      rating: 5,
      industry: 'Education Technology',
      results: 'Full team adoption within 2 weeks'
    },
    {
      id: 7,
      name: 'Rahul Verma',
      role: 'Treasury Operations Lead',
      company: 'FMCG Global',
      content: 'The multi-currency support and real-time reporting have been particularly valuable for our international operations.',
      rating: 4,
      industry: 'Consumer Goods',
      results: 'Improved visibility across 15+ currencies'
    },
  ];

  const industryStats = [
    { label: 'Clients Served', value: '500+' },
    { label: 'Countries', value: '25+' },
    { label: 'Satisfaction Rate', value: '98%' },
    { label: 'Implementation Success', value: '100%' },
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Client Testimonials
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Hear from our valued clients about their experiences with IBSFINtech's treasury management solutions
          </p>
        </div>
      </div>

      {/* Featured Testimonial */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="md:flex md:items-start">
              <div className="md:flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                  <User className="h-8 w-8" />
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <div className="text-2xl font-semibold text-gray-900">{featuredTestimonial.name}</div>
                <div className="text-blue-600">{featuredTestimonial.role}, {featuredTestimonial.company}</div>
                <div className="mt-4 flex">
                  {renderStars(featuredTestimonial.rating)}
                </div>
                <blockquote className="mt-4 text-lg text-gray-700">
                  <Quote className="h-6 w-6 text-blue-200 float-left mr-2 -mt-1" />
                  <p className="relative">
                    {featuredTestimonial.content}
                  </p>
                </blockquote>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Industry: {featuredTestimonial.industry}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Implementation: {featuredTestimonial.implementationTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Results: {featuredTestimonial.results}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Stats */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {industryStats.map((stat, index) => (
              <div key={index} className="px-4 py-6">
                <p className="text-4xl font-bold text-blue-700">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                <div className="text-sm text-gray-500">
                  <p className="font-medium">Industry: {testimonial.industry}</p>
                  <p className="mt-1">{testimonial.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to transform your treasury operations?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust IBSFINtech for their treasury management needs.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-200"
            >
              Get in Touch
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
