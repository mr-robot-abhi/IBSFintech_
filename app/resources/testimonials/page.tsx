import React from 'react';
import { Quote, Star, Building2, User, Briefcase, Clock, Award, CheckCircle, Zap, BarChart, Shield, TrendingUp } from 'lucide-react';

const TestimonialsPage = () => {
  const featuredTestimonial = {
    id: 1,
    name: 'Bhawani Jhanwar',
    role: 'Chief Financial Officer',
    company: 'Credit Saison India',
    content: 'As part of our digitization initiative, we sought a solution that would streamline and enhance our treasury operations. IBSFINtech solution truly met our expectations and transformed our processes. The platform is intuitive, highly customizable, and integrates effortlessly with our banks and existing ERP, allowing us to manage all our asset classes seamlessly.',
    rating: 5,
    image: '/testimonial-1.jpg',
    industry: 'Financial Services',
    implementationTime: 'Seamless',
    results: 'Significant reduction in period-end reporting timelines, real-time insights, and accelerated decision-making'
  };

  const testimonials = [
    {
      id: 2,
      name: 'Sandeep Modi',
      role: 'Chief Financial Officer',
      company: 'Hindustan Zinc Limited',
      content: 'Our strategic initiative of digital transformation has profoundly reshaped HZL\'s treasury operations. By leveraging IBSFINtech\'s advanced treasury management solution we have streamlined our annual and monthly closing processes, optimized our treasury processes, enhanced accuracy, and significantly accelerated our reporting timelines.',
      rating: 5,
      industry: 'Mining & Metals',
      results: 'Streamlined processes and accelerated reporting'
    },
    {
      id: 3,
      name: 'Sanjay Wadhwa',
      role: 'Chief Financial Officer',
      company: '360 ONE Wealth',
      content: 'The solution is intuitive, highly customizable, and parameterized. We chose IBSFINtech based on its ability to cover all asset classes on a single platform for investment management, as well as its established integration capabilities with numerous banks and current ERPs.',
      rating: 5,
      industry: 'Wealth Management',
      results: 'Comprehensive asset class coverage'
    },
    {
      id: 4,
      name: 'Vishal Maheshwari',
      role: 'General Manager (F&A)',
      company: 'JSW International Tradecorp Pte Ltd',
      content: 'The product has excellent functional features which can cater to need of almost all Trading companies and moreover with customization as per Client\'s requirement, they make it highly user friendly.',
      rating: 5,
      industry: 'Trading',
      results: 'Eliminated manual MIS preparation'
    },
    {
      id: 5,
      name: 'Swati Rane',
      role: 'GM - Corporate Finance',
      company: 'Mahindra & Mahindra Ltd.',
      content: 'With IBSFINtech\'s comprehensive Solution we were able to manage our FX Risk more efficiently with one easy to use and simple system. We now have full visibility and control over each transaction and consolidated position.',
      rating: 5,
      industry: 'Automotive',
      results: 'Real-time monitoring of exposures and hedge positions'
    },
    {
      id: 6,
      name: 'Dinesh Gandhi',
      role: 'GM – Internal Audit',
      company: 'Maruti Suzuki India Ltd.',
      content: 'We have been looking for a TMS for quite some time and finally we closed upon IBSFINtech\'s Innovative Treasury Management system as it proved to be apt for our requirements. They have offered customization, wherever necessary.',
      rating: 5,
      industry: 'Automotive',
      results: 'Perfect fit for requirements'
    },
    {
      id: 7,
      name: 'Kumar Ayashkanta',
      role: 'CIO & Head – Global Corporate Treasury',
      company: 'Wipro Enterprises',
      content: 'We were looking for a suitable Treasury Management Solution to automate our treasury operations. We wanted to move beyond spreadsheet operations, manual management and deploy a dedicated solution.',
      rating: 5,
      industry: 'IT & Consulting',
      results: 'End-to-end connectivity for treasury function'
    },
    {
      id: 8,
      name: 'Manish Duggar',
      role: 'Chief Financial Officer',
      company: 'Mphasis Ltd.',
      content: 'The solution has helped us achieve our goal of streamlining our approach to handle cash, mitigate risks and provided better visibility of our entire treasury portfolio.',
      rating: 5,
      industry: 'IT Services',
      results: 'Real-time visibility into cash, FX & liquidity'
    },
    {
      id: 9,
      name: 'Sanjeev Chhabra',
      role: 'President (Treasury)',
      company: 'Polycab India Ltd.',
      content: 'It was a challenging task for us to find tailormade suitable product under one umbrella to fulfil our organizational needs. IBSFINtech\'s Enterprise Treasury, Risk & Trade Finance Management® (TRTFM®) solution has all the solutions under one bucket.',
      rating: 5,
      industry: 'Electrical Manufacturing',
      results: 'Comprehensive solution under one platform'
    },
    {
      id: 10,
      name: 'Rajesh Agarwal',
      role: 'Chief Financial Officer',
      company: 'Raymond Ltd.',
      content: 'IBSFINtech has transformed our treasury operations with their comprehensive solution. The platform provides real-time visibility and control over our financial operations.',
      rating: 5,
      industry: 'Textiles',
      results: 'Enhanced financial control and visibility'
    }
  ];

  const industryStats = [
    { label: 'Industries Served', value: '10+', icon: <Building2 className="h-8 w-8 mx-auto text-blue-600" /> },
    { label: 'Implementation Success', value: '100%', icon: <CheckCircle className="h-8 w-8 mx-auto text-green-600" /> },
    { label: 'Client Satisfaction', value: '98%', icon: <Star className="h-8 w-8 mx-auto text-yellow-500" /> },
    { label: 'Operational Efficiency', value: '40%', icon: <Zap className="h-8 w-8 mx-auto text-orange-500" /> },
    { label: 'Risk Mitigation', value: '99.9%', icon: <Shield className="h-8 w-8 mx-auto text-purple-600" /> },
    { label: 'ROI Improvement', value: '5x', icon: <TrendingUp className="h-8 w-8 mx-auto text-green-600" /> },
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
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/Banner & Tile Images for Resources & Company page/IBSFINtech-Valued-Clients.jpg)'
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl w-full pl-8 sm:pl-12 lg:pl-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Testimonials</h1>
              <p className="text-xl text-white max-w-3xl">
                Hear from our valued clients about how IBSFINtech has transformed their treasury operations
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our valued clients about how IBSFINtech has transformed their treasury operations
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
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Transforming Treasury Operations</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by leading enterprises across industries to drive efficiency, reduce risk, and unlock growth
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-6">
            {industryStats.map((stat, index) => (
              <div key={index} className="px-4 py-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="mb-3">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how leading organizations are transforming their treasury and trade finance operations
            </p>
          </div>
          
          <div className="space-y-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex md:items-start">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-xl font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <div className="flex items-center">
                      <div>
                        <p className="text-xl font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-blue-700">{testimonial.role}</p>
                        <p className="text-sm font-medium text-gray-600">{testimonial.company}</p>
                      </div>
                      <div className="ml-auto flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    
                    <blockquote className="mt-4 text-gray-700">
                      <Quote className="h-6 w-6 text-blue-200 float-left mr-2 -mt-1" />
                      <p className="relative">
                        {testimonial.content}
                      </p>
                    </blockquote>
                    
                    <div className="mt-6 flex flex-wrap gap-4 text-sm">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                        <Building2 className="h-4 w-4 mr-1" />
                        {testimonial.industry}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        {testimonial.results}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900">
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
